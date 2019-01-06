const initialState = {
  users: {
    path: null,
    isLoad: false,
    users: [],
    error: null,
  },
  orders: {
    path: null,
    isLoad: false,
    orders: [],
    error: null,
    order: null,
    parcel: null,
  },
  login: {
    username: null,
    password: null,
    error: null,
    path: '/',
    isLoad: false,
  }
}
export default initialState;