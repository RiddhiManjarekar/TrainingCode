const bookLibrary={
    books:[
        {
            title:"b1",
            author:"a1",
            yearPublished:2021
        },
        {
            title:"b2",
            author:"a2",
            yearPublished:2022
        },
        {
            title:"b3",
            author:"a3",
            yearPublished:2023
        },
        {
            title:"b4",
            author:"a1",
            yearPublished:2024
        },
        {
            title:"b5",
            author:"a5",
            yearPublished:2025
        }
    ],

    addBook(book){
        this.books.push(book);
        return  this.books;
    },

    getBooksByAuthor(auth_name){
        return this.books.filter(
            book=>book.author === auth_name);
    },

    removeBook(title){
        this.books=this.books.filter(
            book=>book.title !== title);
        console.log(`Removed Book ${title}`);
         return this.books;
    },

    getAllBooks(){
        return this.books.map(book=>book.title);
    }
}

console.log(bookLibrary.addBook({title:"b6",author:"a6",yearPublished:2026}));
console.log(bookLibrary.removeBook("b2"));
console.log(bookLibrary.getBooksByAuthor("a3"));
console.log(bookLibrary.getAllBooks());