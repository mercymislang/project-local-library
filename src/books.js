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
  const { borrows } = book; // set array of borrows to equal book
  let borrowers = borrows.map(({ id, returned }) => {
    // map to return array new array consisting of id, returned
    const account = accounts.find((account) => account.id === id); //find account id that matches given id
    return { ...account, returned };
  });
  borrowers.sort((borrowerA, borrowerB) => borrowerA - borrowerB); //sort new array
  return borrowers.slice(0, 10); // slice used to set to return first 10 borrowers
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
