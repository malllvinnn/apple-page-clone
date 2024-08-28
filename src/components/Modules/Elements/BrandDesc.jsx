const BrandDesc = ({
  item,
  tsz = "text-xl sm:text-2xl",
  tc = "text-black",
}) => {
  return (
    <p className={`${tsz} ${tc} text-center whitespace-pre-wrap mt-1`}>
      {item.desc}
    </p>
  );
};

export default BrandDesc;
