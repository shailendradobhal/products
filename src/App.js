import React, { Component } from 'react';
import { products } from './data';
import Input from './components/Input';
import Button from './components/Button';
import Tile from './components/Tile';
class App extends Component {

  state = {
    searchTerm: '',
    products: products,
    errMessage: false
  }

  onChangeHandle = (e) => {
    if(e.target.value.trim() === '') {
      this.setState({
        searchTerm: e.target.value,
        products: products,
        errMessage: false
      });
    } else {
      this.setState({
        searchTerm: e.target.value
      });
    }
  }

  search = () => {

    if(this.state.searchTerm.trim() !== '') {
      const newProducts = products.filter(product => {
        return product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      });

      if(newProducts.length === 0) {
        this.setState({
          products: newProducts,
          errMessage: true
        });  
      } else {
        this.setState({
          products: newProducts,
          errMessage: false
        });
      }
    }

  }

  displayTiles = () => {
    return this.state.products.map(product => <Tile key={product.id} product={product} />);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
            <div className="col-8"><Input onChangeHandle={this.onChangeHandle} /></div>
            <div className="col-3">
              <Button onClick={this.search}>Search</Button>
            </div>
        </div>
        <div className="row">
          {this.displayTiles()}
        </div>
        {this.state.errMessage ? (
          <div class="alert alert-danger mt-5" role="alert">
            No Product Found
          </div>
        ) : null}
        
      </div>
    );
  }
}

export default App;
