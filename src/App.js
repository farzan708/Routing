import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>کتابخانه من </h1>
      <nav style={{ borderBottom: "solid 1px", padding: "1rem" }}>
        <Link to="/books">کتاب ها</Link>
        <Link to="/about">درباره ما</Link>
      </nav>
      {/* اگر فرزند داشته باشیم نشان دهد  */}
      <Outlet/>
    </div>
  );
}

export default App;
