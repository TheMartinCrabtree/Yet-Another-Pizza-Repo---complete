import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  displayPizzas=()=>{
    return this.props.allpizzas.map((pizzaObj)=>{
      return <Pizza key={ pizzaObj.id } pizzaObj={pizzaObj} handleEditPizza={this.props.handleEditPizza}  />
    })
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          { this.displayPizzas() }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
