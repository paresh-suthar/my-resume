/**
 * RESUME APPLICATION MAIN JAVASCRIPT
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderResume();
  setupEventListeners();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * 1. THEME MANAGEMENT (Dark / Light Mode)
 */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleMobileBtn = document.getElementById("theme-toggle-mobile");
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleHandler = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleHandler);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener("click", toggleHandler);
}

/**
 * 2. POPULATE RESUME DATA
 */
function renderResume() {
  const data = window.resumeData;
  if (!data) return;

  // Personal & Hero
  document.title = `${data.personal.fullName} - ${data.personal.role} | Resume`;
  const nameElements = document.querySelectorAll(".data-name");
  nameElements.forEach(el => el.textContent = data.personal.fullName);

  const roleElements = document.querySelectorAll(".data-role");
  roleElements.forEach(el => el.textContent = data.personal.role);

  const taglineEl = document.getElementById("hero-tagline");
  if (taglineEl) taglineEl.textContent = data.personal.tagline;

  const locationEl = document.getElementById("hero-location");
  if (locationEl) locationEl.textContent = data.personal.location;

  const emailLinks = document.querySelectorAll(".data-email-link");
  emailLinks.forEach(link => {
    link.href = `mailto:${data.personal.email}`;
    link.textContent = data.personal.email;
  });

  const phoneLinks = document.querySelectorAll(".data-phone-link");
  phoneLinks.forEach(link => {
    link.href = `tel:${data.personal.phone.replace(/[^0-9+]/g, '')}`;
    link.textContent = data.personal.phone;
  });

  // Status Badge
  const statusEl = document.getElementById("hero-status");
  if (statusEl && data.personal.status) {
    statusEl.innerHTML = `
      <span class="relative flex h-2.5 w-2.5 mr-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span class="text-xs font-medium text-emerald-700 dark:text-emerald-300">${data.personal.status.text}</span>
    `;
  }

  // Social Links
  const githubLink = document.getElementById("social-github");
  if (githubLink) githubLink.href = data.personal.socialLinks.github;
  const linkedinLink = document.getElementById("social-linkedin");
  if (linkedinLink) linkedinLink.href = data.personal.socialLinks.linkedin;
  const twitterLink = document.getElementById("social-twitter");
  if (twitterLink) twitterLink.href = data.personal.socialLinks.twitter;

  // Stats
  renderStats(data.stats);

  // About
  renderAbout(data.about);

  // Experience
  renderExperience(data.experience);

  // Projects
  renderProjects(data.projects);

  // Skills
  renderSkills(data.skills);

  // Education & Certifications
  renderEducation(data.education);
  renderCertifications(data.certifications);
}

function renderStats(stats) {
  const statsContainer = document.getElementById("stats-container");
  if (!statsContainer || !stats) return;

  statsContainer.innerHTML = stats.map(stat => `
    <div class="glass-card p-5 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">
      <div class="text-3xl font-extrabold gradient-text mb-1">${stat.value}</div>
      <div class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">${stat.label}</div>
    </div>
  `).join("");
}

function renderAbout(about) {
  if (!about) return;
  const summaryEl = document.getElementById("about-summary");
  if (summaryEl) summaryEl.textContent = about.summary;

  const highlightsContainer = document.getElementById("about-highlights");
  if (highlightsContainer && about.highlights) {
    highlightsContainer.innerHTML = about.highlights.map(item => `
      <li class="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
        <i data-lucide="check-circle-2" class="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5"></i>
        <span class="text-sm sm:text-base leading-relaxed">${item}</span>
      </li>
    `).join("");
  }
}

function renderExperience(experience) {
  const container = document.getElementById("experience-timeline");
  if (!container || !experience) return;

  container.innerHTML = experience.map((job, idx) => `
    <div class="experience-card relative pl-8 pb-10 ${idx === experience.length - 1 ? '' : 'border-l-2 border-indigo-200 dark:border-slate-700'}">
      <!-- Timeline bullet -->
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 ring-4 ring-white dark:ring-slate-900"></div>
      
      <div class="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">${job.role}</h3>
              ${job.badge ? `<span class="px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">${job.badge}</span>` : ''}
            </div>
            <p class="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">${job.company} <span class="text-slate-400 font-normal">| ${job.location}</span></p>
          </div>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 w-fit">
            <i data-lucide="calendar" class="w-3.5 h-3.5 mr-1.5"></i> ${job.period}
          </span>
        </div>

        <p class="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">${job.description}</p>

        <ul class="space-y-2 mb-4">
          ${job.achievements.map(ach => `
            <li class="flex items-start text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span class="text-indigo-500 mr-2 font-bold">•</span>
              <span>${ach}</span>
            </li>
          `).join("")}
        </ul>

        <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          ${job.technologies.map(tech => `
            <span class="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
              ${tech}
            </span>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function renderProjects(projects, filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container || !projects) return;

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(proj => `
    <div class="project-card glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group border border-slate-200/80 dark:border-slate-800">
      <!-- Card Banner -->
      <div class="h-32 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 dark:from-indigo-950/40 dark:to-cyan-950/40 flex items-center justify-center border-b border-slate-100 dark:border-slate-800 p-4">
        <span class="text-slate-700 dark:text-slate-200 font-bold text-lg flex items-center gap-2">
          <i data-lucide="layers" class="w-5 h-5 text-indigo-500"></i>
          ${proj.imagePlaceholder || proj.title}
        </span>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${proj.title}</h3>
            ${proj.featured ? `<span class="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">Featured</span>` : ''}
          </div>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">${proj.description}</p>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${proj.technologies.map(t => `
              <span class="text-xs px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 font-medium">${t}</span>
            `).join("")}
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 no-print">
            <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
              <span>Live Demo</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5 ml-1"></i>
            </a>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
              <i data-lucide="github" class="w-4 h-4 mr-1"></i>
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

function renderSkills(skills) {
  const container = document.getElementById("skills-container");
  if (!container || !skills) return;

  const categories = [
    { key: "frontend", title: "Frontend Engineering", icon: "layout" },
    { key: "backend", title: "Backend & Systems", icon: "server" },
    { key: "devopsAndCloud", title: "Cloud & DevOps", icon: "cloud" },
    { key: "toolsAndPractices", title: "Tools & Methodologies", icon: "tool" }
  ];

  container.innerHTML = categories.map(cat => {
    const list = skills[cat.key] || [];
    return `
      <div class="glass-card p-6 rounded-2xl shadow-sm">
        <div class="flex items-center gap-2.5 mb-5">
          <div class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
            <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">${cat.title}</h3>
        </div>

        <div class="space-y-3.5">
          ${list.map(skill => `
            <div>
              <div class="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                <span>${skill.name}</span>
                <span class="text-slate-400">${skill.level}%</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2 rounded-full transition-all duration-700" style="width: ${skill.level}%"></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function renderEducation(education) {
  const container = document.getElementById("education-list");
  if (!container || !education) return;

  container.innerHTML = education.map(edu => `
    <div class="education-card glass-card p-5 rounded-2xl shadow-sm mb-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
        <h4 class="font-bold text-slate-900 dark:text-white text-base">${edu.degree}</h4>
        <span class="text-xs text-indigo-600 dark:text-indigo-400 font-medium">${edu.period}</span>
      </div>
      <p class="text-slate-600 dark:text-slate-300 text-sm font-medium">${edu.institution} <span class="text-slate-400">| ${edu.location}</span></p>
      ${edu.gpa ? `<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">GPA: ${edu.gpa} • ${edu.honors || ''}</p>` : ''}
    </div>
  `).join("");
}

function renderCertifications(certs) {
  const container = document.getElementById("certifications-list");
  if (!container || !certs) return;

  container.innerHTML = certs.map(cert => `
    <div class="glass-card p-5 rounded-2xl shadow-sm mb-4 flex items-center justify-between">
      <div>
        <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">${cert.name}</h4>
        <p class="text-slate-500 dark:text-slate-400 text-xs">${cert.issuer} • Issued ${cert.date}</p>
      </div>
      ${cert.credentialUrl ? `
        <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 p-2 no-print" title="Verify Credential">
          <i data-lucide="badge-check" class="w-5 h-5"></i>
        </a>
      ` : ''}
    </div>
  `).join("");
}

/**
 * 3. EVENT LISTENERS & INTERACTIONS
 */
function setupEventListeners() {
  // Mobile navigation drawer toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    // Close mobile menu on click link
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  // Print / Download CV Button
  const printBtns = document.querySelectorAll(".btn-download-resume");
  printBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.print();
    });
  });

  // Project Category Filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-indigo-600", "text-white");
        b.classList.add("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
      });
      btn.classList.add("bg-indigo-600", "text-white");
      btn.classList.remove("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
      
      const filter = btn.getAttribute("data-filter");
      renderProjects(window.resumeData.projects, filter);
    });
  });

  // Copy Email Button
  const copyEmailBtn = document.getElementById("btn-copy-email");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = window.resumeData?.personal?.email || "";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast("Email address copied to clipboard!");
        });
      }
    });
  }

  // Contact Form Submission (Client-side simulation)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span class="inline-block animate-spin mr-2">⏳</span> Sending...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
        showToast("Message sent successfully! (Demo submission)");
      }, 1000);
    });
  }
}

/**
 * 4. TOAST NOTIFICATION
 */
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-2 transform transition-all duration-300 translate-y-10 opacity-0";
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-10", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-4");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
