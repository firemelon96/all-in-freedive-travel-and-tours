// lib/actions/googleReviews.ts
'use server';

export async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.PLACE_ID;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch Google reviews');
  }

  const data = await res.json();

  return data.result.reviews || [];
}
