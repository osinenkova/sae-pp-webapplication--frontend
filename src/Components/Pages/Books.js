import React from 'react';
import apiClient from '../../Services/api';

const Books = (props) => {
    const [books, setBooks] = React.useState([]);
    React.useEffect(() => {
        if (props.loggedIn) {
            apiClient.get('/api/book')
            .then(response => {
                setBooks(response.data)
            })
            .catch(error => console.error(error));
        }
    }, []);
    if (props.loggedIn) {
        const bookList = books.map((book) =>
        <div key={book.id}
            className="list-group-item"
        >
            <h5>{book.title}</h5>
            <small>{book.author}</small>
        </div>
    );
        return (
            <div className="list-group">{bookList}</div>
        );
    }
    return (
        <div className="alert alert-warning">You are not logged in.</div>
    );
};

export default Books;