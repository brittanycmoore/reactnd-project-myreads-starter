import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    render() {
        let book = this.props.book;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => { this.props.updateBookShelf(book, e.target.value); }}
                            defaultValue={book.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.map((author) => {
                    return (
                        <span key={author} className="author-name"> {author}</span>
                    )
                })}</div>
            </div>
        )
    }



}

export default Book