import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

class KegList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      kegs: []
    };
  }

  render() {
    return(
      <div>
        <div className="row">
          {
            this.state.kegs.map((keg, index) => {
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

KegList.defaultProps = {
  kegs: []
};

KegList.propTypes = {
  kegs: PropTypes.array
};

export default KegList;