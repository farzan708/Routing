const books = [
  {
    name: "اثر مرکب",
    number: 21,
    amount: "50000",
    due: "1401/01/12",
  },
  {
    name: "دنیای صوفی",
    number: 22,
    amount: "10000",
    due: "1401/01/22",
  },
  {
    name: "من او",
    number: 23,
    amount: "45000",
    due: "1401/01/03",
  },
  {
    name: "آسمان آبی",
    number: 24,
    amount: "55000",
    due: "1401/01/18",
  },
  {
    name: "آیین زندگی ",
    number: 25,
    amount: "12000",
    due: "1401/01/19",
  },
];
// export function getBooks()
// {
//     return books;
// }

export const getBooks = () => {
  return books;
};

export const getBook = (number) => {
  return books.find(book => book.number === number);
};
