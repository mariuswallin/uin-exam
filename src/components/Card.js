import styled from 'styled-components/macro';

const StyledArticle = styled.article`
  display: block;
  margin: 0;
  width: 100%;
  height: auto;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 0;
  position: relative;
`;

const StyledCardContent = styled.section`
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.nav.background};
  padding: 1rem;
  transition: all 300ms ease-in-out;
  &:hover {
    bottom: 0;
  }
`;

const StyledCardH2 = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 900;
`;

const StyledCardImage = styled.img`
  max-width: 100%;
`;

const StyledCardLink = styled.a`
  display: inline-block;
  text-align: center;
  padding: 0.6rem 0.9rem;
  color: #fff;
  border: 1px solid #fff;
  text-transform: none;
  font-weight: 900;
  padding: 0.5rem 1rem;
  min-width: 54px;
  text-transform: uppercase;
  text-decoration: none;
  font-style: italic;
  margin-top: 1.5rem;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: #fff;
    color: #333;
  }
`;

const StyledCardText = styled.p`
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: #fff;
`;

const Card = ({ img, title, text, link }) => (
  <StyledArticle>
    <StyledCardImage src={img?.asset?.url} alt={img?.alt} />
    <StyledCardContent>
      <StyledCardH2>{title}</StyledCardH2>
      <StyledCardText>{text}</StyledCardText>
      {link?.length > 0 &&
        link.map((l) => (
          <StyledCardLink key={l?._key} href={l?.href}>
            {l?.name}
          </StyledCardLink>
        ))}
    </StyledCardContent>
  </StyledArticle>
);
export default Card;
