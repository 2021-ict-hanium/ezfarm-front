import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html,
  body,
  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    color: #1c140d;
    }
  main {
    display:flex;
    width: 100%;
    min-height: calc(100vh - 80px);
    position: relative;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    letter-spacing: -1px;
    font-family: 'Noto Sans';
  }
  button {
    border: none;
    cursor: pointer;
  }
  input:focus,
  button:focus {
    outline: none;
  }

    @keyframes left-to-right-slide {
      from {
            left: -330px;
        }
        to {
            left: 0;
        }
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export default Global;
