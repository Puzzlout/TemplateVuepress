const version = '1.0.27';

import type { UserConfig } from "vuepress";
import { defineUserConfig } from '@vuepress/cli';

import theme from './theme';
import { enHeadConfig, frHeadConfig } from './configs/head';

export default <UserConfig>defineUserConfig({
  lang: 'en-US', //or any other local (ex: "fr-FR")
  locales: {
    '/': enHeadConfig,
    '/fr/': frHeadConfig,
  },
  theme,
  shouldPrefetch: false,
  plugins: [
  ],
});
