import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegs: []
    };
    this.handleAddKeg = this.handleAddKeg.bind(this);
    this.handleRemoveKeg = this.handleRemoveKeg.bind(this);
    this.handleRemoveAllKegs = this.handleRemoveAllKegs.bind(this);
  }

  handleAddKeg(keg) {
    console.log(keg);
    if(this.state.kegs.indexOf(keg) === -1) this.setState(prevState => ({kegs: prevState.kegs.concat(keg)}));
    console.log(this.state.kegs);
  }

  handleRemoveKeg(id) {
    this.setState(prevState => ({kegs: prevState.kegs.filter(p => p.id !== id)}));
  }

  handleRemoveAllKegs() {
    this.setState(() => ({kegs: []}));
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

  render() {
    return(
      <div>
        {this.state.kegs.length > 0 && <button className="btn btn-danger" onClick={this.handleRemoveAllKegs}>Remove All Kegs</button>}
        {this.state.kegs.length === 0 && <p>You haven't added any kegs yet!</p>}
        <NewKegForm handleAddKeg={this.handleAddKeg}/>
        <KegList handleRemoveKeg={this.handleRemoveKeg} kegs={this.state.kegs.slice(0)}/>
      </div>
    );
  }
}

export default Admin;