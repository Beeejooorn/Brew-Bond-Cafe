const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
            animatedElements.forEach(el => observer.observe(el));

            // Trigger hero animation on page load
            setTimeout(() => {
                document.querySelector('.hero-content').classList.add('appear');
            }, 100);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // scroll effect 
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            }
            
            lastScroll = currentScroll;
        });

        // Button click handlers
        document.querySelectorAll('.btn-small').forEach(btn => {
            btn.addEventListener('click', function() {
                alert('View more details about this product!');
            });
        });



        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const productName = this.closest('.product-card').querySelector('.product-name').textContent;
                const productPrice = this.closest('.product-card').querySelector('.product-price').textContent;
                
                // Change button text temporarily
                const originalText = this.textContent;
                this.textContent = 'Added!';
                this.style.background = '#4a3428';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = 'transparent';
                    this.style.color = '#4a3428';
                }, 1500);
                
                console.log(`Added ${productName} - ${productPrice} to cart`);
            });
        });

        // Product card click
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function() {
                const productName = this.querySelector('.product-name').textContent;
                console.log(`Viewing details for: ${productName}`);
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            }
        });