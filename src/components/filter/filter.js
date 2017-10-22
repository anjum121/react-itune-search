import React, {Component} from 'react';
import './filter.css';
import ArtistsCard from "../cards/artists/ArtistsCard";


class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        };

        this.checkIsItFavourite = this.props.checkIsItFavourite
    }

    checkIsItFavourite(item,obj){
        return this.props.checkIsItFavourite(item, obj)
    }

    render() {

        return (
            <div className="filter">
                <div className="Artists-holder">
                    {this.props.data ? (
                            this.props.data.map((item, index) => {
                                return <ArtistsCard key={index} data={item}
                                                    checkIsItFavourite={this.checkIsItFavourite.bind(this, item)}/>
                            })
                        ) :
                        null}
                </div>
            </div>
        );
    }
}

export default Filter;
