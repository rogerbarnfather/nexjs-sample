import Head from 'next/head'
import { NextPage } from 'next'
import animals from '../../data/animals.json'
import StaticPathsNavigation from '../../components/StaticPathsNavigation'

type Animal = {
  type: string
  name: string
  colour: string
}

type Props = {
  animal: Animal
}

const StaticPaths: NextPage<Props> = ({ animal }: Props) => {
  return (
    <>
      <Head>
        <title>Static Paths</title>
      </Head>

      <StaticPathsNavigation />

      <h2>Static Paths</h2>

      <p>
        This is the &ldquo;{animal.type}&rdquo; page. It was generated when the
        app was built.
      </p>

      <p>Type: {animal.type}</p>

      <p>Name: {animal.name}</p>

      <p>Colour: {animal.colour}</p>
    </>
  )
}

// If "getStaticPaths" exists then Next.js will
// call it during the build to get a list of paths.
// Then, the function "getStaticProps" will be
// called several times, once for each path.
// A page for each one is generated and stored.
export const getStaticPaths = async () => {
  const paths = animals.map((animal: Animal) => ({
    params: { type: animal.type },
  }))

  return {
    paths,
    fallback: false, // Give 404 for any path not in the list.
    /*
     * fallback: true
     * If a path is requested that wasn't in the original
     * list of paths then a "Loading..." page is briefly
     * shown while dynamically building and caching a page
     * for the missing path.
     * The loading page must be created by you and shown
     * if "(router.isFallback === true)"
     * This is good for pre-generating only the important
     * pages and leaving the rest to be made on-the-fly
     * but with a "Loading..." page (a fallback).
     *
     * fallback: blocking
     * Same as "true" but no fallback page. You just
     * have to wait as it builds the page on the server
     * and sends it to the browser.
     */
  }
}

type ctx = { params: Animal }

// The paths from the previous function
// will be used in this function to
// build different static pages.
export const getStaticProps = async ({ params }: ctx) => {
  const typeOfAnimal = params.type
  const animal = animals.find((animal: Animal) => animal.type === typeOfAnimal)

  return { props: { animal } }
}

export default StaticPaths
