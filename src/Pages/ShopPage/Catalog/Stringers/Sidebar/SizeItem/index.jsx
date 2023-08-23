export const SizeItem = ({ mainSize, selectedSize, onSelect }) => (
  <label
    key={mainSize}
    className={`container flex items-center gap-x-2 pl-8 ${
      selectedSize === mainSize ? "text-[#181818]" : "text-[#ABABAB]"
    }`}
  >
    <input
      type="checkbox"
      id={mainSize}
      checked={selectedSize === mainSize}
      onChange={() => onSelect(mainSize)}
    />
    <div className="checkmark"></div>
    <p className="text-base">{mainSize}</p>
  </label>
);
