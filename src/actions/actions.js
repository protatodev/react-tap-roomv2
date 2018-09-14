export const addKeg = keg => ({ type: 'ADD_KEG', payload: keg});
export const removeKeg = id => ({type: 'REMOVE_KEG', payload: id});
export const removeAllKegs = () => ({type: 'REMOVE_KEG'});

