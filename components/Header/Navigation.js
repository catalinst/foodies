'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './Navigation.module.css'

export default function Navigation() {
  const path = usePathname()

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith('/meals')
              ? classes.active
              : undefined}
          >Browse Meals</Link>
        </li>
        <li>
          <Link
            href="/community"
            className={path === '/community' ? classes.active : undefined}
          >Foodies community</Link>
        </li>
      </ul>
    </nav>
  )
}
