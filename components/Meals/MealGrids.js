import MealItem from '@/components/Meals/MealItem'
import classes from './MealGrid.module.css'

export default function MealGrids({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
}
