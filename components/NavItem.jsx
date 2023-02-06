import Link from "next/link";
function NavItem({path,title,children}) {
  return (
    <li className="nav-item">
      <Link className="nav-link " aria-current="page" href={path}>
        {title}
        {children}
      </Link>
    </li>
  );
}

export default NavItem;