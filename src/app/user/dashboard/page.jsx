import { redirect } from "next/navigation";
import { auth } from "@/services/auth";

const Page = async () => {
  const session = await auth();

  if (!session) return redirect("/");

  return (
    <div className="">
      <h3>Halaman Dashboard</h3>
      <h1>Hallo {session.user.name}</h1>
    </div>
  );
};

export default Page;
