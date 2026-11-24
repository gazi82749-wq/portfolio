/* ==========================================================
   GAZI ABBAS — Portfolio JavaScript
   AI Operations & Automation | Software Developer
   ========================================================== */

// ============================================================
// CONTACT CONFIGURATION — Edit your details here
// ============================================================
const CONTACT_CONFIG = {
    email: 'gazi82749@gmail.com',          // Gazi Abbas's direct email
    // phone: '+91-XXXXXXXXXX',            // Uncomment and replace when ready
};

// Apply contact config
document.addEventListener('DOMContentLoaded', function () {
    const emailLink = document.getElementById('emailLink');
    if (emailLink && CONTACT_CONFIG.email) {
        emailLink.href = 'mailto:' + CONTACT_CONFIG.email;
    }

    // Set current year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    initNavigation();
    initSmoothScroll();
    initActiveSectionHighlight();
    initScrollAnimations();
    initWorkflowAnimation();
});

// ============================================================
// MOBILE NAVIGATION
// ============================================================
function initNavigation() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    menu.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains('open')) {
            menu.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Keyboard: Escape closes menu
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            menu.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            toggle.focus();
        }
    });
}

// ============================================================
// SMOOTH SCROLLING
// ============================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================================
// ACTIVE SECTION HIGHLIGHTING
// ============================================================
function initActiveSectionHighlight() {
    var navLinks = document.querySelectorAll('.nav__link');
    var sections = [];

    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            var section = document.querySelector(href);
            if (section) {
                sections.push({ el: section, link: link });
            }
        }
    });

    if (sections.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function (l) { l.classList.remove('active'); });
                var match = sections.find(function (s) { return s.el === entry.target; });
                if (match) {
                    match.link.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    });

    sections.forEach(function (s) { observer.observe(s.el); });
}

// ============================================================
// SCROLL ANIMATIONS (fade-in)
// ============================================================
function initScrollAnimations() {
    // Add fade-in class to major elements
    var selectors = [
        '.about-card',
        '.case-study__section',
        '.project-card',
        '.method-step',
        '.principle-item',
        '.skill-group',
        '.contact-link',
        '.about__education',
        '.section__title'
    ];

    selectors.forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (el) {
            el.classList.add('fade-in');
        });
    });

    // Check reduced-motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.fade-in').forEach(function (el) {
            el.classList.add('visible');
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(function (el) {
        observer.observe(el);
    });
}

// ============================================================
// WORKFLOW ANIMATION (Hero Pipeline)
// ============================================================
function initWorkflowAnimation() {
    var nodes = document.querySelectorAll('.pipeline-node');
    var feedLine = document.getElementById('heroFeedLine');
    if (nodes.length === 0) return;

    var telemetryLogs = [
        { tag: 'INGEST', msg: 'Task Master queued item #TK-842 · Proof link standby' },
        { tag: 'LOCKSERVICE', msg: 'Lock acquired · Deduplication verified across active cycles' },
        { tag: 'VALIDATION', msg: 'Drive screenshot proof validated · Schema integrity OK' },
        { tag: 'AUTOMATION', msg: 'Apps Script logged completion · Next 7-day cycle generated' },
        { tag: 'DASHBOARD', msg: 'Manager metrics refreshed · Audit record written to sheet' },
        { tag: 'SLA_BREACH', msg: 'Deadline elapsed + 15m grace · Manager alert dispatched' }
    ];

    var current = 3; // start at step 4 (Automation)

    function updateStep(index) {
        nodes.forEach(function (n) { n.classList.remove('active-node'); });
        nodes[index].classList.add('active-node');

        if (feedLine && telemetryLogs[index]) {
            var now = new Date();
            var timeStr = '[' + 
                String(now.getHours()).padStart(2, '0') + ':' + 
                String(now.getMinutes()).padStart(2, '0') + ':' + 
                String(now.getSeconds()).padStart(2, '0') + ']';
            
            feedLine.innerHTML = 
                '<span class="feed-ts">' + timeStr + '</span> ' +
                '<span class="feed-tag">' + telemetryLogs[index].tag + '</span> ' +
                '<span class="feed-text">' + telemetryLogs[index].msg + '</span>';
        }
    }

    // Allow user to click any node to inspect
    nodes.forEach(function (node, idx) {
        node.addEventListener('click', function () {
            current = idx;
            updateStep(current);
        });
    });

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        updateStep(current);
        return;
    }

    setInterval(function () {
        current = (current + 1) % nodes.length;
        updateStep(current);
    }, 2400);
}

