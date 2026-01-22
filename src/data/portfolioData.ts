import { Project } from '../components/ProjectsSection';

export const portfolioData = {
  profile: {
    name: 'Ross Simon Eguia',
    bio: 'Passionate mobile developer specializing in React Native and cross-platform solutions. Love creating beautiful, performant apps with great user experiences.',
    profileImage: undefined, // You can add a URL here
  },
  skills: [
    'React Native',
    'React',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Expo',
    'Redux',
    'Firebase',
    'Git',
    'REST APIs',
    'GraphQL',
    'MongoDB',
  ],
  contact: {
    email: 'ross.simon.eguia@example.com',
    socialLinks: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      twitter: 'https://twitter.com/yourusername',
      portfolio: 'https://yourportfolio.com',
    },
  },
  projects: [
    {
      id: '1',
      title: 'E-Commerce Mobile App',
      description: 'A full-featured e-commerce application with shopping cart, payment integration, and user authentication. Built with React Native and Firebase.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Stripe API'],
      githubUrl: 'https://github.com/yourusername/ecommerce-app',
      demoUrl: 'https://yourdemo.com',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects with real-time collaboration features. Includes offline support and cloud sync.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/yourusername/task-app',
      demoUrl: 'https://yourdemo.com',
    },
    {
      id: '3',
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with location-based forecasts, detailed weather information, and interactive maps. Features smooth animations and intuitive UI.',
      technologies: ['React Native', 'Expo', 'Weather API', 'Maps'],
      githubUrl: 'https://github.com/yourusername/weather-app',
      demoUrl: 'https://yourdemo.com',
    },
    {
      id: '4',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time metrics, content scheduling, and engagement tracking.',
      technologies: ['React Native', 'GraphQL', 'Apollo', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/social-dashboard',
      demoUrl: 'https://yourdemo.com',
    },
  ] as Project[],
};
