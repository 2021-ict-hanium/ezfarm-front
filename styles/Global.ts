import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html,
  body {
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

  @keyframes login-page-line {
        from {
            left: -330px;
        }
        to {
            left: 0;
        }
    }
    @keyframes login-page-circle {
        from {
            left: 0px;
        }
        to {
            left: 320px;
        }
    }
    @keyframes navigation-tap {
      from {
        left: -184px;
        }
        to {
          left: 34px;
        }
    }
    @keyframes animation-opacity {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export default Global;
