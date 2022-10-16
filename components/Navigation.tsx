import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a title="Back to home page">Home</a>
          </Link>
        </li>

        <li>
          <Link href="/static">
            <a title="See how static site generation (SSG) works">SSG</a>
          </Link>
        </li>

        <li>
          <Link href="/revalidate">
            <a title="See how incremental static regeneration works">ISR</a>
          </Link>
        </li>

        <li>
          <Link href="/server-side">
            <a title="See how dynamic server side rendering (SSR) works">SSR</a>
          </Link>
        </li>

        <li>
          <Link href="/clever-routes">
            <a title="See how clever routing works">Clever Routes</a>
          </Link>
        </li>

        <li>
          <Link href="/apis">
            <a title="See how Next.js APIs work">APIs</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
