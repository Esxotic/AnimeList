import Image from "next/image";

const AnimeList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-indigo-500">
        <Image
          src="https://placehold.co/600x400/png"
          alt="..."
          width={600}
          height={400}
        />
        <h3>Judul Anime-nya di sini</h3>
      </div>
    </div>
  );
};

export default AnimeList;
