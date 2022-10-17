import { FC } from 'react'
import Link from 'next/link'

const StaticPathsNavigation: FC = () => {
  return (
    <nav>
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
    </nav>
  )
}

export default StaticPathsNavigation
