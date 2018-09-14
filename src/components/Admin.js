import React from 'react';
import KegList from './KegList';
import uuid from 'uuid';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegs: [],
      toggleForm: false
    };
    this.showForm = this.showForm.bind(this);
    this.handleAddKeg = this.handleAddKeg.bind(this);
  }

  handleAddKeg(e) {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const brand = e.target.elements.brand.value;
    const price = parseInt(e.target.elements.price.value);
    const alcohol = parseInt(e.target.elements.alcohol.value);

    const keg = {
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      id: uuid()
    };
  }

  handleRemoveKeg(keg) {

  }

  handleRemoveAllKegs() {

  }

  showForm() {

  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return(
      <div>
        Admin works!
        <div>
          <button className="btn btn-primary" onClick={this.showForm}>Add New Keg</button>
          {
            this.state.toggleForm && 
            <form onSubmit={this.handleAddKeg}>
              <label htmlFor="name">Enter New Keg Name:</label>
              <input className="form-control" type="text" name="name" placeholder="e.g, Blue Moon"/>
              <label htmlFor="brand">Enter Brand Name:</label>
              <input className="form-control" type="text" name="brand" placeholder="e.g, Deschutes"/>
              <label htmlFor="price">Enter Price:</label>
              <input className="form-control" type="number" name="price" placeholder="e.g, 5"/>
              <label htmlFor="alcohol">Enter Alcohol Content:</label>
              <input className="form-control" type="number" name="alcohol" placeholder="e.g, 10.53"/>
              <button className="btn btn-primary" type="submit">Add Keg</button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default Admin;