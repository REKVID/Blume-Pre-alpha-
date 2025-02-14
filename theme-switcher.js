document.addEventListener('DOMContentLoaded', function() {
    // 
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌓';
    themeToggle.classList.add('theme-toggle');
    
    const styles = `
        .theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px;
            font-size: 20px;
            cursor: pointer;
            border-radius: 5px;
            border: 1px solid #ccc;
            background: white;
        }
        
        .dark-theme {
            background-color: #333;
            color: white;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
    
    // Проверяем сохраненную тему
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    document.body.appendChild(themeToggle);
});