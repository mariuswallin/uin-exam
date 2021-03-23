// Hjelpefunksjon for å kunne hente ut bilder fra Sanity
import imageUrlBuilder from '@sanity/image-url';
import client from './client';

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);