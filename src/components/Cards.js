import styled from 'styled-components/macro';

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Cards = ({ children }) => <StyledCards>{children}</StyledCards>;

export default Cards;
