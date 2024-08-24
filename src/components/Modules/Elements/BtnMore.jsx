const BtnMore = ({ py = "py-1", tsz = "text-sm" }) => {
  return (
    <button
      className={`${py} ${tsz} bg-blue-500 px-5 rounded-3xl border-2 border-blue-500 transition-all`}
    >
      Selengkapnya
    </button>
  );
};

export default BtnMore;
