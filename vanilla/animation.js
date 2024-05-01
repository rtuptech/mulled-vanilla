// JavaScript
          var lastScrollPosition = 0;
          window.addEventListener('scroll', function() {
            var scrollPosition = window.scrollY;
            var imgProduct1 = document.querySelector('.img-product-1');
            var bagOpen = document.querySelector('.bag-open');
            var bgAnimate1 = document.querySelector('.bg-animate-1');
            if (scrollPosition < lastScrollPosition) {
              // Page is scrolling up
              imgProduct1.style.transform = `translateY(${scrollPosition}px) rotate(0deg) translateX(0)`;
              imgProduct1.style.left = '';
            } else {
              // Page is scrolling down
              imgProduct1.style.transform = `translateY(${scrollPosition}px) rotate(-8deg) translateX(-20vw)`;
              imgProduct1.style.left = '50%';
            }
            if (scrollPosition > lastScrollPosition) {
              // Page is scrolling down
              bgAnimate1.style.transform = 'scale(1)';
            } else {
              // Page is scrolling up
              bgAnimate1.style.transform = '';
            }
            if (scrollPosition > lastScrollPosition) {
              // Page is scrolling down
              document.querySelector('img.bg-animate-2').style.cssText = 'left: -35rem; bottom: -35rem; transform: scale(1) ';
              document.querySelector('img.bg-animate-3').style.cssText = 'left: -55rem; transform: scale(1)';
              document.querySelector('img.bg-animate-4').style.cssText = 'left: -40rem; bottom: 38rem; transform: scale(1)';
              document.querySelector('img.bg-animate-5').style.cssText = 'left: -35rem; bottom: 55rem; transform: scale(1)';
              document.querySelector('img.bg-animate-6').style.cssText = 'right: -35rem; bottom: 30rem; transform: scale(1)';
              document.querySelector('img.bg-animate-7').style.cssText = 'right: -27rem; bottom: 45rem; transform: scale(1)';
              document.querySelector('img.bg-animate-8').style.cssText = 'right: -35rem; bottom: -10rem; transform: scale(1)';
              document.querySelector('img.bg-animate-9').style.cssText = 'right: -25rem; bottom: -35rem; transform: scale(1)';
            } else {
              document.querySelector('img.bg-animate-2').style.cssText = '';
              document.querySelector('img.bg-animate-3').style.cssText = '';
              document.querySelector('img.bg-animate-4').style.cssText = '';
              document.querySelector('img.bg-animate-5').style.cssText = '';
              document.querySelector('img.bg-animate-6').style.cssText = '';
              document.querySelector('img.bg-animate-7').style.cssText = '';
              document.querySelector('img.bg-animate-8').style.cssText = '';
              document.querySelector('img.bg-animate-9').style.cssText = ')';
            }
            // Update the last scroll position
            lastScrollPosition = scrollPosition;
          });
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
              e.preventDefault();
              var target = document.querySelector(this.getAttribute('href'));
              var targetPosition = target.getBoundingClientRect().top;
              var startPosition = window.pageYOffset;
              var distance = targetPosition;
              var duration = 1500; // Increase this value to slow down the scroll speed
              var start = null;

              function step(timestamp) {
                if (!start) start = timestamp;
                var progress = timestamp - start;
                window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
                if (progress < duration) window.requestAnimationFrame(step);
              }

              function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
              }
              window.requestAnimationFrame(step);
            });
          });