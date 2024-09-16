import CommentButton from "@/components/AnimeList/CommentButton";
import CommentCard from "@/components/AnimeList/CommentCard";
import CollectionButton from "@/components/Utilities/CollectionButton";
import ReadMoreButton from "@/components/Utilities/ReadMore";
import { auth } from "@/services/auth";
import { getAnime } from "@/services/fetch";
import { prisma } from "@/services/prisma";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const { data } = await getAnime(`anime/${id}`);
  const session = await auth();
  const collection = await prisma.collection.findFirst({
    where: { user_email: session?.user?.email, anime_mal_id: id },
  });

  return (
    <div className="max-w-sm bg-primary mt-4 relative rounded-md p-4 mx-auto mb-10 md:max-w-6xl">
      <div className=" flex flex-col items-center">
        <h1 className="text-2xl text-center font-bold text-textPrimary mb-1">
          {data?.title} - {data.year}
        </h1>
        {!collection && session && (
          <CollectionButton
            anime_mal_id={id}
            user_email={session.user?.email}
            anime_image_url={data.images.webp.image_url}
            anime_title={data.title}
          />
        )}
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
      <div className=" text-sm my-2">
        <h1 className="text-textSecondary font-semibold">Sinopsis:</h1>
        <ReadMoreButton synopsis={data.synopsis} />
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <h1 className="text-textSecondary font-semibold">Komentar:</h1>
        <CommentCard anime_mal_id={id} />
        {session && (
          <CommentButton
            anime_mal_id={id}
            user_email={session?.user?.email}
            username={session?.user?.name}
            anime_title={data.title}
            video_id={data.trailer.youtube_id}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
