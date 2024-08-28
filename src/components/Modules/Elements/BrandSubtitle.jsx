const BrandSubtitle = ({ item, tc }) => {
  return (
    <h3 className={`${tc} text-sm sm:text-lg font-bold`}>{item.series}</h3>
  );
};

export default BrandSubtitle;
