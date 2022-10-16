import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CleverRoutesForm from '../../components/CleverRoutesForm'

const CleverRoutes: NextPage = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <>
      <Head>
        <title>Clever Routes: {name}</title>
      </Head>

      <h2>Clever Routes: {name}</h2>

      <p>You entered &ldquo;{name}&rdquo;.</p>

      <p>
        The URI of this page is: <code>/clever-routes/{name}</code>
      </p>

      <p>
        The filename for this page in the project is:{' '}
        <code>pages/clever-routes/[name].tsx</code>
      </p>

      <p>
        Notice that the filename has square brackets around it! This is
        perfectly acceptable and indicates to NextJS that this is a dynamic
        route. We can get access to the name you used and do things with it.
      </p>

      <p>Try another if you like...</p>

      <CleverRoutesForm />
    </>
  )
}

export default CleverRoutes
