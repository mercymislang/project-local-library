function findAuthorById(authors, id) {
  var locateAuthor = authors.find((author) => author.id === id); // finds author matching searched id
  return locateAuthor; //return author matching id
}

function findBookById(books, id) {
  var locateBook = books.find((book) => book.id === id); // finds book matching searched id
  return locateBook; //returns book matching id
}

function partitionBooksByBorrowedStatus(books) {
     let returnedBooks = books.filter((book) =>  // filter thru books array to get new array that meets condition 
  book.borrows.every((borrow) => borrow.returned === true)  // condition checking if book turned in
);
 const borrowedBooks= books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let booksBorrowed = books.filter((book) => //added use of helper function some() to filter method
  book.borrows.some((borrow) => borrow.returned === false) //checks if condition is true within borrow array
 );
 var newBookArray = [[...booksBorrowed], [...returnedBooks]];
 return newBookArray;
}

function getBorrowersForBook(book, accounts) {
   let borrowed= book.borrows.map((borrow) => { // declared borrowed use map() for books.borrow
    let accountInfo = findAuthorById(accounts, borrow.id); //added findAuthorById as helper function to declare accountInfo variable
      accountInfo.returned = borrow.returned; 
  return accountInfo; // returns accountINFO if borrowed books returned
  }).slice(0, 10); // / slice used to list 10 borrowers
return borrowed; // return list of borrowed books
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
