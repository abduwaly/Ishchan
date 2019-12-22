import { UPDATE, RESET } from "../constants/account";

export const update = data => {
  return {
    type: UPDATE,
    payload: data
  };
};
export const reset = () => {
  return {
    type: RESET
  };
};

// // 异步的action
// export function asyncAdd() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(add());
//     }, 2000);
//   };
// }
