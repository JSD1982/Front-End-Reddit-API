const reducer = ( state = "", action ) =>
{
  switch ( action.type )
  {
    case "positionData":
      return ( state = action.payload );
    default:
      return state;
  }
};

export default reducer;
