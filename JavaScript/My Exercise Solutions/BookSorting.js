const books = [
    {
      title: "To Kill a Mockingbird",
      authorName: "Harper Lee",
      releaseYear: 1960,
    },
    {
      title: "1984",
      authorName: "George Orwell",
      releaseYear: 1949,
    },
    {
      title: "The Catcher in the Rye",
      authorName: "J.D. Salinger",
      releaseYear: 1950,
    },
    {
      title: "Pride and Prejudice",
      authorName: "Jane Austen",
      releaseYear: 1813,
    },
    {
      title: "The Great Gatsby",
      authorName: "F. Scott Fitzgerald",
      releaseYear: 1925,
    }
  ];
  
  const sortByYear = (book1, book2) => {
    if (book1.releaseYear < book2.releaseYear){
      return -1;
    } 
  
    else if (book1.releaseYear > book2.releaseYear){
      return 1;
    } 
  
    else{
      return 0;
    }
  };
  
  
  let filteredBooks = [
    {
      title: "To Kill a Mockingbird",
      authorName: "Harper Lee",
      releaseYear: 1960,
    },
    {
      title: "1984",
      authorName: "George Orwell",
      releaseYear: 1949,
    },
    {
      title: "The Catcher in the Rye",
      authorName: "J.D. Salinger",
      releaseYear: 1950,
    },
  ];
  
  let filteredBooksSorted = filteredBooks.sort(sortByYear);
  
  console.log(filteredBooksSorted);