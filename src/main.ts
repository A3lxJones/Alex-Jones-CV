import "./style.css";

// ── Scroll Progress Bar ──
function updateScrollProgress(): void {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  bar.style.width = `${progress}%`;
}

// ── Scroll Reveal (Intersection Observer) ──
function initScrollReveal(): void {
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// ── Typing Effect ──
function initTypingEffect(): void {
  const el = document.getElementById("typing-text");
  if (!el) return;

  const strings: string[] = [
    "Apprentice Software Engineer",
    "Computing Systems Student",
    "Ice Hockey International",
    "Inline Hockey Coach",
    "Problem Solver",
  ];

  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type(): void {
    if (!el) return;
    const current = strings[stringIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let timeout = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      timeout = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length;
      timeout = 500;
    }

    setTimeout(type, timeout);
  }

  type();
}

// ── Navbar Scroll Behaviour ──
function initNavbar(): void {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 80) {
      navbar.classList.add(
        "bg-dark/95",
        "backdrop-blur-xl",
        "shadow-2xl"
      );
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove(
        "bg-dark/95",
        "backdrop-blur-xl",
        "shadow-2xl"
      );
      navbar.classList.add("bg-transparent");
    }

    // Hide/show on scroll direction
    if (currentScroll > lastScroll && currentScroll > 300) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
  });
}

// ── Active Nav Link Highlighting ──
function initActiveNavLinks(): void {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionEl = section as HTMLElement;
      const top = sectionEl.offsetTop - 150;
      if (window.scrollY >= top) {
        current = sectionEl.getAttribute("id") || "";
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active", "text-primary");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active", "text-primary");
      }
    });
  });
}

// ── Mobile Menu Toggle ──
function initMobileMenu(): void {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    });
  });
}

// ── Particle Background ──
function initParticles(): void {
  const container = document.getElementById("particles");
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.setProperty("--dx", `${(Math.random() - 0.5) * 200}px`);
    particle.style.setProperty("--dy", `${(Math.random() - 0.5) * 200}px`);
    particle.style.setProperty("--duration", `${5 + Math.random() * 10}s`);
    particle.style.setProperty("--delay", `${Math.random() * 5}s`);
    particle.style.width = `${2 + Math.random() * 4}px`;
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

// ── Counter Animation ──
function initCounters(): void {
  const counters = document.querySelectorAll("[data-count]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.getAttribute("data-count") || "0", 10);
          let current = 0;
          const step = Math.max(1, Math.floor(target / 60));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            el.textContent = current.toString();
          }, 30);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

// ── Smooth Scroll for anchor links ──
function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e: Event) => {
      e.preventDefault();
      const href = (anchor as HTMLAnchorElement).getAttribute("href");
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ── Tilt Effect on Cards ──
function initTiltCards(): void {
  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach((card) => {
    const el = card as HTMLElement;

    el.addEventListener("mousemove", (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
  });
}

// ── Skill Bar Animation ──
function initSkillBars(): void {
  const bars = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const width = el.getAttribute("data-width") || "0";
          el.style.width = `${width}%`;
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

// ── Back to Top Button ──
function initBackToTop(): void {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.remove("opacity-0", "pointer-events-none");
      btn.classList.add("opacity-100");
    } else {
      btn.classList.add("opacity-0", "pointer-events-none");
      btn.classList.remove("opacity-100");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── Scroll Event Listener ──
window.addEventListener("scroll", updateScrollProgress);

// ── Init on DOM Ready ──
document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  initTypingEffect();
  initNavbar();
  initActiveNavLinks();
  initMobileMenu();
  initParticles();
  initCounters();
  initSmoothScroll();
  initTiltCards();
  initSkillBars();
  initBackToTop();
});
