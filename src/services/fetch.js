export const getAnime = async (request) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${request}`
  );
  return await response.json();
};

export const getNestedAnime = async (request, objectProperty) => {
  const response = await getAnime(request);
  return response.data.flatMap((item) => item[objectProperty]);
};

export const reproduce = (data, gap) => {
  const selected = new Set();
  while (selected.size < gap) {
    const first = ~~(Math.random() * data.length);
    selected.add(data[first]);
  }
  return Array.from(selected);
};
