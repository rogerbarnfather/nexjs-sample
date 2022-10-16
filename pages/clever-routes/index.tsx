import { NextPage } from 'next'
import Head from 'next/head'
import CleverRoutesForm from '../../components/CleverRoutesForm'

const CleverRoutes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clever Routes</title>
      </Head>

      <h2>Clever Routes</h2>

      <p>The routing system is clever in Next.js.</p>
      <p>Enter a some text in the field below and see how it works.</p>

      <CleverRoutesForm />
    </>
  )
}

export default CleverRoutes
