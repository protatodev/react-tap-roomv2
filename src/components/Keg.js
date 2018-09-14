import React from 'react';
import PropTypes from 'prop-types';


const expensive = {
  color: 'orange'
};

const cheap = {
  color: 'green'
};

const emptyKeg = {
  color: 'red'
};

const normalKeg = {
  color: 'blue'
};

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capacity: props.capacity
    };
    this.name = props.name;
    this.brand = props.brand;
    this.price = props.price;
    this.alcohol = props.alcohol;
    this.handleSellPint = this.handleSellPint.bind(this);
    this.id = props.id;
  }

  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem(this.id));

      if(count) this.setState(() => ({ capacity: count }));
    }
    catch(e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.capacity !== this.state.capacity) {
      localStorage.setItem(this.id, this.state.capacity);
    }
  }

  handleSellPint() {
    this.setState(prevState => ({ capacity: prevState.capacity - 1}));
  }

  handleRemoveKeg() {
    this.props.handleRemoveKeg(this.id);
  }

  render() {
    return(
      <div className="card-body">
        <h2 className="card-title">{this.name}</h2>
        <hr/>
        <h3 className="card-text">Brand: {this.brand}</h3>
        <h4 className="card-text">Price: <span style={this.price <= 5 ? cheap : expensive}>${this.price}</span></h4>
        <p className="card-text">ABV: {this.alcohol}%</p>
        <p className="card-text">Pints: <span style={this.state.capacity <= 10 ? emptyKeg : normalKeg}>{this.state.capacity}</span></p>
        <small><button className="btn btn-success" onClick={() => this.handleSellPint() }>Sell Pint</button></small>
        <small><button className="btn btn-danger" onClick={() => this.handleRemoveKeg() }>Remove Keg</button></small>
      </div>
    );
  }
}

Keg.defaultProps = {
  capacity: 124
};

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcohol: PropTypes.number,
  capacity: PropTypes.number,
  id: PropTypes.string,
  handleRemoveKeg: PropTypes.func
};

export default Keg;