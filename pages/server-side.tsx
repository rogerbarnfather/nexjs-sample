import Head from 'next/head'
import { NextPage } from 'next'
import { Props } from '../lib/types'
import randomString from '../lib/randomString'

const stringLength = 8

const ServerSide: NextPage<Props> = ({ string1, string2, string3 }: Props) => {
  return (
    <div>
      <Head>
        <title>Server Side Rendering(SSR)</title>
      </Head>

      <h2>Server Side Rendering (SSR)</h2>

      <p>
        The following strings get regenerated with every request. Refreshing the
        page to see them change.
      </p>

      <ul>
        <li>{string1}</li>
        <li>{string2}</li>
        <li>{string3}</li>
      </ul>
    </div>
  )
}

// The lack of a function called "getStaticProps" tells
// NextJS that the page should not be built and cached
// but instead get generated upon every live request.
// This works the same as technologies like PHP, EJS, JSP etc.
// The function "getServerSideProps" gets run with each
// request to this page so that the data can be prepared
// and rendered in the page.
export const getServerSideProps = async () => {
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

export default ServerSide
