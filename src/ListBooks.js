import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {

        const books = this.props.books;
        const currentlyReading = this.props.books.filter((book => book.shelf === 'currentlyReading'));
        const wantToRead = this.props.books.filter((book => book.shelf === 'wantToRead'));
        const read = this.props.books.filter((book => book.shelf === 'read'));
        console.log(books);
        //book shelves
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                {/* Component for a shelf? */}
                                <ol className="books-grid">
                                    {currentlyReading.map((book) => (
                                        <li key={book.id} >
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>

                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                            <ol className="books-grid">
                                    {wantToRead.map((book) => (
                                        <li key={book.id} >
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>

                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                            <ol className="books-grid">
                                    {read.map((book) => (
                                        <li key={book.id} >
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>

                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ListBooks