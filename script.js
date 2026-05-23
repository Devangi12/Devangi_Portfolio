/* ============================================
   Devangi Patel — Portfolio Scripts
   ============================================ */

const GITHUB_PROFILE = 'https://github.com/Devangi12';
const CONTACT_EMAIL = 'devangipatel1211@gmail.com';
const CONTACT_LINKEDIN = 'https://www.linkedin.com/in/devangipatel121105';
const TYPED_PHRASES = [
    'B.Tech ECE Student',
    'Learning Embedded Systems',
    'Exploring IoT & Sensors',
    'Building with ESP32 & Arduino'
];

const SKILLS_DATA = [
    {
        icon: 'fa-code',
        title: 'Programming',
        bars: [
            { name: 'Python', level: 85 },
            { name: 'C / Arduino C', level: 80 }
        ],
        tags: ['Python', 'C', 'Arduino C', 'C++']
    },
    {
        icon: 'fa-microchip',
        title: 'Embedded & Hardware',
        bars: [
            { name: 'ESP32 / Microcontrollers', level: 88 },
            { name: 'Sensor Integration', level: 85 },
            { name: 'Biomedical Sensors', level: 78 }
        ],
        tags: ['ESP32', 'Raspberry Pi', 'LoRa', 'MAX30102', 'MPU6050']
    },
    {
        icon: 'fa-robot',
        title: 'Robotics & Platforms',
        bars: [
            { name: 'ROS Simulation', level: 72 },
            { name: 'System Architecture', level: 80 }
        ],
        tags: ['ROS', 'OpenCV', 'ThingSpeak', 'Git/GitHub']
    },
    {
        icon: 'fa-network-wired',
        title: 'Domains & Concepts',
        bars: [
            { name: 'IoT & Wireless', level: 82 },
            { name: 'Edge AI / CV', level: 75 },
            { name: 'Industry 4.0', level: 70 }
        ],
        tags: ['Sensor Fusion', 'LoRa', 'PPG Analysis', 'Predictive Analytics', 'Real-time Systems']
    }
];

const PROJECTS = [
    {
        id: 'predictive',
        title: 'Smart Machine Health Monitor',
        event: 'Industry 4.0 · Predictive Maintenance',
        icon: 'fa-industry',
        categories: ['iot', 'ai', 'embedded'],
        summary: 'Real-time predictive maintenance using ESP32 — monitors temperature, vibration & current with hybrid fault detection, local LED/buzzer alerts, and ThingSpeak cloud dashboard.',
        overview: 'Industry 4.0 machine health system with hybrid detection algorithm. Continuous sensor acquisition (DS18B20, MPU6050, ACS712) feeds local alerts and cloud analytics for equipment reliability.',
        tech: ['ESP32', 'DS18B20', 'MPU6050', 'ACS712', 'ThingSpeak', 'C++'],
        features: [
            'Temperature, vibration & current monitoring',
            'Hybrid fault detection algorithm',
            'Local LED and buzzer alerts',
            'ThingSpeak cloud dashboard',
            'Predictive maintenance workflows'
        ],
        contribution: 'End-to-end firmware, sensor integration, hybrid detection logic, and IoT cloud pipeline.',
        concepts: 'IIoT, predictive maintenance, anomaly detection, edge-to-cloud telemetry.',
        impact: 'Reduces unplanned downtime and enables proactive maintenance in smart manufacturing contexts.',
        future: 'ML model retraining, ERP/MES integration, and digital twin mapping.',
        github: 'https://github.com/Devangi12/Predictive-Maintenance'
    },
    {
        id: 'cognitive',
        title: 'Cognitive Overload Wristband',
        event: 'Edge AI · Biomedical IoT',
        icon: 'fa-brain',
        categories: ['ai', 'embedded', 'iot'],
        summary: 'Wearable that detects cognitive overload using HR, HRV, GSR, and temperature — real-time stress monitoring with embedded alerts.',
        overview: 'Multimodal wristband analyzing physiological signals (MAX30102, MLX90614, GSR, MPU6050) to assess cognitive load and trigger intelligent alerts via embedded and IoT logic.',
        tech: ['ESP32', 'MAX30102', 'MLX90614', 'GSR', 'MPU6050', 'C++'],
        features: [
            'Heart rate & HRV via PPG',
            'GSR stress response sensing',
            'Non-contact temperature (MLX90614)',
            'Real-time overload detection',
            'CLI / alert interface for monitoring'
        ],
        contribution: 'Sensor fusion pipeline, embedded acquisition, overload detection logic, and system documentation.',
        concepts: 'Affective computing, multimodal sensing, human-centered AI, real-time biomedical analytics.',
        impact: 'Early cognitive overload warnings for students and high-workload professionals.',
        future: 'TinyML on-device inference, mobile dashboard, and longitudinal studies.',
        github: 'https://github.com/Devangi12/Cognitive-Overload-Indicator'
    },
    {
        id: 'lora',
        title: 'Military LoRa Pager System',
        event: 'Wireless Communication · Open Source',
        icon: 'fa-tower-broadcast',
        categories: ['embedded', 'iot'],
        summary: 'Infrastructure-free two-way pager using ESP32 and LoRa SX1278 (433 MHz) with LCD interface and relay-style messaging protocol.',
        overview: 'Long-range embedded communication system for field and emergency use — predefined messages, LCD HMI, and LoRa relay protocol implementation.',
        tech: ['ESP32', 'LoRa SX1278', '433 MHz', 'LCD', 'C++'],
        features: [
            'Long-range LoRa communication',
            'Relay protocol implementation',
            'Predefined emergency messages',
            'LCD human-machine interface',
            'Portable low-power design'
        ],
        contribution: 'Full embedded stack: wireless protocol, UI, testing, and power optimization.',
        concepts: 'LoRa networking, embedded protocols, wireless reliability, HMI design.',
        impact: 'Communication without cellular infrastructure for disaster and field teams.',
        future: 'Encrypted payloads, mesh networking, speech-to-text integration.',
        github: 'https://github.com/Devangi12/military-pager-system'
    },
    {
        id: 'krishi',
        title: 'KrishiRakshak AI',
        event: 'Codeversity 2026 · Team SensorSurge',
        icon: 'fa-seedling',
        categories: ['iot', 'ai', 'embedded'],
        summary: 'Edge-AI agriculture platform for smallholder farmers — soil and environmental sensing with intelligent crop advisory.',
        overview: 'AgriTech system combining Raspberry Pi 5 edge inference with ESP32 sensor nodes for farm monitoring, crop protection, and data-driven advisories.',
        tech: ['Raspberry Pi 5', 'ESP32', 'Python', 'Soil Sensors', 'Edge AI'],
        features: [
            'Multi-parameter environmental sensing',
            'Crop health monitoring pipeline',
            'Smart alerts and automated monitoring',
            'Predictive analytics for farmer assistance'
        ],
        contribution: 'Embedded systems design, sensor integration, system architecture, AI pipeline collaboration, and cross-functional team coordination.',
        concepts: 'Sensor networks, edge data acquisition, IoT architecture, predictive analytics, agricultural IoT safety ecosystems.',
        impact: 'Enables data-driven crop protection and early risk detection for smallholder and commercial farming contexts.',
        future: 'Cloud dashboards, satellite data fusion, and regional crop-disease model integration.'
    },
    {
        id: 'wearable',
        title: 'Health Safety Wearable',
        event: 'Cognivia · IEEE WIE SBAG PDEU',
        icon: 'fa-heart-pulse',
        categories: ['embedded', 'ai', 'iot'],
        summary: 'Biomedical wearable with HR, SpO₂, temperature, AI anemia prediction, fall detection, and emergency alerts—optimized for low-power edge operation.',
        overview: 'Practical healthcare accessibility platform: Sensors → ESP32 → Health Logic → Alerts. Focus on rural, elderly, and women\'s health monitoring rather than demo-only prototypes.',
        tech: ['ESP32', 'MAX30102', 'MPU6050', 'DS18B20', 'Buzzer/Vibration', 'PPG Analysis'],
        features: [
            'Real-time heart rate and SpO₂ via PPG',
            'Body temperature sensing (DS18B20)',
            'AI-assisted anemia prediction',
            'Interrupt-based fall detection (MPU6050)',
            'Emergency alerts with offline low-power mode'
        ],
        contribution: 'Sensor fusion, embedded health logic, fall-detection firmware, low-power system design, and biomedical signal processing integration.',
        concepts: 'PPG signal analysis, interrupt-driven IMU processing, edge computing, embedded AI logic, sensor fusion.',
        impact: 'Early warning for anemia risk, falls, and vitals anomalies—supporting underserved healthcare access.',
        future: 'BLE gateway to mobile app, clinician dashboard, and FDA-aligned validation pathways.'
    },
    {
        id: 'depth',
        title: 'MiDaS Depth Estimation',
        event: 'AI + Computer Vision · Edge Deployment',
        icon: 'fa-camera',
        categories: ['ai', 'embedded'],
        summary: 'Monocular depth estimation using MiDaS on Raspberry Pi with real-time OpenCV pipeline and embedded AI inference.',
        overview: 'Camera-based spatial analysis system delivering depth maps for robotics navigation, obstacle awareness, and scene understanding.',
        tech: ['MiDaS', 'Raspberry Pi Camera', 'Python', 'OpenCV', 'Neural Networks'],
        features: [
            'Monocular depth estimation',
            'Real-time image processing',
            'Embedded AI on Raspberry Pi',
            'Scene understanding for spatial analysis'
        ],
        contribution: 'Model integration, inference optimization, camera pipeline setup, and performance tuning on edge hardware.',
        concepts: 'Deep learning inference, depth perception, embedded vision, edge AI deployment.',
        impact: 'Enables cost-effective depth sensing without stereo hardware for robotics and assistive systems.',
        future: 'ROS node integration, ONNX optimization, and fusion with IMU/LiDAR.'
    },
    {
        id: 'mini',
        title: 'Embedded Mini Projects Collection',
        event: 'Hands-on Labs',
        icon: 'fa-screwdriver-wrench',
        categories: ['embedded', 'iot', 'robotics'],
        summary: 'LDR light automation, maze solver robot, and sensor-based automation experiments building core embedded fundamentals.',
        overview: 'Portfolio of compact prototypes demonstrating GPIO control, autonomous navigation, and sensor-driven automation.',
        tech: ['Arduino', 'ESP32', 'LDR', 'Ultrasonic/IR Sensors', 'Motor Drivers'],
        features: [
            'LDR-based automatic lighting control',
            'Maze-solving with sensor feedback loops',
            'Timer and interrupt-based automation',
            'Display and actuator interfacing'
        ],
        contribution: 'Circuit prototyping, firmware development, and iterative testing.',
        concepts: 'Feedback control, path planning basics, ADC sensing, PWM motor control.',
        impact: 'Foundation for larger robotics and IoT systems.',
        future: 'Consolidated GitHub repos with documentation and schematics.'
    }
];

const ACHIEVEMENTS = [
    {
        title: 'Robofest Gujarat 5.0',
        meta: 'Team Atom · System Architecture & ROS Simulation',
        description: 'Participated in intelligent ground vehicle robotics competition. Cleared ideation stage and received ₹50,000 prize funding. Led system-level engineering and ROS-based simulation architecture with Heer Raj, Tvisha Chhowchharia, and Khushi Yadav.',
        prize: '₹50,000 Funding · Ideation Stage Cleared'
    },
    {
        title: 'Academic Record',
        meta: 'PDEU · B.Tech ECE 2024–2028',
        description: 'CGPA 9.0 · 0 backlogs · Sem I: 8.9 → Sem II: 9.08. Consistent performance in core ECE and hands-on lab work.'
    },
    {
        title: 'Codeversity 2026 — KrishiRakshak AI',
        meta: 'Team SensorSurge',
        description: 'Built AI-powered smart agriculture platform with Darsh Kadakia, Devarsh Patel, Jainesh Bhavsar, and Harsh Shah. Delivered embedded sensing layer and integrated monitoring ecosystem.'
    },
    {
        title: 'Cognivia Hackathon — Health Wearable',
        meta: 'IEEE WIE SBAG PDEU · Team SensorSurge / NeoCircuiters',
        description: 'Developed AI-assisted biomedical wearable for rural healthcare accessibility, elderly assistance, and women\'s health monitoring with real-time vitals and fall detection.'
    }
];

const ORGANIZATIONS = [
    {
        icon: 'fa-satellite',
        title: 'Student Satellite Program (SSP)',
        description: 'PDEU & ISRO collaboration — active participation in collaborative engineering and satellite technology development.'
    },
    {
        icon: 'fa-signal',
        title: 'IEEE SPS SBC PDEU',
        description: 'Signal Processing Society — technical events, workshops, and innovation-driven community building.'
    },
    {
        icon: 'fa-venus',
        title: 'IEEE WIE SBAG PDEU',
        description: 'Women in Engineering — hackathons (Cognivia), leadership, and inclusive technical initiatives.'
    },
    {
        icon: 'fa-robot',
        title: 'Cretus Robotics Club',
        description: 'PDEU robotics club — hands-on robotics projects, competitions, and peer engineering collaboration.'
    }
];

/* --- DOM Ready --- */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    initNavigation();
    initTyping();
    initParticles();
    renderSkills();
    renderProjects();
    renderAchievements();
    renderOrganizations();
    initProjectFilters();
    initModal();
    initTheme();
    initScrollReveal();
    initSkillBars();
});

/* Navigation */
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    hamburger?.addEventListener('click', () => navMenu.classList.toggle('active'));

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const top = target.offsetTop - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || 72);
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        highlightNav();
    });
}

function highlightNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-menu a');
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

/* Typing animation */
function initTyping() {
    const el = document.getElementById('typedText');
    if (!el) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = TYPED_PHRASES[phraseIndex];
        el.textContent = isDeleting
            ? current.substring(0, charIndex - 1)
            : current.substring(0, charIndex + 1);

        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

        let delay = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === current.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % TYPED_PHRASES.length;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    type();
}

/* Particle background */
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const count = window.innerWidth < 768 ? 40 : 70;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 2 + 0.5
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#22d3ee';

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = accent;
            ctx.globalAlpha = 0.4;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = accent;
                    ctx.globalAlpha = 0.08 * (1 - dist / 120);
                    ctx.stroke();
                }
            }
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();
    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
}

/* Render skills */
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = SKILLS_DATA.map(cat => `
        <article class="skill-card glass-card reveal">
            <h3><i class="fas ${cat.icon}"></i> ${cat.title}</h3>
            ${cat.bars.map(b => `
                <div class="skill-bar" data-level="${b.level}">
                    <div class="skill-bar-header"><span>${b.name}</span><span>${b.level}%</span></div>
                    <div class="skill-progress"><div class="skill-progress-fill"></div></div>
                </div>
            `).join('')}
            <div class="skill-tags">${cat.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </article>
    `).join('');
}

function initSkillBars() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('.skill-bar').forEach(bar => {
                const level = bar.dataset.level;
                const fill = bar.querySelector('.skill-progress-fill');
                if (fill) fill.style.width = `${level}%`;
            });
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));
}

function projectGithubLink(project, className = 'btn-github') {
    if (!project.github) return '';
    return `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-github-link ${className}" aria-label="View ${project.title} on GitHub">
            <i class="fab fa-github"></i> GitHub
        </a>
    `;
}

/* Render projects */
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = PROJECTS.map(p => `
        <article class="project-card glass-card reveal" data-id="${p.id}" data-categories="${p.categories.join(' ')}">
            <div class="project-card-top">
                <div class="project-icon"><i class="fas ${p.icon}"></i></div>
                ${p.github ? projectGithubLink(p, 'project-github-corner') : ''}
            </div>
            <h3>${p.title}</h3>
            <p class="project-event">${p.event}</p>
            <p class="project-summary">${p.summary}</p>
            <div class="project-tech-pills">${p.tech.slice(0, 5).map(t => `<span>${t}</span>`).join('')}</div>
            <div class="project-card-actions">
                <button type="button" class="btn-details" data-project-id="${p.id}">
                    Details <i class="fas fa-arrow-right"></i>
                </button>
                ${p.github ? projectGithubLink(p) : ''}
            </div>
        </article>
    `).join('');

    grid.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => openProjectModal(btn.dataset.projectId));
    });

    grid.querySelectorAll('.project-github-link').forEach(link => {
        link.addEventListener('click', e => e.stopPropagation());
    });
}

function initProjectFilters() {
    const filters = document.getElementById('projectFilters');
    if (!filters) return;

    filters.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            const cats = card.dataset.categories || '';
            const show = filter === 'all' || cats.includes(filter);
            card.classList.toggle('hidden', !show);
        });
    });
}

/* Modal */
function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    closeBtn?.addEventListener('click', closeProjectModal);
    overlay?.addEventListener('click', e => {
        if (e.target === overlay) closeProjectModal();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeProjectModal();
    });
}

function openProjectModal(id) {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) return;

    const content = document.getElementById('modalContent');
    const githubBlock = project.github
        ? `<div class="modal-links">${projectGithubLink(project, 'btn-github-modal')}</div>`
        : '';

    content.innerHTML = `
        <h2>${project.title}</h2>
        <p class="modal-event">${project.event}</p>
        ${githubBlock}
        <div class="modal-section"><h4>Overview</h4><p>${project.overview}</p></div>
        <div class="modal-section"><h4>Technologies</h4><p>${project.tech.join(' · ')}</p></div>
        <div class="modal-section"><h4>Key Features</h4><ul>${project.features.map(f => `<li>${f}</li>`).join('')}</ul></div>
        <div class="modal-section"><h4>My Contribution</h4><p>${project.contribution}</p></div>
        <div class="modal-section"><h4>Engineering Concepts</h4><p>${project.concepts}</p></div>
        <div class="modal-section"><h4>Real-World Impact</h4><p>${project.impact}</p></div>
        <div class="modal-section"><h4>Future Scope</h4><p>${project.future}</p></div>
    `;

    const overlay = document.getElementById('modalOverlay');
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

/* Achievements & Orgs */
function renderAchievements() {
    const timeline = document.getElementById('achievementsTimeline');
    if (!timeline) return;

    timeline.innerHTML = ACHIEVEMENTS.map(a => `
        <article class="timeline-item glass-card reveal">
            <h3>${a.title}</h3>
            <p class="timeline-meta">${a.meta}</p>
            <p>${a.description}</p>
            ${a.prize ? `<span class="timeline-prize"><i class="fas fa-trophy"></i> ${a.prize}</span>` : ''}
        </article>
    `).join('');
}

function renderOrganizations() {
    const grid = document.getElementById('orgGrid');
    if (!grid) return;

    grid.innerHTML = ORGANIZATIONS.map(o => `
        <article class="org-card glass-card reveal">
            <i class="fas ${o.icon}"></i>
            <h3>${o.title}</h3>
            <p>${o.description}</p>
        </article>
    `).join('');
}

/* Theme toggle */
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');

    toggle?.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            toggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    if (saved === 'light' && toggle) toggle.innerHTML = '<i class="fas fa-sun"></i>';
}

/* Scroll reveal */
function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    const observe = () => {
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };
    observe();

    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
}
