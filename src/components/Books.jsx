import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";

import { getBooks } from "../data/data";

const Books = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const books = getBooks();

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderLeft: "solid 1px", padding: "1rem" }}>
        <input
          style={{ height: "30px" }}
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) setSearchparams({ filter });
            else setSearchparams({});
          }}
          placeholder="جستجوی کتاب"
        />
        {
          books.filter((book)=>{
            let filter=searchParams.get("filter");
            if(!filter) return true;
            let name = book.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());

          }).map((book) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/books/${book.number}`}
            key={book.number}
          >
            {book.name}
          </NavLink>
        ))}
      </nav>
      <Outlet></Outlet>
    </div>
  );
};
export default Books;
// <Link style={{display:'block'}} to={`/books/${book.number}`} key={book.number}>
//   {book.name}
// </Link>
