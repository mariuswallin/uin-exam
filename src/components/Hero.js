import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledHero = styled.section`
  display: flex;
  min-height: 33vh;
  background-color: ${({ theme }) => theme.nav.background};
`;

const StyledAside = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 33%;
  padding: 4rem;
  color: #fff;
  & h2 {
    font-weight: 900;
    margin-bottom: 1.2rem;
  }
  & p {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 20px;
  }
`;

const StyledImageWrapper = styled.div`
  flex: 1;
  & img {
    max-width: 100%;
    width: 100%;
    max-height: 366px;
    object-fit: cover;
  }
`;

const StyledHeroLinkWrapper = styled.ul`
  display: flex;
  color: #fff;
  a:last-of-type {
    margin-left: 1rem;
    background-color: #fff;
    color: #fa5333;
  }
`;

const StyledHeroLink = styled(Link)`
  border: 1px solid #fff;
  padding: 1rem 1.2rem;
  color: #fff;
  font-weight: 900;
  font-size: 1.4rem;
  text-align: center;
  text-decoration: none;
  border-color: #fa5333;
  background-color: #fa5333;
`;

const Hero = ({ title, text, img, links }) => (
  <StyledHero>
    <StyledAside>
      <h2>{title}</h2>
      <p>{text}</p>
      <StyledHeroLinkWrapper>
        {links?.length > 0 &&
          links.map((link) => (
            <StyledHeroLink to={link.href} key={link.name}>
              {link.name}
            </StyledHeroLink>
          ))}
      </StyledHeroLinkWrapper>
    </StyledAside>
    <StyledImageWrapper>
      <img src={img} alt="" />
    </StyledImageWrapper>
  </StyledHero>
);

export default Hero;
