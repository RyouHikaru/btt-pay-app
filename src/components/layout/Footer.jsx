import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-stone-200 text-sm p-5">
      <h3>Copyright &copy; 2022 BTT. All rights reserved.</h3>
      <section className="flex justify-between gap-5">
        <span className="hover:opacity-75">
          <Link to="/service-agreement">Service Agreement</Link>
        </span>
        <span className="hover:opacity-75">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
