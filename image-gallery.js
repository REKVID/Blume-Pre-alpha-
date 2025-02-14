document.addEventListener('DOMContentLoaded', function() {
    const styles = `
        .gallery-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px;
        }
        
        .gallery-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            cursor: pointer;
            transition: transform 0.3s;
        }
        
        .gallery-image:hover {
            transform: scale(1.05);
        }
        
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            justify-content: center;
            align-items: center;
        }
        
        .modal img {
            max-width: 90%;
            max-height: 90vh;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
  
    const gallery = document.createElement('div');
    gallery.classList.add('gallery-container');
    
  
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImg = document.createElement('img');
    modal.appendChild(modalImg);
    
   
    const images = [
        'https://picsum.photos/id/1/800/600',
        'https://picsum.photos/id/2/800/600',
        'https://picsum.photos/id/3/800/600'
    ];
    
  
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('gallery-image');
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = src;
        });
        gallery.appendChild(img);
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    document.body.appendChild(gallery);
    document.body.appendChild(modal);
});