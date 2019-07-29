const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const model = {
  namespace: 'index',
  state: {
    pathname: '/',
  },
  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    *init(action, { put }) {
      yield delay(2000);
      yield put({ type: 'caculate', delta: 1 });
    },
  },
};

export default model;

