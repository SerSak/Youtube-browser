import React from 'react'



class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    

    onFormSubmit(e) {
        e.preventDefault();

        this.props.onTermSubmit(this.state.searchTerm)
    };



    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">

                    <div className="field">

                        <label>Youtube Search</label>
                        <input type="text" value={this.state.searchTerm} onChange={e => this.setState({ searchTerm: e.target.value })} />

                    </div>

                </form>
            </div>
        );
    };

};



export default SearchBar;