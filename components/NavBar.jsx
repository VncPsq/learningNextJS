export default function NavBar() {
  return (
    <nav className="flex p-3 flex-wrap justify-around mb-4">
      <h1 className="text-lg font-semibold">Todo APP</h1>
      <ul className="flex gap-10 text-md">
        {[
          ["Home", "/dashboard"],
          ["Products", "/products"],
          ["About", "/about"],
          ["Contact", "/contact"],
        ].map(([title, url]) => (
          <li key={`Navbar ${title}`}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
