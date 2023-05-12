import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    min-width: 100%;
`;

export const StyledButton = styled.button`
     padding: 10px;
    background: teal;
    color: white;
    border: none;
    transition: background 1s, transform 1s;

    @media (max-width: 767px) {
        min-height: 30px;
    }

    &:hover{
        background-color: rgb(0, 92, 92);
        transform: scale(1.05);
    }

    &:active{
     background-color: rgb(5, 167, 167);
    }
`;