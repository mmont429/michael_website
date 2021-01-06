import { createGlobalStyle } from "styled-components";

export const ButtonStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  .project-card-button {
    border: 1px solid $body-light;
    position: relative;
    flex-wrap: wrap;
    padding: 10px;
    margin-right: 10px;
    display: inline-block;
    text-align: center;
    transition: 0.5s;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.body};
    &:hover {
        color: ${({ theme }) => theme.body};
        background-color: ${({ theme }) => theme.background};
        box-shadow: inset 300px 0 1px 0 $body-light;
    }
  }
  `;
