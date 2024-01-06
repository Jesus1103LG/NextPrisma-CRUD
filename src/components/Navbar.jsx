import Link from "next/link";
function Navbar() {
  return (
    <nav className="bg-slate-800">
      <div className="container mx-auto flex justify-between items-center py-2">
        <Link href="/">
          <h3 className="font-bold text-2xl">Next CRUD</h3>
        </Link>
        <ul className="flex gap-10">
          <li>
            <Link href="/new">Create Task</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
