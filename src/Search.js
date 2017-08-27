import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class Search extends Component {
    static propTypes = {
        searchBooks: PropTypes.func.isRequired,
        searchResults: PropTypes.array,
        updateBookShelf: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.searchChange = this.searchChange.bind(this);
    }

    searchChange = (e) => {
        e.preventDefault();
        let val = e.target.value;
        this.props.searchBooks(val, 80);
    }

    render() {
        let items = this.props.searchResults;

        return (
            <div>
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search"
                    >My Book Shelf</Link>
                    <input type="text" placeholder="Search Books" onChange={this.searchChange} />
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {items && items.map((book) => (
                            <li key={book.id} >
                                <Book book={book} updateBookShelf={this.props.updateBookShelf} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search