export const getAnime = async (request) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${request}`
  );
  return await response.json();
};
