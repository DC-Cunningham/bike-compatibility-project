import React, { createContext, useReducer, useContext } from "react";
import { LOGIN_ACTION, LOGOUT_ACTION, LOADING } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        user: action.currentUser,
        loading: false,
      };

    case LOGOUT_ACTION:
      return {
        ...state,
        user: {},
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const UserState = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      _id: 0,
      displayName: "",
      role: "",
      token: "",
    },
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { UserState, useStoreContext };
