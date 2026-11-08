
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
      githubUrl: '',
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
    }
  ];
  experiences: Experience[] = [
  {
    company: 'Roadmap IT Solutions',
    role: 'Add your actual job title',
    period: 'Add employment dates',
    type: 'Professional Experience',
    description:
      'Add a short description of your actual role and work.',
    responsibilities: [
      'Describe your actual technical responsibilities.',
      'Mention the technologies you used.',
      'Highlight a genuine contribution or achievement.'
    ]
  },
  {
    company: 'Verzeo',
    role: 'Add your actual internship title',
    period: 'Add internship dates',
    type: 'Internship',
    description:
      'Describe your internship and the work you performed.',
    responsibilities: [
      'Describe the projects or tasks you completed.',
      'Mention your technical contributions.',
      'Highlight the skills you developed.'
    ]
  },
  {
    company: 'Freelance',
    role: 'Freelance Web Developer',
    period: '2022 – Present',
    type: 'Freelance',
    description:
      'Developing web solutions and working on independent software projects.',
    responsibilities: [
      'Develop websites and web applications.',
      'Work with frontend and backend technologies.',
      'Manage development tasks and project delivery.'
    ]
  }
];
education: Education[] = [
  {
    institution: 'EPITA',
    degree: 'Master’s in Software Engineering',
    period: 'Add your actual study dates',
    location: 'Paris, France',
    description:
      'Advanced studies in software engineering, application development and modern computing technologies.'
  }
];

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
