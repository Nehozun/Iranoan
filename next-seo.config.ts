import type { DefaultSeoProps } from 'next-seo';

export const seoConfig: DefaultSeoProps = {
  title: 'Iranoan',
  titleTemplate: '%s - Iranoan Site',
  description: 'Iranoan Site',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    site_name: 'Iranoan',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
