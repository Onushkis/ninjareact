/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";

const Author = (props) => {
  return ( <p css={styles}>{props.text}</p> );
}

const styles = css `
font-size: "20px";
  color: red;
  margin-bottom: "10px";
`;

export default Author;