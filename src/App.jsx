import Router from "./shared/Router";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

function App() {
  const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
      box-sizing: border-box;
    }
  `;
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
