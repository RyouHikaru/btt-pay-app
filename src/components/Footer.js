const Footer = () => {
  return (
    <footer className="flex justify-between bg-stone-200 text-sm p-5">
      <h3>Copyright &copy; 2022 BTT. All rights reserved.</h3>
      <section className="flex justify-between gap-5">
        <a className="hover:opacity-75" href="#!">Service Agreement</a>
        <a className="hover:opacity-75" href="#!">Privacy Policy</a>
      </section>
    </footer>
  )
}

export default Footer;