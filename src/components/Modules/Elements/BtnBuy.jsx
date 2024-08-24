const BtnBuy = ({ py = "py-1", tsz = "text-sm" }) => {
  return (
    <button
      className={`${py} ${tsz} px-5 rounded-3xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all`}
    >
      Beli iPhone
    </button>
  );
};

export default BtnBuy;
