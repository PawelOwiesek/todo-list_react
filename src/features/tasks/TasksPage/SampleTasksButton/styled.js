import styled from "styled-components";

export const LoadingParagraph = styled.p`
  color: ${({ red }) => (red ? "red" : `${({ theme }) => theme.colors.teal}`)};
`;
