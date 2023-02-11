import { navbar } from 'vuepress-theme-hope';

export const enNavBarConfig = navbar([
  '/',
  '/page/about/',
  {
    text: 'Menu with sublinks',
    children: [
      {
        text: 'Sublink 1',
        link: '/',
      },
      {
        text: 'Sublink 2',
        link: '/',
      },
      {
        text: 'Sublink 3',
        link: '/',
      },
    ],
  },
  { text: 'Contact', link: '/page/contact-me/' },
]);
