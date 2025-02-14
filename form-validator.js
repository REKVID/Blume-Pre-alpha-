document.addEventListener('DOMContentLoaded', function() {
    const form = document.createElement('form');
    form.classList.add('validated-form');
    
    const styles = `
        .validated-form {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .error {
            color: red;
            font-size: 12px;
            margin-top: 5px;
            display: none;
        }
        
        input.invalid {
            border-color: red;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    // Создаем поля формы
    const formHTML = `
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <div class="error" id="email-error">Введите корректный email</div>
        </div>
        <div class="form-group">
            <label for="password">Пароль:</label>
            <input type="password" id="password" required>
            <div class="error" id="password-error">Пароль должен быть не менее 6 символов</div>
        </div>
        <button type="submit">Отправить</button>
    `;
    
    form.innerHTML = formHTML;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        let isValid = true;
        
        // Проверка email
        if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            document.getElementById('email-error').style.display = 'block';
            email.classList.add('invalid');
            isValid = false;
        } else {
            document.getElementById('email-error').style.display = 'none';
            email.classList.remove('invalid');
        }
        
        // Проверка пароля
        if (password.value.length < 6) {
            document.getElementById('password-error').style.display = 'block';
            password.classList.add('invalid');
            isValid = false;
        } else {
            document.getElementById('password-error').style.display = 'none';
            password.classList.remove('invalid');
        }
        
        if (isValid) {
            alert('Форма успешно отправлена!');
            form.reset();
        }
    });
    
    document.body.appendChild(form);
});