const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// object destructuring...
const book = getBook(2);

// const title = book.title;
// const author = book.author;

const {
  title,
  author,
  genres,
  pages,
  publicationDate,
  hasMovieAdaptation,
  translations,
} = book;
console.log(title, author);

//array destructuring

// const primaryGenre = genres[0];
// const secondryGenre = genres[1];

const [primaryGenre, secondryGenre, ...other] = genres; // [0,1,2,3...]
console.log(primaryGenre, secondryGenre, other);

//spread/Rest operator
const newGenres = [...genres, "lahiru"];
newGenres;

const updateBook = {
  ...book,
  moviePublicationDate: "2022/2/2", // adding a new property
  pages: 1210, //overriding existing property
};
updateBook;

//template literal
const exampl = `${title} is a ${pages}-pages book an it's published on ${
  publicationDate.split("-")[0]
}, the book has been ${hasMovieAdaptation ? "" : "not"} adapted as a movie}`;
console.log(exampl);

// ternary operators
const result =
  pages > 1000 ? "Pages greater than 1000" : "pages less than 1000";
console.log(result);

//arrow functions
const getDate = (d) => d.split("-")[0];
console.log(getDate(publicationDate));

//short circutting
console.log(hasMovieAdaptation && "this book has a movie"); // first val os true the second one return
console.log(false && "true");

//falsy values = false, 0, undefined, ''
console.log("lahiru" && "something"); // if first val true second val return
console.log(0 && "lahiru"); //if first val false first val return

const translationHave = translations.spanish || "Not have translation";
console.log(translationHave);

const count = book.reviews.librarything.reviewsCount ?? "no reviews"; //this will only return second value when there has null or undefined
count;

function getTotalReviewCount(book) {
  const goodReadCount = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingCount = book.reviews?.librarything?.reviewsCount ?? 0;
  librarythingCount;
  return goodReadCount + librarythingCount;
}

console.log(getTotalReviewCount(getBook(3)));
*/

/*
// array map method
const resultsArr = [12, 3, 4, 5, 6, 7, 8, 44].map((el) => el * 2);
resultsArr;

const books = getBooks();
const bookTitles = books.map((title) => title.title);
bookTitles;

const titleAndAuthor = books.map((book) => ({
  title: book.title,
  author: book.author,
})); // use paranthesis instead of using return
titleAndAuthor;

//array filter method
const longBooks = books
  .filter((books) => books.pages > 500)
  .filter((books) => books.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((books) => books.title);
adventureBooks;

const allPages = books.reduce((acc, books) => acc + books.pages, 0);
allPages;

//array sort method
const arr = [1, 2, 6, 3, 7, 45245, 8, 322, 6].sort((a, b) => a - b); // sort is a mutate method this sort original array
arr;

//if we want the sorting result do not effect the oroginal array we can use slice method
const array = [
  1, 2, 3553, 34, 2, 4, 5, 5, 63, 42, 14, 14, 13, 4, 14, 34, 14, 15, 1, 6, 6,
]
  .slice()
  .sort((a, b) => a - b);
array;

const sortedByPages = books
  .sort((a, b) => b.pages - a.pages)
  .map((r) => ({
    title: r.title,
    pages: r.pages,
  }));
sortedByPages;

//work with immutable array
const newBook = {
  id: 6,
  title: "Harry Potter",
  author: "J. K. Rowling",
};
const bookAfterAdd = [...books, newBook];
bookAfterAdd;

//deleting a book object from array
const deletedArray = bookAfterAdd
  .filter((book) => book.id !== 3)
  .map((a) => ({ id: a.id, title: a.title }));
deletedArray;

//update book
const updatedBook = bookAfterAdd
  .map((book) => (book.id === 3 ? { ...book, pages: 33333 } : book))
  .map((a) => ({
    title: a.title,
    id: a.id,
    pages: a.pages,
  }))
  .slice()
  .sort((a, b) => b.id - a.id); //decending order
updatedBook;

*/

/*
//promises
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
*/

//async await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  const filteredData = data
    .map((data) => ({
      id: data.id,
      title: data.title,
    }))
    .filter((a) => a.id > 2);
  console.log(filteredData);
}

getTodos();
