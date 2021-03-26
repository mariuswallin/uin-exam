import client from './client';

const pageFields = `
  title,
  'slug': slug.current,
  lead,
  'cards': cards[]{title, text, 'link': link[]{_key, name, href}, 'img': image{..., asset->{url}}}
`;

export const getPage = async (slug) => {
  const data = await client.fetch(
    `*[_type == "page" && slug.current == $slug]{${pageFields}}`,
    {
      slug,
    }
  );
  return data?.[0];
};
