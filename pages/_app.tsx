import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>NextJS Sample</title>
        <meta name="description" content="A sample of what NextJS can do" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>NextJS Sample</h1>

        <Navigation />
      </header>

      <p className="layout-message">
        This message is on every page because it is in the &quot;_app.tsx&quot;
        file
      </p>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
