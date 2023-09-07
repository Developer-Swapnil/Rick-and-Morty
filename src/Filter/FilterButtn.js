import React from "react";
import { useDispatch } from "react-redux";
import { characterAction } from "../Reducers/Reducer";
const FilterBTN = ({ input, index, name }) => {
  const dispatch = useDispatch();

  const clickHandler = (input, name) => {
    console.log(name, input);
    dispatch(characterAction.statusReducer({ type: name, payload: input }));
    dispatch(characterAction.statusReducer({ type: "pageNumber", payload: 1 }));
  };
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            clickHandler(input, name);
          }}
          className="btn btn-outline-primary"
          for={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
