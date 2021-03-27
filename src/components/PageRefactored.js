import { usePage } from '../hooks/usePage';
import { Container } from '../styles/Styles';
import Card from './Card';
import Cards from './Cards';
import Hero from './Hero';
import Lead from './Lead';
import Title from './Title';

const PageRefactored = ({ url }) => {
  const { status, data } = usePage(url);

  if (status === 'loading') return <p>Loading ...</p>;
  if (status === 'error')
    return <p>Feil med henting av data {data?.message}</p>;

  return (
    <>
      {data?.hero && (
        <Hero
          title={data?.hero?.title}
          text={data?.hero?.text}
          img={data?.hero?.img?.asset?.url}
          links={data?.hero?.links}
        />
      )}
      <Container>
        <Title title={data?.title} />
        <Lead lead={data?.lead} />
        {data?.cards?.length > 0 && (
          <Cards>
            {data.cards.map((card) => (
              <Card key={card._key} {...card} />
            ))}
          </Cards>
        )}
      </Container>
    </>
  );
};

export default PageRefactored;
