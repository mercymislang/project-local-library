const { sortAccountsByLastName } = require("./accounts");

const getTotalBooksCount = (books) => {  // added use arrow function to count total 
  return books.length; // go thru length of array of books
}

var getTotalAccountsCount = (accounts) => {   // added use arrow function to count total 
  return accounts.length; // go thru length of array of accounts
}

function getBooksBorrowedCount(books) {
  var count = []; //declare variable count to return a number
  for (let i = 0; i < books.length; i++) {
    //for loop to go thru length of array for books
    if (books[i].borrows[0].returned !== true) count++; // IF condition to check status of borrowed books, if not true, increment count
  }
  return count; //returns total count of borrowed books
}

function getMostCommonGenres(books) {
  let mostCommonGenre = {}; //set variable to return array of mostCommonGenre
  books.forEach((book) => {
    //check if the object contains a key
    if (mostCommonGenre[book.genre]) {
      mostCommonGenre[book.genre]++; // if not, increment to counter
    } else {
      mostCommonGenre[book.genre] = 1; // else, set key and value to 1 if no genre
    }
  });
  return Object.entries(mostCommonGenre)
    .map(([name, count]) => {
      // new array with map, takes in name and count
      return {
        name, //returns name and count
        count,
      };
    })
    .sort((a, b) => b.count - a.count) // sort list
    .slice(0, 5); // list 5 or less representing  most to least common genre
}

function getMostPopularBooks(books) {
  const popBooks = books.reduce((account, book) => {
    // reduces the array into an object
    account[book.title] = { name: book.title, count: book.borrows.length }; // create a new object with a nested object with title and the borrow count
    return account; //returns count of popular books
  }, {});

  // get the values to sort
  var popBookVal = Object.values(popBooks); //focus on object.values of popular books
  return popBookVal.sort((a, b) => b.count - a.count).slice(0, 5); //sort books and return 5 or less of most to least popular books
}

function getMostPopularAuthors(books, authors) {
  const popAuthors = authors.reduce((account, author) => {
    //reduce authors to an array of its own
    var {
      name: { first, last },
      id,
    } = author; // nested object consisting of name and count
    account[id] = { name: `${first} ${last}`, count: 0 };
    books.forEach((book) => {
      // loops through each book and checks if the authorID matches account id
      if (book.authorId === id) account[id].count += book.borrows.length; //IF condition to check for matches w/ given id and author id, add number of times books have been borrowed to count
    });
    return account; //return count of number of times books have been borrowed
  }, {});

  const values = Object.values(popAuthors); // focus on values of popAuthors
  return values.sort((a, b) => b.count - a.count).slice(0, 5); // sort list and return 5 or less of popular authors
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
