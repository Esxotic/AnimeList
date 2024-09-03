export const getAnime = async (request) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${request}`
  );
  return await response.json();
};

export const getNestedAnime = async (request, objectProperty) => {
  const response = await getAnime(request);
  return response.data.flatMap(
    (item) => item[objectProperty]
  ); /* ini menggunakan [] karena kita mengakses object, jika kita menuliskan items.objectProperty nanti js mengira bahwa nama keynya adalah objectProperty */
};

/* ~~ artinya membulatkan angka ke bawah atau math.floor atau bitwise NOT ganda */
// ! referensi : https://chatgpt.com/share/8d9ac8a8-dd83-4f50-be03-985d535e6ae7
export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap));
  const last = first + gap;
  return data.slice(first, last);
};
