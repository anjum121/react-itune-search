import React, {Component} from 'react';
import './index.css'


let placeholderText = "Search iTune Music";
let items = ['all', 'movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm'];


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            isAboutVisible: false,
            selectedTab: 0,
            searchedTerm: ''
        };

        this.onEnterPress = this.onEnterPress.bind(this);
    }

    onSortClicked(id, e) {
        e.preventDefault();
        this.setState({selectedTab: id});
        let temp = '?term=' + this.state.searchedTerm + '&media=' + e.target.parentElement.textContent
        return this.props.onSearchSubmit(temp)
    }


    onEnterPress(e) {
        if (e.keyCode === 13) {
            this.setState({
                searchedTerm: e.target.value
            })
            return this.props.onSearchSubmit('?term=' + e.target.value)
        }
    }


    render() {
        return (
            <div className="search-holder">
                <div className="search-bar">
                    <input type="text" id="searchInput"
                           placeholder={placeholderText}
                           onKeyDown={this.onEnterPress.bind(this)}/>
                </div>

                <ul className="sorter">
                    {items.map((item, id) => {
                        return <li key={id}>
                            <a href=""
                               className={(this.state.selectedTab === id ? 'active' : '')}
                               name={item}
                               onClick={this.onSortClicked.bind(this, id)}>{item}
                            </a>
                        </li>
                    })}
                </ul>


            </div>

        );
    }
}

export default SearchBar;