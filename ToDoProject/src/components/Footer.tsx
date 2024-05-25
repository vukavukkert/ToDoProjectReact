interface Props {
  children: string;
}
const Footer = ({ children }: Props) => {
  return (
    <>
      <div>
        <footer>
          <p>{children}</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
