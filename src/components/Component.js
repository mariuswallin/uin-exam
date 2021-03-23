import styled from 'styled-components/macro';
import { Container } from '../styles/Styles';

/**
 * Her er en enkel komponent som tar i mot en prop kalt myProp
 * Den bruker en Global Styled Component jeg har laget som heter Container
 * Den har også en "lokal" Styled Component som gir <h1> stiler
 * Komponenten håndterer et enkelt event når vi trykker på en knapp
 */

const CustomH1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const Component = ({ myProp }) => {
  const handleEvent = () => {
    console.log('Event handled');
  };
  return (
    <>
      <Container>
        <CustomH1>
          Komponent som tar i mot en prop som heter myProp. Den får nå en verdi{' '}
          {myProp} fra App.js.
        </CustomH1>
        <p>
          Komponenten bruker en global Styled Component (Container) fra mappen
          styles.
        </p>
        <p>Komponenten bruker en lokal Styled Component (CustomH1)</p>
        <p>Komponenten håndterer et enkelt klikk-event.</p>
        <button type="button" onClick={handleEvent}>
          Klikk meg
        </button>
      </Container>
    </>
  );
};

export default Component;
