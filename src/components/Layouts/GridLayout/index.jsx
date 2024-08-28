const GridLayout = ({ children }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 m-2">
      {children}
    </section>
  );
};

export default GridLayout;
