import styled from 'styled-components/macro';

export const Container = styled.section`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 1160px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 960px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 740px;
  }
`;
