import classes from './page.module.css'

export default function LoadingMealsPage() {
  return (
    <p className={classes.loading}>Fetching meals...</p>
  )
}
