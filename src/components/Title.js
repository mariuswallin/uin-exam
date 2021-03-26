import styled from 'styled-components/macro';

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  outline: 1px solid transparent;
  margin-top: 4.2rem;
  margin-bottom: 3.2rem;
  font-weight: 900;
  line-height: 1.125;
  text-transform: uppercase;
  font-style: italic;
`;

const Title = ({ title }) => <StyledH1>{title}</StyledH1>;

export default Title;
