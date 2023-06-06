import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 10px 0;
  min-width: 100px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.alto};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.alto};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  padding: 20px;
  margin: 0;
`;

export const SectionBody = styled.div`
  padding: 20px;
`;
