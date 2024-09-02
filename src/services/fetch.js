export const getAnime = async (request) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${request}`
  );
  return await response.json();
};

export const getNestedAnime = async (request) => {
  const response = await getAnime(request);
  return response.data.flatMap((item) => item.entry);
};
