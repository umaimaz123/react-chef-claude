import React from "react" 

export default function Main() {
  const [ingredients, setIngredients] = React.useState([])
    
  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li> // added key prop, and map all the way to return list of ingredients
  ))

  function handleOnSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    
    // ingredients.push(newIngredient) // Adding new ingredient to the existing array like this is not recommended in React
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]) // update state with new array including the new ingredient
  }
    
  return (
      <main>
        <form action={handleOnSubmit} className="add-ingredient-form">
          <input 
            type="text" 
            aria-label="Add ingredient" 
            placeholder="Enter your ingredients..." 
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>

        { ingredientsListItems.length > 0 && 
          <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul> {/* rendered the list of ingredients through map */}
            {
              ingredientsListItems.length > 3 && 
              <div className="get-recipe-container">
                <div>
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
              </div>
            }
          </section>
        }
      </main>
      
  )
}
