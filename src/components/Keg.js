import React from 'react';

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capacity: props.capacity
    }
    this.name = props.name;
    this.brand = props.brand;
    this.price = props.price;
    this.alcohol = props.alcohol;
  }

  render() {
    return(
      <div>
        
      </div>
    );
  }
}

export default Keg;