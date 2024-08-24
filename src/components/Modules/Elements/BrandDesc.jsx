const BrandDesc = ({ item, tsz = "text-2xl", tc = "text-black" }) => {
  return <p className={`${tsz} ${tc} whitespace-pre-wrap mt-1`}>{item.desc}</p>;
};

export default BrandDesc;
