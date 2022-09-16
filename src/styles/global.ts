import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F0F2F5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
}

*{
    margin: 0;
    padding: 0;
}

body{
    background: var(--background);
}

html{
    @media (max-width: 1080px) {
        font-size: 93,75%;
    }

    @media (max-width: 720px) {
    font-size: 83,5%;
    }
}

button{
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

button, body, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h6, h5, h4, h3, h2, h1{
    font-weight: 400;
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; //Ocupar tudo

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}
`;
