const BtnBuy = ({
  py = "py-1",
  tsz = "text-sm",
  hbg = "hover:bg-blue-500",
  brc = "border-blue-500",
  tc = "text-blue-500",
  dsp = "block",
  result = "Beli",
}) => {
  return (
    <button
      className={`${py} ${tsz} ${hbg} ${brc} ${tc} ${dsp} px-5 rounded-3xl border-2 hover:text-white transition-all`}
    >
      {result}
    </button>
  );
};

export default BtnBuy;
