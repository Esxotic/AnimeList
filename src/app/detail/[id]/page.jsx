import ReadMoreButton from "@/components/Utilities/ReadMore";
import { getAnime } from "@/services/fetch";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const { data } = await getAnime(`anime/${id}`);
  console.log(data);

  //   TODO: atur responsive desktop dan buat youtube player di luar page ini

  return (
    <div className="max-w-sm bg-primary mt-4 rounded-md p-4 mx-auto mb-10">
      <div className=" flex flex-col items-center">
        <h1 className="text-2xl text-center font-bold text-textPrimary mb-1">
          {data.title}
        </h1>
        <div className="max-w-full flex text-nowrap overflow-auto text-center">
          <h3 className="text-textSecondary font-semibold border border-secondary px-2 mb-2 text-xs">
            Rank: <br /> {data.rank}
          </h3>
          <h3 className="text-textSecondary font-semibold border border-secondary px-2 mb-2 text-xs">
            Score: <br />
            {data.score}
          </h3>
          <h3 className="text-textSecondary font-semibold border border-secondary px-2 mb-2 text-xs">
            Episode: <br />
            {data.episodes}
          </h3>
          <h3 className="text-textSecondary font-semibold border border-secondary px-2 mb-2 text-xs">
            Rating: <br />
            {data.rating}
          </h3>
          <h3 className="text-textSecondary font-semibold border border-secondary px-2 mb-2 text-xs">
            Durasi: <br /> {data.duration}
          </h3>
        </div>
        <Image
          src={data.images.webp.image_url}
          alt={data.title}
          width={150}
          height={200}
        ></Image>
      </div>
      <div className=" text-sm mt-2">
        <h1 className="text-textSecondary font-semibold">Sinopsis:</h1>
        <ReadMoreButton synopsis={data.synopsis} />
      </div>
    </div>
  );
};

export default Page;
