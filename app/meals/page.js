import { Suspense } from 'react'
import Link from 'next/link'

import MealGrids from '@/components/Meals/MealGrids'
import classes from './page.module.css'
import { getMeals } from '@/lib/meals'

async function Meals() {
  const meals = await getMeals()

  return <MealGrids meals={meals} />
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, create{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it! It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
