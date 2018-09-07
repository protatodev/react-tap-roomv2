import React from 'react';
class NewKegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleForm: false
    }
    this.showForm = this.showForm.bind(this);
    this.handleAddKeg = this.handleAddKeg.bind(this);
  }

  showForm() {
    this.setState(prevState => ({ toggleForm: !prevState.toggleForm }));
  }

  handleAddKeg(e) {
    e.preventDefault();
    
    const name = e.target.elements.name.value;
    const brand = e.target.elements.brand.value;
    const price = e.target.elements.price.value;
    const alcohol = e.target.elements.alcohol.value;

    const keg = {
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol
    };

    this.props.handleAddKeg(keg);
  }

  render() {
    return(
      <div>
        <button onClick={this.showForm}>Add New Keg</button>
        {
          this.state.toggleForm && 
          <form onSubmit={this.handleAddKeg}>
            <label htmlFor="name">Enter New Keg Name:</label>
            <input type="text" name="name" placeholder="e.g, Blue Moon"/>
            <label htmlFor="brand">Enter Brand Name:</label>
            <input type="text" name="brand" placeholder="e.g, Deschutes"/>
            <label htmlFor="price">Enter Price:</label>
            <input type="number" name="price" placeholder="e.g, 5"/>
            <label htmlFor="alcohol">Enter Alcohol Content:</label>
            <input type="number" name="alcohol" placeholder="e.g, 10.53"/>
            <button type="submit">Add Keg</button>
          </form>
        }
      </div>
    );
  }
}

export default NewKegForm;