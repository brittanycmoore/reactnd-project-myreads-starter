import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'


class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    render() {

        const books = this.props.books;
        const currentlyReading = this.props.books.filter((book => book.shelf === 'currentlyReading'));
        const wantToRead = this.props.books.filter((book => book.shelf === 'wantToRead'));
        const read = this.props.books.filter((book => book.shelf === 'read'));
        
        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Link
                    to='/search'
                    className='open-search'
                >Search to Add Books</Link>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentlyReading.map((book) => (
                                        <li key={book.id} >
                                            <Book book={book} updateBookShelf={this.props.updateBookShelf} />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToRead.map((book) => (
                                        <li key={book.id} >
                                            <Book book={book} updateBookShelf={this.props.updateBookShelf} />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {read.map((book) => (
                                        <li key={book.id} >
                                            <Book book={book} updateBookShelf={this.props.updateBookShelf} />
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