import type { DefaultSeoProps } from 'next-seo';

export const seoConfig: DefaultSeoProps = {
  title: 'Iranoan(イラノアン)',
  titleTemplate: '%s - Iranoan(イラノアン)',
  description: 'イラノアンの公式ホームページです。トレーディングカード販売、アプリ開発をはじめ、あなたのライフスタイルに刺激と遊びを与えるサービスを開発しています。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    site_name: 'Iranoan(イラノアン)',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
