import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../styles/Styles';
import { getPage } from '../utils/pageService';
import Card from './Card';
import Cards from './Cards';
import Hero from './Hero';
import Lead from './Lead';
import Title from './Title';

const Page = ({ url }) => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const page = await getPage(url || slug);
        setData(page);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, [url, slug]);

  if (loading) return <p>Loading ...</p>;
  if (!data && error) return <p>{error?.message}</p>;

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
      </Container>
      {data?.cards?.length > 0 && (
        <Cards>
          {data.cards.map((card) => (
            <Card key={card._key} {...card} />
          ))}
        </Cards>
      )}
    </>
  );
};

export default Page;
