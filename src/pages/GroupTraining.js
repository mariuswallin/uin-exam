import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { getPage } from '../utils/pageService';

const GroupTraining = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const slug = pathname.split('/');
        const page = await getPage(slug[1] || '');
        setData(page);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, [pathname]);

  if (loading) return <p>Loading ...</p>;
  if (!data && error) return <p>{error?.message}</p>;
  return (
    <>
      <Hero
        title={data?.hero?.title}
        text={data?.hero?.text}
        img={data?.hero?.img?.asset?.url}
        links={data?.hero?.links}
      />
      <Container>
        <Title title={data?.title} />
        <Lead lead={data?.lead} />
        <Cards>
          {data?.cards?.length > 0 &&
            data.cards.map((card) => <Card key={card._key} {...card} />)}
        </Cards>
      </Container>
    </>
  );
};

export default GroupTraining;
