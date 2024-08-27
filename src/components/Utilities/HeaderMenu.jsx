const Header = ({ title }) => {
  return (
    <h1 className="text-lg md:text-2xl font-bold text-textSecondary text-center my-5 capitalize">
      {title}
    </h1>
  );
};

export default Header;
