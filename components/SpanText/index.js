const SpanText = ({text, spanClassName}) => {
  let formated = [...text];

  return (
    <>
      {formated.map((symbol, i) => {
        return (
          <span
            className={spanClassName !== undefined ? spanClassName : ''}
            key={i}
          >
            {symbol}
          </span>
        );
      })}
    </>
  );
};
export default SpanText;
