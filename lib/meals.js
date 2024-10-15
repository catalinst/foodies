const sql = require('better-sqlite3')

const db = sql('meals.db')

// not need to be async, used just simulate loading state
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  // throw new Error('Loading meals failed!')
  return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(mealId) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(mealId)
  // better approach to avoid SQL injections
}
