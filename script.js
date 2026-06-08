// ========== Modern Cursor Trail ==========
if (window.innerWidth > 1024) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid #ff274b;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorDot.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: #ff274b;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 10px #ff274b;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth follow for main cursor
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        // Faster follow for dot
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Add hover effects for interactive elements
    setTimeout(() => {
        const interactiveElements = document.querySelectorAll('a, button, .nav-link, .skill-card, .info-card, input, textarea');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '60px';
                cursor.style.height = '60px';
                cursor.style.borderColor = '#00d4ff';
                cursorDot.style.width = '12px';
                cursorDot.style.height = '12px';
                cursorDot.style.background = '#00d4ff';
                cursorDot.style.boxShadow = '0 0 15px #00d4ff';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.borderColor = '#ff274b';
                cursorDot.style.width = '8px';
                cursorDot.style.height = '8px';
                cursorDot.style.background = '#ff274b';
                cursorDot.style.boxShadow = '0 0 10px #ff274b';
            });
        });
    }, 1000);
}


    // /* ── Particles ── */
    // const canvas = document.getElementById('particles');
    // const ctx = canvas.getContext('2d');
    // let W, H, particles = [];

    // function resize() {
    //   W = canvas.width = window.innerWidth;
    //   H = canvas.height = window.innerHeight;
    // }
    // resize();
    // window.addEventListener('resize', resize);

    // for (let i=0; i<80; i++) {
    //   particles.push({
    //     x: Math.random()*window.innerWidth,
    //     y: Math.random()*window.innerHeight,
    //     r: Math.random()*1.5+0.2,
    //     dx: (Math.random()-0.5)*0.3,
    //     dy: (Math.random()-0.5)*0.3,
    //     o: Math.random()*0.5+0.1
    //   });
    // }

    // function drawParticles() {
    //   ctx.clearRect(0,0,W,H);
    //   particles.forEach(p => {
    //     ctx.beginPath();
    //     ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    //     ctx.fillStyle = `rgba(0,255,170,${p.o})`;
    //     ctx.fill();
    //     p.x += p.dx; p.y += p.dy;
    //     if(p.x<0||p.x>W) p.dx*=-1;
    //     if(p.y<0||p.y>H) p.dy*=-1;
    //   });

    //   // Draw connecting lines near mouse
    //   particles.forEach((a,i) => {
    //     particles.slice(i+1).forEach(b => {
    //       const dist = Math.hypot(a.x-b.x, a.y-b.y);
    //       if(dist < 120) {
    //         ctx.beginPath();
    //         ctx.strokeStyle = `rgba(0,255,170,${0.04*(1-dist/120)})`;
    //         ctx.lineWidth = 0.5;
    //         ctx.moveTo(a.x, a.y);
    //         ctx.lineTo(b.x, b.y);
    //         ctx.stroke();
    //       }
    //     });
    //   });

    //   requestAnimationFrame(drawParticles);
    // }
    // drawParticles();

    /* ── Smooth Scroll ── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
      });
    });

    /* ── Scroll Reveal ── */
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if(entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ── 3D Tilt on Cards ── */
    document.querySelectorAll('.exp-card, .project-card, .stat-box').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left - r.width/2;
        const y = e.clientY - r.top - r.height/2;
        const rotX = (-y / r.height) * 6;
        const rotY = (x / r.width) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    /* ── Navbar scroll shrink ── */
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      nav.style.padding = window.scrollY > 40 ? '0.8rem 3rem' : '1.2rem 3rem';
    });