function Layout(props) {
  return (
    <div className="row">
      <div className="col-3" />
      <div className="col-sm-6">{props.children}</div>
      <div className="col-3" />
    </div>
  );
}

export default Layout;
