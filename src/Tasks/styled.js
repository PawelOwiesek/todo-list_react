import styled, { css } from "styled-components"

export const TasksList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    word-break: break-all;

    ${({ hidden }) => hidden && css`
    display:none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    cursor: pointer;
    transition: background 1s, transform 3s;
    transform-origin: right bottom;

    ${({ toggleDone }) => toggleDone && css`
    background-color: rgb(12, 131, 12);

        &:hover{
            background-color: rgb(15, 100, 15);
            transform: scale(1.05);
        }
    `}
    ${({ remove }) => remove && css`
    background-color: rgb(208, 3, 3);

        &:hover{
            background-color: rgb(136, 9, 9);
            transform: scale(1.05);
        }
    `}
`;