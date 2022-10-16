import Head from 'next/head'
import { NextPage } from 'next'
import { Props } from '../lib/types'
import randomString from '../lib/randomString'

const stringLength = 8

const Static: NextPage<Props> = ({ string1, string2, string3 }: Props) => {
  return (
    <div>
      <Head>
        <title>Static Site Generation (SSG)</title>
      </Head>

      <h2>Static Site Generation (SSG)</h2>

      <p>
        NOTE: This feature will not work as expected if the app is running in
        dev mode.
      </p>

      <p>
        The following strings will always be the same until the whole app is
        rebuilt. Try refreshing the page, they won&apos;t change.
      </p>

      <ul>
        <li>{string1}</li>
        <li>{string2}</li>
        <li>{string3}</li>
      </ul>
    </div>
  )
}

// The mere existence of the function "getStaticProps"
// causes NextJS to make a static/saved page on bulid.
// The function gets run once - during the build - and
// the results are cached until the whole project is
// rebuilt.
//
// Use: npm run build && npm start
// Running this project in "dev" mode will regenerate
// the data on every refresh.
export const getStaticProps = async () => {
  const string1 = randomString(stringLength)
  const string2 = randomString(stringLength)
  const string3 = randomString(stringLength)

  return {
    props: {
      string1,
      string2,
      string3,
    },
  }
}

export default Static
