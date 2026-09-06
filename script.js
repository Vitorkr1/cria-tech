document.addEventListener('DOMContentLoaded', () => {

  // ===========================
  // CURSOR PERSONALIZADO
  // ===========================
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (cursor && follower) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .service-card, .port-card, .team-card, .client-card, .port-filter, .btn-ver-projeto, .modal-close, .floating-whatsapp, .back-to-top').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(2)';
        follower.style.width = '50px';
        follower.style.height = '50px';
        follower.style.borderColor = 'rgba(0,73,255,0.8)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        follower.style.width = '32px';
        follower.style.height = '32px';
        follower.style.borderColor = 'rgba(0,73,255,0.5)';
      });
    });
  }

  // ===========================
  // PARTICLES CANVAS
  // ===========================
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles;
    const NUM = 60;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function createParticles() {
      particles = Array.from({ length: NUM }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1
      }));
    }
    createParticles();

    function drawParticles() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 73, 255, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });
      // lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,73,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }

  // ===========================
  // HEADER SCROLL
  // ===========================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // ===========================
  // HAMBURGER MENU
  // ===========================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    const setNavOpen = (open) => {
      hamburger.classList.toggle('open', open);
      navLinks.classList.toggle('open', open);
      document.body.classList.toggle('nav-open', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    hamburger.addEventListener('click', () => {
      setNavOpen(!navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setNavOpen(false));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) setNavOpen(false);
    });
  }

  // ===========================
  // REVEAL ON SCROLL
  // ===========================
  const revealEls = document.querySelectorAll('[data-reveal], [data-reveal-right]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger delay based on sibling index
        const siblings = Array.from(entry.target.parentElement.children);
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (idx * 0.08) + 's';
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  // ===========================
  // COUNTER ANIMATION
  // ===========================
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const duration = 1800;
        const start = performance.now();
        function animate(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target);
          if (progress < 1) requestAnimationFrame(animate);
          else el.textContent = target;
        }
        requestAnimationFrame(animate);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  // ===========================
  // FOOTER YEAR
  // ===========================
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===========================
  // FORM HANDLER
  // ===========================
  window.submitForm = function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const service = document.getElementById('service-select')?.value || '';
    if (!name || !email || !message) return;
    const text = encodeURIComponent(
      `Olá! Sou ${name} (${email}).${service ? '\nServiço de interesse: ' + service : ''}\n\n${message}`
    );
    window.open(`https://wa.me/5581996744143?text=${text}`, '_blank');
    const status = document.getElementById('formStatus');
    if (status) {
      status.textContent = '✓ Redirecionando para o WhatsApp...';
      status.style.color = '#00ff88';
    }
  };

  // ===========================
  // ACTIVE NAV LINK ON SCROLL
  // ===========================
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = '#fff';
          }
        });
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => activeObserver.observe(s));

  // ===========================
  // PARALLAX HERO GLOW
  // ===========================
  const heroGlow = document.querySelector('.hero-bg-glow');
  if (heroGlow) {
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      heroGlow.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ===========================
  // SMOOTH SCROLL
  // ===========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===========================
  // SCROLL PROGRESS BAR
  // ===========================
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ===========================
  // PORTFOLIO — FILTROS POR CATEGORIA
  // ===========================
  const portFilters = document.querySelectorAll('.port-filter');
  const portCards = document.querySelectorAll('#portfolioGrid .port-card');
  const portEmpty = document.getElementById('portEmpty');
  portFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      portFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      let visibleCount = 0;
      portCards.forEach(card => {
        const match = filter === 'todos' || card.dataset.category === filter;
        card.classList.toggle('filtered-out', !match);
        if (match) visibleCount++;
      });
      if (portEmpty) portEmpty.hidden = visibleCount !== 0;
    });
  });

  // ===========================
  // PROJECT MODAL (janela de projeto)
  // ===========================
  const PROJECTS = {
    barberpro: {
      title: 'BarberPro',
      category: 'Sistema de Agendamento',
      image: 'Barbearia.jpg',
      description: 'Sistema completo de agendamento para barbearias e salões modernos: agenda online 24h, confirmação automática via WhatsApp, cadastro de clientes, registro de cortes e relatórios de faturamento em tempo real.',
      tags: ['Agendamento Online', 'WhatsApp', 'Multiusuário', 'Relatórios'],
      live: 'https://barberpro-6yix.onrender.com/'
    },
    vitalis: {
      title: 'Clínica Vitalis',
      category: 'Site Institucional',
      image: 'clinic-management.webp',
      description: 'Site institucional para clínica, com design responsivo, apresentação de especialidades, equipe médica e canais de contato direto para agendamento de consultas.',
      tags: ['Site Responsivo', 'SEO', 'Institucional']
    },
    fitpro: {
      title: 'FitPro Academia',
      category: 'Landing Page',
      image: 'Academia.jpg',
      description: 'Landing page de alta conversão para academia, com foco em captação de novos alunos, planos em destaque e chamadas diretas para matrícula.',
      tags: ['Landing Page', 'Alta Conversão', 'Mobile-first']
    },
    flow: {
      title: 'Flow Solutions',
      category: 'Sistema Web',
      image: 'sistema-cgk.jpg',
      description: 'Sistema web sob medida com dashboard de gestão, controle de processos internos e painéis de indicadores para tomada de decisão.',
      tags: ['Dashboard', 'Gestão', 'Sistema sob medida']
    },
    registro: {
      title: 'Registro de produtos',
      category: 'Sistema de Registro',
      image: 'ChatGPT Image 23 de abr. de 2026, 09_48_43.png',
      description: 'Sistema de registro e controle de produtos/cortes, com histórico completo por cliente e organização do fluxo de atendimento.',
      tags: ['Registro', 'Controle', 'Histórico']
    },
    finpilot: {
      title: 'FinPilot AI',
      category: 'Sistema com Inteligência Artificial',
      image: null,
      description: 'Sistema inteligente de gestão financeira com dashboards automatizados, análise de fluxo de caixa e insights gerados por Inteligência Artificial para ajudar na tomada de decisão do negócio.',
      tags: ['Inteligência Artificial', 'Financeiro', 'Dashboards'],
      live: 'https://finpilot-ai-dvei.onrender.com/'
    }
  };

  const projectModal = document.getElementById('projectModal');
  const modalWindow = document.getElementById('modalWindow');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitleBar = document.getElementById('modalProjectTitle');
  const modalImage = document.getElementById('modalImage');
  const modalFallback = document.getElementById('modalFallback');
  const modalCategory = document.getElementById('modalCategory');
  const modalHeading = document.getElementById('modalHeading');
  const modalDescription = document.getElementById('modalDescription');
  const modalTags = document.getElementById('modalTags');
  const modalCTA = document.getElementById('modalCTA');
  const modalLive = document.getElementById('modalLive');

  let lastFocusedEl = null;

  function openProjectModal(id) {
    const project = PROJECTS[id];
    if (!project || !projectModal) return;

    modalTitleBar.textContent = project.title;
    modalHeading.textContent = project.title;
    modalDescription.textContent = project.description;
    modalCategory.textContent = project.category;

    if (project.image) {
      modalImage.src = project.image;
      modalImage.alt = project.title;
      modalImage.hidden = false;
      modalFallback.hidden = true;
    } else {
      modalImage.hidden = true;
      modalFallback.hidden = false;
    }

    modalTags.innerHTML = '';
    project.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    if (project.live) {
      modalLive.href = project.live;
      modalLive.hidden = false;
    } else {
      modalLive.hidden = true;
    }

    const waText = encodeURIComponent(`Olá! Vi o projeto ${project.title} no portfólio da CriaTech e quero um orçamento de um projeto parecido.`);
    modalCTA.href = `https://wa.me/5581996744143?text=${waText}`;

    lastFocusedEl = document.activeElement;
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalClose.focus();
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  document.querySelectorAll('.btn-ver-projeto').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openProjectModal(btn.dataset.project);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) closeProjectModal();
  });

  // ===========================
  // BOTÃO FLUTUANTE WHATSAPP — entrada animada
  // ===========================
  const floatingWhatsapp = document.getElementById('floatingWhatsapp');
  if (floatingWhatsapp) {
    setTimeout(() => floatingWhatsapp.classList.add('fw-visible'), 1200);
  }

  // ===========================
  // BOTÃO VOLTAR AO TOPO
  // ===========================
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===========================
  // EFEITO MAGNÉTICO (botões flutuantes)
  // ===========================
  if (!isTouchDeviceMagnet()) {
    document.querySelectorAll('.floating-whatsapp, .back-to-top').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
  function isTouchDeviceMagnet() {
    return window.matchMedia('(hover: none)').matches;
  }

  // ===========================
  // TILT 3D NOS CARDS (hover)
  // ===========================
  const tiltEls = document.querySelectorAll('.service-card, .port-card, .team-card, .client-card');
  const isTouchDevice = window.matchMedia('(hover: none)').matches;
  if (!isTouchDevice) {
    tiltEls.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -8;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

});
