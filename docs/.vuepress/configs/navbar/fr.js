import { navbar } from 'vuepress-theme-hope';

export const frNavBarConfig = navbar([
  '/fr/',
  '/fr/page/a-propos/',
  {
    text: 'Menu avec sous liens',
    children: [
      {
        text: 'Sous lien 1',
        link: '/',
      },
      {
        text: 'Sous lien 2',
        link: '/',
      },
      {
        text: 'Sous lien 3',
        link: '/',
      },
    ],
  },
  { text: 'Contact', link: '/fr/page/contactez-nous/' },
]);
