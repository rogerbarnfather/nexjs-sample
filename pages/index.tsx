import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <h2>Welcome</h2>

      <p>
        NOTE: Please make sure this app is being built and run in production
        mode. It will not work correctly in development mode.
      </p>

      <p>
        That said, please navigate around using the links at the top of the
        page.
      </p>
    </div>
  )
}

export default Home
