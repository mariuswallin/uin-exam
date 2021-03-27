import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { getPage } from '../utils/pageService';

// const dummyCards = [
//   {
//     _key: 1,
//     img: {
//       asset: {
//         url:
//           'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80',
//       },
//       alt: 'Bilde av person',
//     },
//     title: 'Online trening',
//     text: 'Tren når og hvor du vil - tilgang til huderevis av timer!',
//     link: [
//       {
//         _key: 1,
//         href: 'online-training',
//         name: 'Se timene',
//       },
//     ],
//   },
//   {
//     _key: 2,
//     img: {
//       asset: {
//         url:
//           'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//       },
//       alt: 'Bilde av person',
//     },
//     title: 'Gruppetrening',
//     text: 'Effektiv og morsom trening!',
//     link: [
//       {
//         _key: 1,
//         href: 'gruppetrening',
//         name: 'Se utvalget',
//       },
//     ],
//   },
// ];

const Trainings = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const page = await getPage('trening');
        setData(page);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (!data && error) return <p>{error?.message}</p>;

  return (
    <Container>
      <Title title={data?.title} />
      <Lead lead={data?.lead} />
      <Cards>
        {data?.cards?.length > 0 &&
          data.cards.map((card) => <Card key={card._key} {...card} />)}
      </Cards>
    </Container>
  );
};

export default Trainings;
