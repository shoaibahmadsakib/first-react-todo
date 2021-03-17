import React from "react";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
function Functional(props) {
  return (
    <div className="list_item">
      <ol>
        <li>
          <h2>{props.text}</h2>
        </li>
      </ol>
      <button
        className="button_style_list"
        type="submit"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        <RemoveCircleIcon />
      </button>
    </div>
  );
}

export default Functional;
