function findAccountById(accounts, id) {
  var accountID = accounts.find((account) => account.id === id); //declared account ID as variable
  //used .find method for accounts, takes in account
  //search thru account to check in account.id matches given id
  return accountID; // return accoundID
}

function sortAccountsByLastName(accounts) {
  // used sort() takes nameA and nameB as arguments
  // function expression to sort names in alphabetical order based on last name
  accounts.sort((accountA, accountB) => {
    if (accountA.name.last > accountB.name.last) return 1; // accountB comes after accountA
    if (accountA.name.last < accountB.name.last) return -1; // accountA will be moved before accountB
    return 0; //no change in order of account names
  });
  return accounts; // return sorted account names
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((totalNum, book) => {
    //reduce to loop thru books and get a total for borrowed books
    const accountID = book.borrows.filter(
      (borrow) => borrow.id === account.id
    ).length;
    //set variable accID to equal to books borrowed matching account ID with filter
    return totalNum + accountID; //returns totalNum of books borrowed
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksCheckedOut = [];
  books.forEach((book) => {
    //goes thru each book in books array
    if (book.borrows.find((book) => book.id === account.id && !book.returned)) {
      //IF statement - check if book id matches account id && not returned
      booksCheckedOut.push(book); //adds book to list booksCheckedOut
    }
  });
  booksCheckedOut.forEach((book) => {
    let theAuthor = authors.find((author) => author.id === book.authorId); //find author ID of book checked out
    book["author"] = theAuthor; // include author info with books borrowed by an account
  });
  return booksCheckedOut; //returns books that have been checked out
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
