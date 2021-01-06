import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.background};
  }
  h1{
    color: ${({ theme }) => theme.header};
  }
  .title {
    color: ${({ theme }) => theme.header};
  }

  // Button themes
  .project-card-button {
    border: 1px solid ${({ theme }) => theme.body};
    position: relative;
    flex-wrap: wrap;
    padding: 10px;
    margin-right: 10px;
    display: inline-block;
    text-align: center;
    transition: 0.5s;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.background};
    &:hover {
        color: ${({ theme }) => theme.background};
        background-color: ${({ theme }) => theme.body};
        box-shadow: inset 300px 0 1px 0 ${({ theme }) => theme.body};
    }
  `;
