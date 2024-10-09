import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/assets/logo.png'
import classes from './Header.module.css'
import HeaderBackground from '@/components/Header/HeaderBackground'

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          Foodies Home
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
