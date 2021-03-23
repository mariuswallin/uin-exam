import Routes from './routes/Routes';
import Theme from './styles/Theme';

/**
 * Importerer Routes her da den "styrer" hele applikasjonen
 * Hvis du bruker Styled Components kan du også beholde Theme her (se inne i /styles/Theme.js)
 */

function App() {
  return (
    <Theme>
      <Routes />
    </Theme>
  );
}

export default App;
