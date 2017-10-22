import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {search, addToFavourite, removeFavourite} from '../../modules/reducer'
import SearchBar from "../../components/search-bar/index";
import Filter from "../../components/filter/filter";
import NoResults from "../../components/no-results/No-results";

class Home extends Component {

    checkIsItFavourite(item, _this) {
        return _this.isFavourite ? item.props.addToFavourite(_this) : item.props.removeFavourite(_this)
    }

    render() {
        return ( <div className="mainBody">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <SearchBar onSearchSubmit={this.props.search}/>
                            {this.props.data <= 0 ? ( <NoResults/>) : null}
                            <Filter data={this.props.data}
                                    checkIsItFavourite={this.checkIsItFavourite.bind(this.props, this)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    data: state.search.data
});


const mapDispatchToProps = dispatch => bindActionCreators({
    search,
    addToFavourite,
    removeFavourite

}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)