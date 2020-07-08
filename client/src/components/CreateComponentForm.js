import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_COMPONENT, LOADING } from "../utils/actions";
import API from "../utils/API";

function CreateComponentForm() {
  const nameRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveComponent({
      name: nameRef.current.value,
      type: typeRef.current.value,
      description: descriptionRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_COMPONENT,
          post: result.data,
        });
      })
      .catch((err) => console.log(err));

    nameRef.current.value = "";
    typeRef.current.value = "";
  };

  return (
    <div>
      <h1>Create a new component</h1>
      <form onSubmit={handleSubmit}>
        <input required ref={nameRef} placeholder="Name" />
        <textarea required ref={typeRef} placeholder="Type" />
        <input ref={descriptionRef} placeholder="Description" />
        <button disabled={state.loading} type="submit">
          Save Component
        </button>
      </form>
    </div>
  );
}

export default CreateComponentForm;
