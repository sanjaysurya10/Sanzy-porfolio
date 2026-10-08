export default function Footer(): JSX.Element {
  return (
    <footer className="bg-transparent-gradient py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto"><div className="small m-0">Copyright &copy; Sanzy 2024</div></div>
          <div className="col-auto">
            <a className="small" href="#!">Privacy</a>
            <span className="mx-1">&middot;</span>
            <a className="small" href="#!">Terms</a>
            <span className="mx-1">&middot;</span>
            <a className="small" href="#!">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
