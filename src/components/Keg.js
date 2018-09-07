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
        <h2>{this.name}</h2>
        <hr/>
        <h3>{this.brand}</h3>
        <h4>{this.price}</h4>
        <p>{this.alcohol}</p>
      </div>
    );
  }
}

Keg.defaultProps = {
  capacity: 124
}

Keg.propTypes = {
  name: string,
  brand: string,
  price: number,
  alcohol: number
}

export default Keg;