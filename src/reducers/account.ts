import { UPDATE, RESET } from "../constants/account";

const INITIAL_STATE = {
  id: -1,
  username: "",
  loginame: "",
  password: "",
  position: "",
  department: "",
  email: "",
  phonenum: "",
  ismanager: -1,
  isystem: false,
  status: -1,
  description: "",
  remark: "",
  tenantId: ""
};

export default function account(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.payload
      };
    case RESET:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
}
