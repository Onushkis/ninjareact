/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import { useState } from "react/cjs/react.development";


const Heading = (props) => {
 const [stateColor, setStateColor] = useState('red');
  const styles = css`
    border: solid 1px red;
    .heading {
      font-size: "20px";
      color: ${stateColor};
      margin-bottom: "10px";
      cursor: pointer;
      &:hover {
        color: blue;
      }
    }
  `;
  return (
    <div css={styles}>
      <h2 className="heading" onClick={() => setStateColor(props.color)}>
          {props.text}
          
          </h2>
          </div>
  );
};

export default Heading;
