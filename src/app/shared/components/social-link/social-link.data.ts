import { github, linkedin, message} from './social-link.icon'

type SocialLink = {
  name: string;
  path: string;
  link: string;
  color?: string;
};

const socialLinks: SocialLink[] = [
  {
    name: 'Github',
    path: github,
    link: 'https://github.com/marckevinflores',
    color: '',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://linkedin.com/in/marckevinflores',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: message,
    link: 'mailto:marc@kevinflor.es?subject=Hi Marc Kevin!',
    color: '#e74c3c',
  },
];

export default socialLinks;
