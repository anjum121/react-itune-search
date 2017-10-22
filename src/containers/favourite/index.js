import React, {Component} from 'react';
import store from "../../store/Store";

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {search, removeFavourite} from '../../modules/reducer'
import ArtistsCard from "../../components/cards/artists/ArtistsCard";

import './index.css'
import NoResults from "../../components/no-results/No-results";

const title = "My Favourite";
class Favourite extends Component {


    constructor(props) {

        super(props);
        this.state = {
            items: []
        };
        this.filterList = this.filterList.bind(this);

    }

    checkIsItFavourite(item, _this) {

        for (let i = 0; i < item.props.data.length; i++) {
            if (item.state.items[i].trackId === _this.trackId) {
                item.state.items.splice(i, 1);
                break;
            }
        }
        return item.props.removeFavourite(_this)
    }


    filterList(event) {
        let updatedList = store.getState().search.favourite;
        updatedList = updatedList.filter(function (item) {
            return item.artistName.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }

    componentWillMount() {
        this.setState({items: store.getState().search.favourite})
    }

    render() {
        return (
            <div className="mainBody">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="favourite">

                                <div className="search-holder">
                                    <div className="search-bar">
                                        <input type="text" placeholder="Search" onChange={this.filterList}/>
                                    </div>
                                </div>

                                <h2>{title}</h2>


                                {this.state.items <= 0 ? ( <NoResults/>) : null}
                                <div className="card-holder">
                                    {this.state.items.map((item, index) => {
                                        return <ArtistsCard key={index} data={item}
                                                            checkIsItFavourite={this.checkIsItFavourite.bind(item, this)}/>

                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const
    mapStateToProps = state => ({
        data: state.search.favourite,
        value: state.value
    });


const
    mapDispatchToProps = dispatch => bindActionCreators({
        search,
        removeFavourite
    }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Favourite)