import Head from 'next/head'
import { NextPage } from 'next'
import { Props } from '../lib/types'
import randomString from '../lib/randomString'

const stringLength = 8

const revalidationTime = 10

const Revalidate: NextPage<Props> = ({ string1, string2, string3 }: Props) => {
  return (
    <div>
      <Head>
        <title>Incremental Static Regeneration (ISR)</title>
      </Head>

      <h2>Incremental Static Regeneration (ISR)</h2>

      <p>
        NOTE: This feature will not work as expected if the app is running in
        dev mode.
      </p>

      <p>
        The following strings will invalidate after {revalidationTime} seconds.
        Refreshing the page after that time will cause a new set of strings to
        be generated. Try refreshing the page repeatedly to observe the
        behaviour.
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
// The function gets run during the build and the results
// are cached. The data revalidates when a request comes
// in after the given validation time.
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
    revalidate: revalidationTime,
  }
}

export default Revalidate
