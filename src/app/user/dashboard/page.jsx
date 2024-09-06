import { auth } from "@/services/auth";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const session = await auth();

  return (
    <div className="flex justify-center flex-col items-center">
      <h3 className="text-lg text-textSecondary font-bold capitalize text-center mt-4">
        wellcome, {session?.user?.name}
      </h3>
      <Image
        src={session?.user?.image}
        width={100}
        height={100}
        alt={session?.user?.name}
        className="rounded-full mt-2"
      />
      <div className="flex gap-4 text-xs mt-2">
        <Link
          href={"/user/dashboard/collection"}
          className="px-4 py-2 bg-primary text-textSecondary rounded-md hover:opacity-70 transition-all ease-in-out"
        >
          My Collection
        </Link>
        <Link
          href={"/user/dashboard/comment"}
          className="px-4 py-2 bg-primary text-textSecondary rounded-md hover:opacity-70 transition-all ease-in-out"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
