export const handlePositionData = ( activeData ) =>
{
  return ( dispatch ) =>
  {
    dispatch( {
      type: "positionData",
      payload: activeData,
    } );
  };
};
