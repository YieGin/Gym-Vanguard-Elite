export const ColorItem = ({ color, selectedColor, onSelect }) => (
  <label
    key={color}
    className={`container flex items-center gap-x-2 pl-8 ${
      selectedColor === color ? "text-[#181818]" : "text-[#ABABAB]"
    }`}
  >
    <input
      type="checkbox"
      id={color}
      checked={selectedColor === color}
      onChange={() => onSelect(color)}
    />
    <div className="checkmark"></div>
    <p className="text-base">{color}</p>
  </label>
);
