import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

const KegList = (props) => (
  <div>
    <div className="row">
    {
      props.kegs.map((keg, index) => {
        return (
          <div className="card col-md-6" key={index}>
            <Keg
              name={keg.name} 
              brand={keg.brand}
              price={keg.price}
              alcohol={keg.alcohol}  
            />
          </div>
        );
      })
    }
    </div>
  </div>
);

KegList.propTypes = {
  kegs: PropTypes.array
};

export default KegList;