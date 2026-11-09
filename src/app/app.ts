
import {
  Component,
  AfterViewInit,
  OnDestroy,
  PLATFORM_ID,
  inject
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
}
interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {

  private platformId = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;

  
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu(): void {
    this.menuOpen = false;
  }

  projects: Project[] = [
    {
      number: '01',
      category: 'AI ENGINEERING',
      title: 'MeetMind',
      description:
        'Transform meetings into searchable knowledge with artificial intelligence.',
      details:
        'An AI-powered meeting intelligence platform featuring speech transcription, meeting summaries, knowledge retrieval and interactive learning.',
      technologies: [
        'Python',
        'FastAPI',
        'React',
        'Next.js',
        'PostgreSQL',
        'Whisper',
        'OpenAI',
        'Docker'
      ],
      githubUrl: 'https://github.com/ArunKumarJ22/MeetMind',
      featured: true
    },
    {
      number: '02',
      category: 'FULL STACK DEVELOPMENT',
      title: 'CommitCompass',
      description:
        'Explore and organize GitHub commit activity through a full-stack application.',
      details:
        'A GitHub commit intelligence project with a Spring Boot backend, GitHub API integration, React and TypeScript frontend, and PostgreSQL persistence.',
      technologies: [
        'Java',
        'Spring Boot',
        'React',
        'TypeScript',
        'PostgreSQL',
        'GitHub API',
        'Docker'
      ],
      githubUrl: 'https://github.com/ArunKumarJ22/CommitCompass---Version-Control-Intelligence',
      featured: true
    },
    {
      number: '03',
      category: 'DEVOPS & CLOUD',
      title: 'DevOps-CICD',
      description:
        'Automate application delivery with containerization and cloud deployment.',
      details:
        'A hands-on DevOps project exploring Docker, Docker Compose, GitHub Actions, Linux and Azure VM deployment.',
      technologies: [
        'Python',
        'Flask',
        'Docker',
        'Docker Compose',
        'GitHub Actions',
        'Azure',
        'Linux'
      ],
      githubUrl: 'https://github.com/ArunKumarJ22/Devops-CICD',
      featured: false
    },
    {
      number: '04',
      category: 'My Website',
      title: 'Personal Portfolio',
      description:
        'A responsive personal portfolio website showcasing projects and experience.',
      details:
        'A modern, responsive portfolio website built with Angular and TypeScript, featuring a clean design and smooth user experience.',
      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'SCSS',
        'Responsive Design'
      ],
      githubUrl: 'https://github.com/ArunKumarJ22/Arunkumar-portfolio',
      featured: false
    }

  ];
  experiences: Experience[] = [
  {
    company: 'Roadmap IT Solutions',
    role: 'Software Engineer',
    period: ' 02/2023 – 04/2024',
    type: 'Professional Experience',
    description:
      'Worked on full-stack web application development, collaborating with cross-functional teams to deliver reliable solutions, improve application performance, and streamline business workflows.',
    responsibilities: [
      'Developed and enhanced web application features using Angular, TypeScript, and Spring Boot.',
      'Streamlined an 8-step manual business process, reducing processing time by 60% through workflow improvements.',
      'Improved client-facing website performance by 45%, delivering faster page rendering and a smoother user experience.',
      'Collaborated with clients and development teams to understand requirements, troubleshoot issues, and deliver features within project deadlines.'
    ]
  },
  {
    company: 'Verzeo',
    role: 'Full-Stack Web Developer Intern',
    period: ' 07/2022 – 10/2022',
    type: 'Internship',
    description:
      'Gained hands-on experience in full-stack web development, contributing to application improvements and learning how to identify, troubleshoot, and resolve real-world performance issues.',
    responsibilities: [
      'Worked on web application development tasks, gaining practical experience in full-stack development.',
      'Identified and resolved application performance bottlenecks, reducing page-loading time by 40%.',
      'Investigated UI and performance issues, implementing improvements within a single development sprint.',
      'Strengthened problem-solving, debugging, and collaborative development skills while working in an agile environment.'
    ]
  },
];
education: Education[] = [
  {
    institution: 'EPITA',
    degree: 'Master’s in Software Engineering',
    period: '2026- 2027',
    location: 'Paris, France',
    description:
      'Advanced studies in software engineering, application development and modern computing technologies.'
  },
   {
    institution: 'Sri Aravindar Arts and Science College',
    degree: 'Master of Science in Computer Science',
    period: '2020- 2022',
    location: 'Puducherry, India',
    description:
      'Master’s degree program focused on computer science, programming, and software development.'
  },
   {
    institution: 'Sri Aravindar Arts and Science College',
    degree: 'Bachelor of Science in Computer Science',
    period: '2016 - 2019',
    location: 'Puducherry, India',
    description:
      'Bachelor’s degree program providing foundational knowledge in computer science, programming, and software development.'
  }
];

  currentYear = new Date().getFullYear();
  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => {
        element.classList.add('is-visible');
      });
      return;
    }

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach(element => {
      this.observer?.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
