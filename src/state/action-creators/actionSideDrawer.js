export const handleSideDrawer = (activeInactiveSlide) => {
  return (dispatch) => {
    dispatch({
      type: "sideDrawer",
      payload: activeInactiveSlide,
    });
  };
};
