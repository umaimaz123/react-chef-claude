export default function Main() {
  return (
      <main>
        <form className="add-ingredient-form">
          <input 
            type="text" 
            aria-label="Add ingredient" 
            placeholder="Enter your ingredients..." 
          />
          <button>Add ingredient</button>
        </form>
      </main>
  )
}
