import React from 'react';

const NewKegForm = (props) => {
  let toggleForm = false;

  const showForm = () => {
    toggleForm = !toggleForm;
  }

  const handleAddKeg = (e) => {
    const name = e.target.elements.name.value;
    const brand = e.target.elements.brand.value;
    const price = e.target.elements.price.value;
    const alcohol = e.target.elements.alcohol.value;
  }

  return(
    <div>
      <button onClick={showForm}>Add New Keg</button>
      {
        toggleForm && 
        <form onSubmit={handleAddKeg}>
          <label for="name">Enter New Keg Name:</label>
          <input type="text" name="name" placeholder="e.g, Blue Moon"/>
          <label for="brand">Enter Brand Name:</label>
          <input type="text" name="brand" placeholder="e.g, Deschutes"/>
          <label for="price">Enter Price:</label>
          <input type="number" name="price" placeholder="e.g, 5"/>
          <label for="alcohol">Enter Alcohol Content:</label>
          <input type="number" name="alcohol" placeholder="e.g, 10.53"/>
        </form>
      }
    </div>
  );
}

export default NewKegForm;