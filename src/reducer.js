export default function reducer(state = false, action) {
  if (action.type === "login") {
    return true;
  } else if (action.type === "logout") {
    return false;
  }
  return state;
}
