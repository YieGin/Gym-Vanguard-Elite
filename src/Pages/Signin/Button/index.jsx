export const Button = ({ bgColor, icon, buttonText, Width }) => (
  <button type="submit" className={`button PC:w-[384px] ${Width}`}>
    <span className={`button_lg ${bgColor}`}>
      <span className="button_sl"></span>
      <div className="flex items-center">
        {icon}
        <span className="button_text text-center w-full">{buttonText}</span>
      </div>
    </span>
  </button>
);
