import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'

class BooksApp extends React.Component {
  state= {
    books: [],
    searchResults: []
  }

  componentDidMount() {
    this.getShelfBooks();
  }

  getShelfBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  //Call to move books between shelves
  updateBookShelf= (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getShelfBooks();
    }
    )
  }

  searchBooks= (query, maxResults) => {

    // API does not like empty query (returns 403) so avoid the call
    if(!query){
      this.setState({
        searchResults: []
      });
      return;
    }

    BooksAPI.search(query, maxResults).then((searchResults) => {

      // If there is an error, the response looks like: { error: 'msg', items: []}
      // if no errors, the response is an array of books
      let error = !searchResults || searchResults.error;
      let items = error || !searchResults.length ? [] : searchResults;

      this.setState(
        {
          searchResults: items
        }
      )
    })
  }

  render() {
    return (
      <div>
          <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.books}
              updateBookShelf={this.updateBookShelf}
            />
          )} />
          <Route path='/search' render={() => (
            <Search
              allBooks={this.state.books}
              searchBooks= {this.searchBooks}
              searchResults= {this.state.searchResults}
              updateBookShelf= {this.updateBookShelf}
            />
          )} />
    
      </div>
    )
  }
}

export default BooksApp
