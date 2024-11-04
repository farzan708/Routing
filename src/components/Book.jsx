import { useParams } from "react-router-dom";
import { getBook } from "../data/data";

const Book = () => {

  const params = useParams();
  const book = getBook(parseInt(params.bookId));


  return (
    <main style={{ padding: "1rem" }}>
      <h2>کتاب با شناسه :{params.bookId}</h2>
      {book.name}
      <p>نام کتاب : {book.name}</p>
      <p>قیمت کتاب : {book.amount}</p>
      <p>سال انتشار : {book.due}</p>
      <button>حذف</button>
    </main>
  );
};
export default Book;
