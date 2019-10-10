import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input 
				type="text" 
				className="form-control" 
            	placeholder="Pizza Topping" 
				onChange={ (event)=> props.handleUpdatePizzaForm(event) }
				name="topping"
				value={ props.pizzaObj ? props.pizzaObj.topping : null }/>
        </div>
        <div className="col">
          <select 
		  		onChange={ (event)=> props.handleUpdatePizzaForm(event) }
		  		value={props.pizzaObj ? props.pizzaObj.size : null} 
				className="form-control" 
				name="size" >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
					className="form-check-input" 
					type="radio" 
					value="Vegetarian" 
					name="vegetarian"
					onChange={ (event)=> props.handleUpdatePizzaForm(event) }
					checked={props.pizzaObj.vegetarian ? "checked" : null }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input 
				className="form-check-input" 
				type="radio" 
				value="Not Vegetarian" 
				name="vegetarian"
				onChange={ (event)=> props.handleUpdatePizzaForm(event) }
				checked={ props.pizzaObj.vegetarian ? null : "checked" }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button 
		  		type="submit" 
				className="btn btn-success" 
				onClick={(event)=>props.handlePizzaFormSubmit(event) }>
					Submit
			</button>
        </div>
      </div>

  )
}

export default PizzaForm
