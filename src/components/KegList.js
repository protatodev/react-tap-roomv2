import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

class KegList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegs: this.props.kegs
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('kegs');
      const kegs = JSON.parse(json);

      if(kegs) this.setState(() => ({ kegs }));
    }
    catch(e) {
      // Do nothing
    }
  }
  
  render() {
    return (
      <div>
        <div className="row">
          {!this.state.kegs && <h3>No keg's have been listed yet. Check back soon!</h3>}
          {
            this.state.kegs && this.state.kegs.map((keg, index) => {
              return (
                <div className="card col-md-6" key={index}>
                  <Keg
                    name={keg.name} 
                    brand={keg.brand}
                    price={keg.price}
                    alcohol={keg.alcohol}  
                    id={keg.id}
                    handleRemoveKeg={this.props.handleRemoveKeg}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

KegList.propTypes = {
  kegs: PropTypes.array,
  handleRemoveKeg: PropTypes.func
};

export default KegList;