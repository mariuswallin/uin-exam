import styled from 'styled-components/macro';

/**
 * Her er en enkel Styled Component som jeg ønsker å bruke mange steder.
 * Derfor eksporteres den herfra
 * Når vi bruker export const Navn så må den importeres med import {Navn} from 'filepath'
 */

export const Container = styled.section`
  background-color: pink;
`;
