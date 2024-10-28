import { useState } from "react";
import "./Button.css";
import Featch from "./Featch";

const Button = (props) => {
  const [place, setPlace] = useState("");

  const handelOnclick = (e) => {
    e.preventDefault();
    if (!props.area) return;
    setPlace(props.area);
  };

  return (
    <div>
      <button onClick={handelOnclick} className="btn">
        {props.btnName}
      </button>

      {place && <Featch area={place} update={props.update} />}
      {/* Only render Fetch when place is set */}
    </div>
  );
};

export default Button;
