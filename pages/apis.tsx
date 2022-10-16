import Head from 'next/head'
import { useState } from 'react'
import type { NextPage } from 'next'

const Apis: NextPage = () => {
  const [json, setJson] = useState<string>('')
  const [error, setError] = useState<Error | undefined>()

  const handleButtonClick = async () => {
    try {
      const response = await fetch('/api/number')
      const jsonCode = await response.text()

      setJson(jsonCode)
    } catch (err) {
      if (err instanceof Error) {
        setError(err)
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Apis</title>
      </Head>

      <h2>APIs</h2>

      <p>
        Next.js comes with a folder called: <code>pages/api</code>
      </p>

      <p>
        Files in there can deal with incoming requests so you don&apos;t need a
        third party server to deal with your AJAX or fetch calls.
      </p>

      <p>
        <button onClick={handleButtonClick}>Click here</button> to request a
        random number from the endpoint: <code>/api/number</code>
      </p>

      {error && <p>{error.message}</p>}

      <h4>Received JSON:</h4>

      {json ? <code>{json}</code> : <p>(None yet)</p>}
    </div>
  )
}

export default Apis
