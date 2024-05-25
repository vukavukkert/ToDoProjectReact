interface Props {
  onClick: () => void;
  children?: string;
  type?: "createButton" | "clearButton";
}
const Button = ({ onClick, children, type }: Props) => {
  return (
    <button id={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
