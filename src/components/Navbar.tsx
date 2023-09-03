import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Tasks</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">

          <li><Link href="/new">New</Link></li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
