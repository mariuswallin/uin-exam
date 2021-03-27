import client from './client';

const pageFields = `
  'hero': hero{_key, title, text, 'links': links[]{_key, name, href}, 'img': image{..., asset->{url}}},
  title,
  'slug': slug.current,
  lead,
  'cards': cards[]{_key, title, text, 'link': link[]{_key, name, href}, 'img': image{..., asset->{url}}}
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
