import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Global = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
    letter-spacing: -1px;
    color: #1c140d;
  }
  body{
    font-family: 'Noto Sans',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button,input,textarea{
    background-color: transparent;
    border: none;
    outline: none;
  }
  a,button{
    cursor: pointer;
  }

  ul{
    list-style: none;
  }
  img{
    display: block;
    width: 100%;
  }
  main{
    display: flex;
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
