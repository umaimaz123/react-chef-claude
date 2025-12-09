export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
      <li key={ingredient}>{ingredient}</li> // added key prop, and map all the way to return list of ingredients
    ))

    function handleOnSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient) // added new ingredient to the array
        console.log(ingredients) // log updated ingredients array
    }
    
  return (
      <main>
        <form onSubmit={handleOnSubmit} className="add-ingredient-form">
          <input 
            type="text" 
            aria-label="Add ingredient" 
            placeholder="Enter your ingredients..." 
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>
        <ul>
          {ingredientsListItems}  {/* rendered the list of ingredients through map */}
        </ul>
      </main>
  )
}
