const initialState = {
  places: []
}

export default (state = initialState, action: any) => {
  console.log(action);
  return state;
}