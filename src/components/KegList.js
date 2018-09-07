import React from 'react';
import Keg from './Keg';

class KegList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      kegs: []
    }
  }
  
  render() {
    return(
      <div>
        {
          this.state.kegs.map(keg => {
            <Keg/>
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
  kegs: []
}

export default KegList;