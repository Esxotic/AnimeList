import Link from "next/link";

const HeaderAnimeList = ({ title, linkHref, linkText }) => {
  return (
    <div className="flex justify-between text-textSecondary p-4">
      <h1 className="font-bold text-sm capitalize md:text-xl">{title}</h1>
      {linkHref && linkText ? (
        <Link
          href={linkHref}
          className="text-sm content-center hover:text-primary md:text-lg transition-all ease-in-out underline"
        >
          {linkText}...
        </Link>
      ) : null}
    </div>
  );
};

export default HeaderAnimeList;
