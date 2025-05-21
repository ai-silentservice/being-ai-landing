import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>지안: 사람처럼 대화하고, 사고하는 AI</title>
        <meta name="description" content="단순한 챗봇이 아닙니다. 사용자 상황을 이해하고, 판단까지 연결하는 고급 AI 서비스입니다. 현재 베타테스터 1,100명 확보. 정식 출시 준비 중입니다." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="지안: 사람처럼 대화하고, 사고하는 AI" />
        <meta property="og:description" content="단순한 챗봇이 아닙니다. 사용자 상황을 이해하고, 판단까지 연결하는 고급 AI 서비스입니다. 현재 베타테스터 1,100명 확보. 정식 출시 준비 중입니다." />
        <meta property="og:image" content="/beai-meta-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="지안: 사람처럼 대화하고, 사고하는 AI" />
        <meta name="twitter:description" content="단순한 챗봇이 아닙니다. 사용자 상황을 이해하고, 판단까지 연결하는 고급 AI 서비스입니다. 현재 베타테스터 1,100명 확보. 정식 출시 준비 중입니다." />
        <meta name="twitter:image" content="/beai-meta-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
} 