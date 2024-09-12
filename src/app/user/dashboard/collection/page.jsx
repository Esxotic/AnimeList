import Header from "@/components/Dashboard/Header";
import { auth } from "@/services/auth";
import { prisma } from "@/services/prisma";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const { user } = await auth();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section id="collection">
      <Header title={"My collection"} />
      <div className="grid grid-cols-2 gap-4 justify-items-center px-4 mt-1 md:grid-cols-6">
        {collection.map(async (item, index) => {
          return (
            <Link
              key={index}
              href={`/detail/${item.anime_mal_id}`}
              className="max-w-48 h-full bg-primary p-4 rounded-md group hover:scale-105 transition-all ease-in-out md:max-w-full"
            >
              <Image
                src={item.anime_image_url}
                alt={item.anime_title}
                width={250}
                height={300}
                className="rounded-md cursor-pointer group-hover:scale-105 group-hover:opacity-70 transition-all ease-in-out"
              />
              <h1 className="text-xs text-textPrimary font-bold bg-primary p-2 text-center md:text-sm">
                {item.anime_title}
              </h1>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
