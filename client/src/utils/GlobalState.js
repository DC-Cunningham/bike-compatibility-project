import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_COMPONENT,
  REMOVE_COMPONENT,
  UPDATE_COMPONENTS,
  ADD_COMPONENT,
  LOADING,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_COMPONENT:
      return {
        ...state,
        currentComponent: action.component,
        loading: false,
      };

    case UPDATE_COMPONENTS:
      console.log(action);
      return {
        ...state,
        components: [...action.components],
        loading: false,
      };

    case ADD_COMPONENT:
      return {
        ...state,
        components: [action.component, ...state.components],
        loading: false,
      };

    case REMOVE_COMPONENT:
      return {
        ...state,
        components: state.components.filter((component) => {
          return component._id !== action._id;
        }),
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

const ComponentStore = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    components: [],
    currentComponent: {
      _id: 0,
      name: "",
      type: "",
      description: "",
      pointsOfContact: [],
      influencers: [],
    },
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { ComponentStore, useStoreContext };
