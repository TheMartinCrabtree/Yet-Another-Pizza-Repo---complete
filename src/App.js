import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
	state={
		allpizzas: [],
		editpizza: {}
	}

	componentDidMount(){
		fetch("http://localhost:3000/pizzas")
			.then(response=>response.json())
			.then((allpizzadata)=>{
				console.log("populating all pizzas")
				this.setState({
					allpizzas: allpizzadata
				})
			})
	}

	handleEditPizza=(event, pizzaObj)=>{
		console.log("clicked edit pizza",  pizzaObj)
		return this.setState({ editpizza: pizzaObj })
	}


	handleUpdatePizzaForm=(event)=>{
		/// UPDATE SELECTED PIZZA ON UPDATE IN PIZZA FORM
		console.log("hit handle update pizza", event.target)
		if(event.target.type==="radio"){
			console.log("is radio", event.target.value)
			return this.setState({
				editpizza: {...this.state.editpizza, [event.target.name]: event.target.value === "Vegetarian" ? true : false  }
			})
		}
		else{
			return this.setState({
				editpizza: {...this.state.editpizza, [event.target.name]: event.target.value }
			})
		}
	}

	handlePizzaFormSubmit=(event)=>{
		event.preventDefault();
		////  REPLACE UPDATED PIZZA AND APPLY TO STATE
		const updatedAllPizza = this.state.allpizzas;
		const updatePizzaIndex = this.state.allpizzas.findIndex((pizza)=>{
			return pizza.id === this.state.editpizza.id
		})
		updatedAllPizza[updatePizzaIndex] = this.state.editpizza
		return this.setState({
			allpizzas: updatedAllPizza
		})
	}

	render() {
		return (
		<Fragment>
			<Header/>
			<PizzaForm 
				key="pizzaform" 
				pizzaObj={ this.state.editpizza }
				handlePizzaFormSubmit={ this.handlePizzaFormSubmit }
				handleUpdatePizzaForm={this.handleUpdatePizzaForm}  />
			<PizzaList 
				key="pizzalist" 
				allpizzas={this.state.allpizzas}
				handleEditPizza={this.handleEditPizza}  />
		</Fragment>
		);
	}
}

export default App;
