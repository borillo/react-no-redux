export const INCREMENT = "INCREMENT"

const incrementCount = dispatch => {
  dispatch({
    type: INCREMENT
  });
};

export { incrementCount };
