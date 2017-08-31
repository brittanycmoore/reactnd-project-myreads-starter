import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class Search extends Component {
    static propTypes = {
        allBooks: PropTypes.array,
        searchBooks: PropTypes.func.isRequired,
        searchResults: PropTypes.array,
        updateBookShelf: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.searchChange = this.searchChange.bind(this);
    }

    searchChange(e) {
        e.preventDefault();
        let val = e.target.value;
        this.props.searchBooks(val, 80);
    }

    render() {
        // convert books array to an ID lookup
        let bookLookup = this.props.allBooks.reduce( (dict, book) => {
            dict[book.id] = book;
            return dict;
        }, {});

        let items = !this.searchInput || !this.searchInput.value ? [] : this.props.searchResults.map((book)=> {
            var bookWithShelf = bookLookup[book.id];
            if(bookWithShelf){
                book.shelf = bookWithShelf.shelf;
            }
            return book;
        });

        return (
            <div>
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search"
                    >My Book Shelf</Link>
                    <input ref={(input) => this.searchInput = input} type="text" placeholder="Search Books" onChange={this.searchChange} />
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