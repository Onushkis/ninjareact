/** @jsxImportSource @emotion/react */

import { jsx, css, useTheme } from "@emotion/react";

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = (props) => {
  const theme = useTheme();
  const styles = css`
  .heading {
    font-size: 20px;
    color: ${theme.colors.primary};
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
  `;
  const { error, isPending, data: blogs } = useFetch('http://localhost:3000/blogs')

  return (
    <div css={styles}>
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
    </div>
  );
}
 
export default Home;