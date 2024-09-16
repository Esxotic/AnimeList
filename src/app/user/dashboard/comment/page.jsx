import Header from "@/components/Dashboard/Header";
import { auth } from "@/services/auth";
import { prisma } from "@/services/prisma";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const { user } = await auth();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section id="komentar">
      <Header title={"My Comments"} />
      {comments.length === 0 && (
        <div className="flex flex-col justify-center items-center h-screen absolute top-0 right-0 left-0 -z-50">
          <Image src={"/comment.svg"} width={200} height={250} className="" />
          <h1 className="text-textPrimary font-bold">Belum ada komentar</h1>
        </div>
      )}
      <div className="grid grid-cols-1 gap-2 max-h-screen overflow-y-scroll md:grid-cols-2 mx-4">
        {comments.map((item) => (
          <Link
            href={`/detail/${item.anime_mal_id}`}
            className="bg-primary p-4 rounded-md w-full"
          >
            <h1 className="text-textSecondary font-bold text-md md:text-lg">
              {item.username}
            </h1>
            <div className="flex my-1">
              {Array.from({ length: item.rating }, (_, index) => (
                <Star key={index} size={12} color="#94a3b8" weight="fill" />
              ))}
            </div>
            <h2 className="text-secondary font-semibold text-xs md:text-sm">
              {item.anime_title}
            </h2>
            <p className="text-textPrimary text-sm">{item.comment}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
