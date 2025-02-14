
document.addEventListener('DOMContentLoaded', function() {

    const button = document.createElement('button');
    button.textContent = 'Нажми меня!';
    button.classList.add('custom-button');
    
    button.addEventListener('click', function() {
        alert('Привет! Вы нажали на кнопку!');
    });
    

    document.body.appendChild(button);
});


const styles = `
    .custom-button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }
    
    .custom-button:hover {
        background-color: #45a049;
    }
`;

// Создаем и добавляем стили на страницу
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);