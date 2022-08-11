const Calculation = (props) => {
  const { inputs } = props;
  console.log(inputs);
  const inputsCopy = [...inputs].join("");

  return (
    <div className="flex items-center text-end p-6 bg-white rounded h-24 relative overflow-hidden">
      <div className="absolute right-0 pr-4 " >
        <div className={inputsCopy.length > 14 ? (inputsCopy.length > 21 ? "text-[11px]" : "text-[24px]") : "text-[35px]"}>
          {inputs.join("")}
        </div>
      </div>
    </div>
  );
};

export default Calculation;
