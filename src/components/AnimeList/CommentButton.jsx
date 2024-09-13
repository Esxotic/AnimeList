const CommentButton = () => {
  return (
    <>
      <textarea
        name="comment"
        id="comment"
        className="w-full h-16 rounded-sm text-primary text-xs p-2 focus:outline-none focus:ring-2 focus:ring-secondary transition-all md:h-32 md:text-sm"
        placeholder="Tulis komentar anda di sini!"
      ></textarea>
      <button className="bg-secondary text-textSecondary py-2 px-4 rounded-md w-fit text-xs font-semibold hover:opacity-70 transition-all ease-in-out md:text-sm">
        Posting
      </button>
    </>
  );
};

export default CommentButton;
