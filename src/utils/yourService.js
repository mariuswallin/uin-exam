// Dette er en demo for måter å hente data på. 
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity

import client from './client';

const fields = `
  add_your_fields_here
`

const otherFields = `
  add_your_fields_here
`

const anotherFields = `
  add_your_fields_here
`

export const firstService = async () => {
  const data = await client.fetch(`*[_type == "ADD_YOUR_TYPE_HERE"]{${fields}}`);
  return data;
};

export const secondService = async () => {
  const data = await client.fetch(`*[_type == "ADD_YOUR_TYPE_HERE"]{${otherFields}}`);
  return data;
};

export const firstServiceWithParam = async (slug) => {
  const data = await client.fetch(`*[_type == "ADD_YOUR_TYPE_HERE"]{${anotherFields}}`, { slug });
  return data?.[0];
};