export const FLAG_UPDATE = '@@feat-flip/FLAG_UPDATE';

export const updateFlags = payload => ({
  type: FLAG_UPDATE,
  payload,
})

export const featuresReducer = (init) => {
  const availableFlags = Object.keys(init);
  return (state = {}, action) => {
    if (action.type === FLAG_UPDATE) {
      return { ...state, ...action.payload };
    }
    return state;
  }
}

export const getFlag = (state, reducerKey = 'features') => name => {
  const flags = state.[reducerKey];
  const flag = flags[name];
  if (typeof flag === 'function') {
    return flag(flags);
  }
  return flag;
}
