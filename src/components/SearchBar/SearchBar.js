import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    }

    handleSubmit = (event) => {
        const { onSearchSubmit } = this.props
        const { searchTerm } = this.state

        event.preventDefault();
        onSearchSubmit(searchTerm)
    }

    handleChange = (searchTerm) => this.setState({ searchTerm })

    render() {
        return (
            <div className="container ">
                <form className="input-group mb-3" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="search" required className="form-control" minLength="3" value={this.state.searchTerm} onChange={event => { this.handleChange(event.target.value) }} />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-outline-secondary">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;