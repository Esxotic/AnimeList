import { auth, signIn, signOut } from "@/services/auth";
const AuthButton = async () => {
  const session = await auth();

  return (
    <>
      <form
        action={async () => {
          "use server";
          {
            if (!session?.user) {
              await signIn("google");
            } else {
              await signOut();
            }
          }
        }}
      >
        <button
          type="submit"
          className="bg-secondary text-xs px-2 py-1 rounded-md text-textSecondary font-semibold shadow-sm md:px-4 md:py-2 md:text-sm hover:opacity-70 transition-all ease-in-out"
        >
          {session?.user ? "Sign Out" : "SignIn with Google"}
        </button>
      </form>
    </>
  );
};

export default AuthButton;
