(function() {
    // 使用域名作为 key 的一部分，区分不同项目
    const STORAGE_KEY = 'admin_history_bar_' + window.location.hostname.replace(/\./g, '_');
    const MAX_ITEMS = 20;
    
    function getHistory() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } catch {
            return [];
        }
    }
    
    function saveHistory(history) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    }
    
    function getPageTitle() {
        const breadcrumb = document.querySelector('.breadcrumbs');
        if (breadcrumb) {
            // 获取所有面包屑链接
            const items = breadcrumb.querySelectorAll('a');
            
            if (items.length > 0) {
                // 排除 "Home"，收集其他所有面包屑文本
                const pathParts = [];
                items.forEach(function(item) {
                    const text = item.textContent.trim();
                    // 跳过 Home 链接
                    if (text && text !== 'Home') {
                        pathParts.push(text);
                    }
                });
                
                // 如果面包屑后面还有文本（当前页面名称），也加上
                const breadcrumbText = breadcrumb.textContent;
                const lastLink = items[items.length - 1];
                const afterLastLink = breadcrumbText.substring(
                    breadcrumbText.indexOf(lastLink.textContent) + lastLink.textContent.length
                ).trim();
                
                // 提取当前页面名称（在最后一个链接之后，分隔符之前）
                if (afterLastLink) {
                    const currentPage = afterLastLink.replace(/^[›\s]+/, '').split('›')[0].trim();
                    if (currentPage && currentPage !== pathParts[pathParts.length - 1]) {
                        pathParts.push(currentPage);
                    }
                }
                
                if (pathParts.length > 0) {
                    return pathParts.join(' › ');
                }
            }
        }
        
        // 备用方案：使用 h1 标题
        const header = document.querySelector('h1');
        return header ? header.textContent.trim() : '未知页面';
    }
    
    function buildHistoryItem(item, isActive) {
        const div = document.createElement('a');
        div.className = 'history-item' + (isActive ? ' active' : '');
        div.href = item.url;
        div.title = item.url;
        div.innerHTML = `
            <span>${item.title}</span>
            <span class="history-close-btn" data-url="${item.url}">&times;</span>
        `;
        return div;
    }
    
    function renderHistory() {
        const container = document.getElementById('history-bar-scroll');
        if (!container) return;
        
        const history = getHistory();
        const currentUrl = window.location.pathname + window.location.search;
        
        container.innerHTML = '';
        
        history.forEach((item) => {
            const el = buildHistoryItem(item, item.url === currentUrl);
            el.querySelector('.history-close-btn').addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                removeHistoryItem(item.url);
            });
            container.appendChild(el);
        });
    }
    
    function addCurrentPage() {
        const url = window.location.pathname + window.location.search;
        if (!url.includes('/admin/')) return;
        // 不保存登录页面到历史记录
        if (window.location.pathname === '/admin/login' || window.location.pathname.startsWith('/admin/login/')) {
            return;
        }
        
        const history = getHistory();
        const existingIndex = history.findIndex(h => h.url === url);
        
        if (existingIndex === -1) {
            const title = getPageTitle();
            history.push({ url: url, title: title, time: Date.now() });
            
            if (history.length > MAX_ITEMS) {
                history.shift();
            }
        }
        
        saveHistory(history);
        renderHistory();
    }
    
    function removeHistoryItem(url) {
        let history = getHistory();
        history = history.filter(h => h.url !== url);
        saveHistory(history);
        renderHistory();
    }
    
    function initHistoryBar() {
        // 不在登录页面显示历史记录栏
        const pathname = window.location.pathname;
        if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) {
            return;
        }
        
        const bar = document.createElement('div');
        bar.id = 'history-bar';
        bar.innerHTML = `<div id="history-bar-scroll"></div>`;
        
        const breadcrumbs = document.querySelector('#breadcrumbs');
        if (breadcrumbs) {
            breadcrumbs.parentNode.insertBefore(bar, breadcrumbs.nextSibling);
        } else {
            const header = document.querySelector('#header');
            if (header) {
                header.parentNode.insertBefore(bar, header.nextSibling);
            } else {
                document.body.appendChild(bar);
            }
        }
        
        bar.addEventListener('click', function(e) {
            if (e.target.classList.contains('history-item') && !e.target.classList.contains('history-close-btn')) {
                e.preventDefault();
                window.location.href = e.target.href;
            }
        });
        
        renderHistory();
        
        if (document.readyState === 'complete') {
            addCurrentPage();
        } else {
            window.addEventListener('load', addCurrentPage);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHistoryBar);
    } else {
        initHistoryBar();
    }
})();
