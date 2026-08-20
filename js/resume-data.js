/**
 * RESUME PORTFOLIO DATA CONFIGURATION (FRESHER DEVOPS EDITION)
 * -----------------------------------------------------------
 * Update this file with your personal details, DevOps projects,
 * certifications, and skills.
 */

const resumeData = {
  // 1. Personal Information
  personal: {
    fullName: "Paresh Suthar",
    role: "Aspiring DevOps Engineer | Cloud & CI/CD Enthusiast",
    tagline: "Recent graduate passionate about Linux administration, Docker containerization, CI/CD pipeline automation, and Cloud Infrastructure (AWS / Vercel).",
    avatar: "assets/avatar-placeholder.svg", // Replace with your profile photo
    status: {
      available: true,
      text: "Actively Seeking Entry-Level DevOps & Cloud Roles"
    },
    location: "India (Open to Remote & Relocation)",
    email: "paresh.devops@example.com",
    phone: "+91 98765 43210",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      portfolio: "https://my-resume.vercel.app"
    }
  },

  // 2. Quick Highlights / Stats (Tailored for DevOps Fresher)
  stats: [
    { label: "Experience", value: "0+ Yrs (Fresher)" },
    { label: "DevOps & Cloud Projects", value: "10+" },
    { label: "CI/CD Pipelines Built", value: "20+" },
    { label: "Tools & Technologies", value: "15+" }
  ],

  // 3. About Summary
  about: {
    title: "About Me",
    summary: `I am an enthusiastic and detail-oriented Computer Science graduate specializing in DevOps methodologies, cloud computing, and infrastructure automation. As an entry-level DevOps enthusiast with 0+ years of industry experience, I possess strong hands-on expertise in Linux administration, Docker containerization, CI/CD pipeline automation (GitHub Actions), and AWS cloud basics. I am driven to eliminate deployment bottlenecks and maintain high-availability systems.`,
    highlights: [
      "Proficient in Linux OS commands, Shell/Bash scripting, and Python automation.",
      "Hands-on experience containerizing multi-tier applications with Docker and Docker Compose.",
      "Built automated CI/CD workflows using GitHub Actions for build, test, and zero-downtime deployment.",
      "Familiar with Infrastructure as Code (Terraform), Cloud fundamentals (AWS & Vercel), and Prometheus/Grafana monitoring."
    ]
  },

  // 4. Practical Experience / Internships
  experience: [
    {
      role: "DevOps & Cloud Intern",
      company: "CloudScale Technologies",
      location: "Remote",
      period: "Jun 2025 - Aug 2025",
      badge: "Internship",
      description: "Assisted the platform engineering team in automating build/deploy workflows and managing cloud environments.",
      achievements: [
        "Constructed automated GitHub Actions CI/CD workflows reducing manual build and deployment time by 50%.",
        "Containerized 5+ full-stack web applications using multi-stage Dockerfiles, optimizing image size by 40%.",
        "Configured Prometheus and Grafana dashboards to monitor server CPU, memory, and container health metrics."
      ],
      technologies: ["Docker", "GitHub Actions", "Linux (Ubuntu)", "AWS EC2/S3", "Prometheus", "Grafana", "Bash"]
    },
    {
      role: "Cloud Infrastructure Project Lead",
      company: "University Department of Computer Science",
      location: "University Campus",
      period: "2024 - 2025",
      badge: "Academic",
      description: "Designed and deployed high-availability infrastructure for the campus student portal capstone project.",
      achievements: [
        "Configured high-performance Nginx reverse proxy with Docker multi-container setup and automated SSL management.",
        "Wrote Terraform scripts to automatically provision VPCs, subnets, and EC2 instances on AWS.",
        "Received 'Best Infrastructure & DevOps Architecture' recognition from the academic review committee."
      ],
      technologies: ["Docker", "Terraform", "AWS", "Nginx", "Git", "Linux"]
    }
  ],

  // 5. Featured DevOps Projects
  projects: [
    {
      title: "Automated Microservices CI/CD Pipeline",
      category: "backend",
      description: "End-to-end continuous integration and deployment pipeline using GitHub Actions that tests code, builds Docker images, scans for vulnerabilities, and deploys to cloud servers.",
      technologies: ["GitHub Actions", "Docker", "Trivy", "AWS EC2", "Bash"],
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/devops-cicd-pipeline",
      featured: true,
      imagePlaceholder: "⚡ CI/CD Automation"
    },
    {
      title: "AWS Multi-Tier Infrastructure as Code",
      category: "fullstack",
      description: "Terraform modules provisioning a resilient AWS architecture with custom VPC, public/private subnets, Application Load Balancer, and Auto-Scaling EC2 instances.",
      technologies: ["Terraform", "AWS (VPC, EC2, ALB, S3)", "Bash", "Linux"],
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/aws-terraform-infra",
      featured: true,
      imagePlaceholder: "☁️ Terraform AWS IaC"
    },
    {
      title: "Cluster Monitoring & Observability Stack",
      category: "backend",
      description: "Full observability stack deploying Prometheus, Node Exporter, and Grafana with automated alert rules and Discord/Slack webhook notifications.",
      technologies: ["Prometheus", "Grafana", "Node Exporter", "Docker Compose", "Alertmanager"],
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/monitoring-stack",
      featured: false,
      imagePlaceholder: "📊 Observability Stack"
    },
    {
      title: "Containerized Web App with Nginx Reverse Proxy",
      category: "frontend",
      description: "Production-ready Docker Compose environment running React frontend, Node backend, and Nginx reverse proxy with SSL termination and caching.",
      technologies: ["Docker", "Docker Compose", "Nginx", "SSL / Let's Encrypt", "React"],
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/docker-nginx-proxy",
      featured: false,
      imagePlaceholder: "🐳 Docker & Nginx"
    }
  ],

  // 6. Categorized Skills (DevOps Focused)
  skills: {
    frontend: [
      { name: "Linux Administration (Ubuntu, CentOS)", level: 90 },
      { name: "Shell & Bash Scripting", level: 88 },
      { name: "Python for Automation", level: 80 },
      { name: "Networking (DNS, TCP/IP, HTTP/S)", level: 85 },
      { name: "Web Basics (HTML5 / React / Node)", level: 75 }
    ],
    backend: [
      { name: "Docker & Containerization", level: 92 },
      { name: "Docker Compose & Multi-Container Apps", level: 88 },
      { name: "Nginx Reverse Proxy & Load Balancing", level: 85 },
      { name: "Database Basics (MySQL, PostgreSQL)", level: 80 },
      { name: "REST API Integration", level: 82 }
    ],
    devopsAndCloud: [
      { name: "GitHub Actions & CI/CD", level: 92 },
      { name: "AWS Cloud (EC2, S3, IAM, VPC)", level: 85 },
      { name: "Terraform (Infrastructure as Code)", level: 80 },
      { name: "Vercel / Cloudflare Edge Hosting", level: 90 },
      { name: "Git & Version Control", level: 92 }
    ],
    toolsAndPractices: [
      { name: "Prometheus & Grafana Monitoring", level: 85 },
      { name: "CI / CD Workflow Automation", level: 85 },
      { name: "Security & Vulnerability Scanning (Trivy)", level: 80 },
      { name: "Agile & DevOps Best Practices", level: 88 }
    ]
  },

  // 7. Education
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "State University / College of Engineering",
      location: "India",
      period: "2022 - 2026",
      gpa: "8.5 / 10.0 CGPA",
      honors: "Specialization & Electives: Cloud Computing, Linux System Administration, Computer Networks, Distributed Systems"
    },
    {
      degree: "Higher Secondary Certificate (HSC / 12th Grade)",
      institution: "Higher Secondary School",
      location: "State Board",
      period: "2020 - 2022",
      gpa: "90% Aggregate",
      honors: "Physics, Chemistry, Mathematics, Computer Science"
    }
  ],

  // 8. Certifications & DevOps Badges
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner / Solutions Architect (In Progress / Certified)",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialUrl: "https://aws.amazon.com/"
    },
    {
      name: "Docker for Developers & DevOps",
      issuer: "Udemy / Coursera",
      date: "2025",
      credentialUrl: "https://coursera.org/"
    },
    {
      name: "Linux Fundamentals & Shell Scripting",
      issuer: "Linux Foundation / freeCodeCamp",
      date: "2024",
      credentialUrl: "https://freecodecamp.org/"
    }
  ]
};

if (typeof window !== "undefined") {
  window.resumeData = resumeData;
}
