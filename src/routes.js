const handlers = require("./handlers");

const routes = [{
        method: "GET",
        path: "/books",
        handler: handlers.getBooks,
    },
    {
        method: "GET",
        path: "/books/{bookId}",
        handler: handlers.getBookById,
    },
    {
        method: "POST",
        path: "/books",
        handler: handlers.addBook,
    },
    {
        method: "PUT",
        path: "/books/{bookId}",
        handler: handlers.editBook,
    },
    {
        method: "DELETE",
        path: "/books/{bookId}",
        handler: handlers.deleteBook,
    },
];

module.exports = routes;