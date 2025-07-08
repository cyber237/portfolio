import Alpine from "alpinejs";
import { Theme } from "./main";

function portfolioData() {
  return {
    isMobileMenuOpen: false,

    name: "Nintai Dick Nunyi",
    title: "Full-Stack Engineer | DevOps & Infrastructure",
    email: "nintaidick67@gmail.com",
    summary:
      "Building robust and scalable web solutions from backend to infrastructure. I turn complex problems into elegant, high-performing software.",
    profilePicture: "https://placehold.co/400x400/1F2937/FFFFFF?text=N.D.N",
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
    ],
    skillCategories: [
      {
        name: "Backend & Languages",
        skills: ["Python", "Django", "JavaScript"],
      },
      {
        name: "Frontend",
        skills: ["HTML", "CSS", "Bootstrap", "HTMX", "Alpine.js"],
      },
      {
        name: "DevOps & Cloud",
        skills: [
          "Docker",
          "Docker Compose",
          "AWS",
          "Google Cloud Platform (GCP)",
          "GitHub Actions",
          "Linux",
        ],
      },
      {
        name: "Databases & Others",
        skills: [
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "RabbitMQ",
          "Flutter",
        ],
      },
    ],
    experience: [
      {
        period: "Sep 2022 - Present",
        title: "Backend Django Developer (Freelance)",
        company: "OpenUp (formerly Code for South Africa)",
      },
      {
        period: "Jun 2022 - Present",
        title: "Full Stack Django Developer (Freelance)",
        company: "Hexia Web Services",
      },
      {
        period: "Jul 2021 - Aug 2022",
        title: "Full Stack Web Developer",
        company: "Chez mon local",
      },
      {
        period: "Jun 2021 - Apr 2022",
        title: "Full Stack Web Developer",
        company: "Sikalie group",
      },
      {
        period: "Sep 2019 - Jun 2021",
        title: "Full Stack Web Developer",
        company: "Cameroon Skyline tours ltd.",
      },
    ],
    projects: [
      {
        title: "Scalable E-commerce API",
        description:
          "A robust backend for an e-commerce platform using Django Rest Framework, featuring product management, user authentication, and order processing.",
        tags: ["Django", "PostgreSQL", "Docker"],
        image: "https://placehold.co/600x400/0F766E/FFFFFF?text=Project+1",
        link: "#",
      },
      {
        title: "CI/CD Pipeline Automation",
        description:
          "Automated the build, test, and deployment pipeline for a web application using GitHub Actions, deploying to AWS EC2 instances via Docker containers.",
        tags: ["GitHub Actions", "AWS", "Docker"],
        image: "https://placehold.co/600x400/0F766E/FFFFFF?text=Project+2",
        link: "#",
      },
      {
        title: "Data Analytics Dashboard",
        description:
          "Developed a full-stack data visualization tool for a non-profit, enabling them to track key metrics and generate reports on the fly.",
        tags: ["Python", "Django", "HTMX"],
        image: "https://placehold.co/600x400/0F766E/FFFFFF?text=Project+3",
        link: "#",
      },
    ],
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/cyber237",
        icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" /></svg>',
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nintai-dick-769430185",
        icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
      },
      {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~01b4370a11ad793174",
        icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.46.021a5.85 5.85 0 00-4.66 2.37c-1.3 2.3-1.2 5.3.3 7.3h-3.4V7.291H7.1v10.3h2.6V11.99h3.4c1.6 2.2 1.8 5.4.4 7.9a5.85 5.85 0 009.3-4.3c1.2-5.4-2.1-10.9-9.34-15.569z"/></svg>',
      },
    ],
  };
}

window.Alpine = Alpine;
Alpine.data("portfolioData", portfolioData);
Alpine.data("Theme", Theme);
Alpine.start();
