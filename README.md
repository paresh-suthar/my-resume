# 🚀 Paresh Suthar - DevOps Engineer Resume & Portfolio

A modern, responsive, and interactive Resume & Portfolio website built with clean HTML5, Tailwind CSS, and vanilla JavaScript. Tailored for an entry-level / fresher **DevOps & Cloud Engineer**, optimized for 100% free instant hosting on **Vercel**.

---

## ✨ Features

- 🌓 **Dark & Light Mode**: Theme toggler with auto-detection of system preferences and persistent local storage.
- ⚡ **Zero Build Step**: Lightweight, ultra-fast loading without npm or complex build pipelines.
- 📝 **Centralized Data File**: Update all your personal details, internships, skills, and certifications directly in [`js/resume-data.js`](./js/resume-data.js).
- 🖨️ **ATS-Friendly PDF Export**: Click **"Download CV"** or press `Ctrl+P` to generate a printer-optimized single/two-page PDF resume.
- 📱 **100% Mobile Responsive**: Perfectly scales across mobile screens, tablets, and wide monitors.
- ☁️ **Vercel Ready**: Pre-configured with zero-config `vercel.json` for free global CDN deployment and automatic HTTPS.

---

## 📁 Directory Structure

```
resume-portfolio/
├── index.html                 # Main semantic webpage
├── vercel.json                # Vercel deployment configuration
├── README.md                  # Project documentation & deployment guide
├── css/
│   └── styles.css             # Glassmorphism, animations & print-to-PDF styles
├── js/
│   ├── resume-data.js         # ✏️ EDIT YOUR RESUME DETAILS HERE
│   └── main.js                # Theme switcher, dynamic data rendering & event handlers
└── assets/
    └── avatar-placeholder.svg # Profile picture placeholder
```

---

## 🛠️ Sections Included

1. **Header & Sticky Navigation**:
   - Quick links (About • Experience • Skills • Education • Contact)
   - Dark/Light mode switcher and **Download CV** PDF action button.
2. **Hero Profile Section**:
   - Name, DevOps role headline, availability badge, contact links (Email, Phone, Location), and social handles (GitHub, LinkedIn, Twitter).
3. **Key Stats Grid**:
   - 0+ Yrs (Fresher) • 10+ DevOps & Cloud Projects • 20+ CI/CD Pipelines • 15+ Tools.
4. **About Me**:
   - Summary highlighting Linux administration, Docker containerization, CI/CD automation with GitHub Actions, AWS cloud, and Terraform.
5. **Practical Experience & Internships**:
   - DevOps & Cloud Intern and Infrastructure Project Lead.
6. **Skills & Expertise**:
   - **Linux & Scripting**: Linux (Ubuntu/CentOS), Shell/Bash Scripting, Python Automation.
   - **Containerization**: Docker, Docker Compose, Multi-Container Setups.
   - **CI/CD & Cloud**: GitHub Actions, AWS (EC2, S3, IAM, VPC), Terraform (IaC), Vercel, Git.
   - **Observability & Networking**: Prometheus, Grafana, Nginx Reverse Proxy, Security Scanning.
7. **Education & Certifications**:
   - B.Tech in CSE, 12th Grade, AWS Cloud Badges, and Docker/Linux Certifications.
8. **Contact & Footer**:
   - Quick "Copy Email" button with toast alert, contact form, and social links.

---

## ✏️ How to Customize Your Resume Data

All information is stored in [`js/resume-data.js`](./js/resume-data.js). Open it in any text editor:

```javascript
const resumeData = {
  personal: {
    fullName: "Paresh Suthar",
    role: "Aspiring DevOps Engineer | Cloud & CI/CD Enthusiast",
    location: "India (Open to Remote & Relocation)",
    email: "paresh.devops@example.com",
    phone: "+91 98765 43210",
    socialLinks: {
      github: "https://github.com/your-username",
      linkedin: "https://linkedin.com/in/your-profile"
    }
  },
  // ... edit experience, skills, education, and certifications
};
```

---

## 🐧 Quick Edit via Linux Terminal

To replace any text (e.g. username or email) across the entire project in Linux:

```bash
# Find and replace text across all project files:
find . -type f -exec sed -i 's/old_text/new_text/g' {} +

# Check occurrences:
grep -rn "Paresh Suthar" .
```

---

## 🌐 How to Host on Vercel (100% Free Forever)

### Step 1: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new) (e.g. `paresh-devops-resume`).
2. Upload/push the files from this directory to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DevOps Resume"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/paresh-devops-resume.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your `paresh-devops-resume` repository.
4. Leave framework preset as **Other** and root directory as `./`.
5. Click **"Deploy"**.

Your website will be live in ~15 seconds with a free global URL (e.g. `https://paresh-devops-resume.vercel.app`)!

---

## 🖥️ Local Preview

To view locally:
- Simply open [`index.html`](./index.html) in any web browser.
