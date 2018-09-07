import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

class KegList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      kegs: []
    }
  }

  handleAddKeg(keg) {
    if(prevState.kegs.indexOf(keg) === -1) this.setState(prevState => ({kegs: prevState.kegs.concat(keg)}));
  }

  handleRemoveKeg(keg) {
    this.setState(prevState => ({kegs: prevState.kegs.filter(p => p !== keg)}));
  }

  handleRemoveAllKegs() {
    this.setState(() => ({kegs: []}));
  }
  
  render() {
    return(
      <div>
        {this.state.kegs.length === 0 && <p>You haven't added any kegs yet!</p>}
        {
          this.state.kegs.map(keg => {
            return (
              <Keg 
                name={keg.name} 
                brand={keg.brand}
                price={keg.price}
                alcohol={keg.alcohol}  
                />
            );
          })
        }
      </div>
    );
  }
}

KegList.defaultProps = {
  kegs: []
}

KegList.propTypes = {
  kegs: PropTypes.array
}

export default KegList;