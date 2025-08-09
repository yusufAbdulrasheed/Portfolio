export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Todo',
    description:
      'A simple todo app built with Next.js, TypeScript and SQLite.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/yusufAbdulrasheed/Todo_Api-using-SQLite',
    slug: 'Todo_Api',
  },
  {
    title: 'Dawn Talent',
    description:
      'A platform to connect developers with companies looking for talent.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/yusufAbdulrasheed/Dawn-talent-api',
    slug: 'dawn-talent-api',
  },
  {
    title: 'Zoom Board',
    description:
      'A collaborative whiteboard application for remote teams.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/yusufAbdulrasheed/zoom_board',
    slug: 'zoom-board',
  },
  {
    title: 'Belsoft API',
    description:
      ' A RESTful API for managing software development projects.',
    logo: '/logos/coolify.svg',
    link: 'https://github.com/yusufAbdulrasheed/belsoft-api',
    slug: 'belsoft-api',
  },
];
