import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import animalData from '../../data/animals.json'

const json = JSON.stringify(animalData)

const StaticPaths: NextPage = () => {
  return (
    <>
      <Head>
        <title>Static Paths</title>
      </Head>

      <h2>Static Paths</h2>

      <p>
        If you have some data (e.g.- from a database), you can can pre-generate
        pages for it.
      </p>

      <p>
        Imagine we have the data: <code>animals = {json}</code>
      </p>

      <p>
        We could pre-generate <code>/static-paths/cat</code>,{' '}
        <code>/static-paths/dog</code> and <code>/static-paths/goldfish</code>.
      </p>

      <p>
        The pages would contain the data as it was at the time of building, so
        if you wanted accurate up-to-date information you would have to fully
        rebuild the app or set an invalidation time for the paths (see{' '}
        <Link href="/revalidate">ISR</Link>).
      </p>

      <p>The following paths have already been generated:</p>

      <ul>
        <li>
          <Link href="/static-paths/cat">Cat</Link>
        </li>

        <li>
          <Link href="/static-paths/dog">Dog</Link>
        </li>

        <li>
          <Link href="/static-paths/goldfish">Goldfish</Link>
        </li>
      </ul>

      <p>
        If we try a page that has not been generated e.g.-{' '}
        <Link href="/static-paths/nothing">/static-paths/nothing</Link> then we
        will get an error page.
      </p>
    </>
  )
}

export default StaticPaths
