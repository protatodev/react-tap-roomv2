const grabLocalState = () => {
  try {
    const json = localStorage.getItem('kegs');
    const kegs = JSON.parse(json);
  
    if(kegs) return kegs;
  }
  catch(e) {
    // Do nothing
  }
};

const initialState = {
  kegs: grabLocalState()
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch(type) {
  case 'ADD_KEG':
    return { kegs: state.kegs.concat(payload) };
  case 'REMOVE_KEG':
    return { kegs: state.kegs.slice(0).filter(p => p.id !== payload.id) };
  case 'REMOVE_KEGS':
    return { kegs: [] };
  default:
    return state;
  }
};

export default rootReducer;