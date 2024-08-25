const BtnMore = ({
  py = "py-1",
  tsz = "text-sm",
  bg = "bg-blue-500",
  brc = "border-blue-500",
  tc = "text-white",
  result = "Selengkapnya",
}) => {
  return (
    <button
      className={`${py} ${tsz} ${bg} ${brc} ${tc} px-5 rounded-3xl border-2 transition-all hover:brightness-125`}
    >
      {result}
    </button>
  );
};

export default BtnMore;
