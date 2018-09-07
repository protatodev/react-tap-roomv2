import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

class KegList extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleAddKeg = this.handleAddKeg.bind(this);
    this.handleRemoveKeg = this.handleRemoveKeg.bind(this);
    this.handleRemoveAllKegs = this.handleRemoveAllKegs.bind(this);
    this.state = {
      kegs: []
    }
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

  componentDidUpdate(prevProps, prevState) {
    if(prevState.kegs.length !== this.state.kegs.length) {
      const json = JSON.stringify(this.state.kegs);
      localStorage.setItem('kegs', json);
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
        {this.state.kegs.length > 0 && <button onClick={this.handleRemoveAllKegs}>Remove All Kegs</button>}
        {this.state.kegs.length === 0 && <p>You haven't added any kegs yet!</p>}
        {
          this.state.kegs.map(keg => {
            return (
              <div>
                <Keg 
                  name={keg.name} 
                  brand={keg.brand}
                  price={keg.price}
                  alcohol={keg.alcohol}  
                />
                <small><button onClick={this.handleRemoveKeg(keg)}>Remove</button></small>
              </div>
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