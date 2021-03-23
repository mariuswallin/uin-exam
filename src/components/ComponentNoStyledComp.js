/**
 * Her er en enkel komponent som tar i mot en prop kalt myProp
 * Komponenten håndterer et enkelt event når vi trykker på en knapp
 */

const ComponentNoStyledComp = ({ myProp }) => {
  const handleEvent = () => {
    console.log('Event handled');
  };
  return (
    <>
      <section>
        <h1>
          Komponent som tar i mot en prop som heter myProp. Den får nå en verdi{' '}
          {myProp} fra App.js.
        </h1>
        <p>Komponenten håndterer et enkelt klikk-event.</p>
        <button type="button" onClick={handleEvent}>
          Klikk meg
        </button>
      </section>
    </>
  );
};

export default ComponentNoStyledComp;
