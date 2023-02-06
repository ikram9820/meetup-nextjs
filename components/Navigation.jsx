import Link from "next/link";
import NavItem from "./NavItem";
import { useContext } from "react";
import FavoriteContext from "../store/FavoriteStore";

function Navigation(props) {
  const favoriteMeetupCtx = useContext(FavoriteContext);


  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg bg-body-secondary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/meetups">
            Meetups
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem path={"/meetups"} title={"All Meetups"} />
              <NavItem path={"/new-meetup"} title={"Add Meetups"} />
              <NavItem path={"/favorites"} title={"Favorites"} >
              <span className="badge bg-secondary mx-2">{favoriteMeetupCtx.favoriteMeetupsCount}</span>
              </NavItem>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <div>{props.children}</div>
    </>
  );
}

export default Navigation;
