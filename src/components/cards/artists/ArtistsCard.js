import React, {Component} from 'react';
import './ArtistsCard.css';
import moment from 'moment';

class ArtistsCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFavourite: this.props.data.isFavourite,
            isPreviewVisible: false,
            isPlaying:false
        };
    }


    playVideo() {
        this.setState({
            isPreviewVisible: !this.state.isPreviewVisible,
            isPlaying: !this.state.isPlaying
        });

        let audios = document.getElementsByTagName('audio');
        for (let i = 0, len = audios.length; i < len; i++) {
            // if(audios[i] != e.target){
            audios[i].pause();
            //}
        }
    }

    addToFavourite(obj, item) {

        this.setState({
            isFavourite: !this.state.isFavourite
        });

        if (this.props.data.isFavourite === undefined || this.props.data.isFavourite !== true) {
            this.props.data.isFavourite = true;
        }else{
            this.props.data.isFavourite = false;
        }

        return this.props.checkIsItFavourite(obj, item)
    }


    render() {

        const imageUrl = this.props.data.artworkUrl100;
        const formattedDate = moment(this.props.data.releaseDate).format('DD MMM YY');

        return (
            <div className="artists-card">
                <div className="artists-holder">
                    <div className="poster-holder">
                        <div className={"image-poster " + (this.state.isPreviewVisible ? 'artists-preview-show' : '')}
                             style={{backgroundImage: `url(${imageUrl})`}}>
                            <div className="artists-preview" onClick={this.playVideo.bind(this)}>

                                {(this.state.isPlaying) ? "Stop" : "Preview"}
                            </div>

                            <div className="add-to-favourite"
                                 onClick={this.addToFavourite.bind(this, this.props.data)}>
                                {(this.props.data.isFavourite) ? "Remove Favourite" : " Add to Favourite"}

                            </div>


                        </div>
                    </div>
                    <div className="artists-data">
                        <h2>{this.props.data.artistName}</h2>
                        <div className="artists-scrollable">
                            <p><b>Release Date </b>: {formattedDate}</p>
                            <p><b>Collection </b>: {this.props.data.collectionName}</p>
                            {this.props.data.shortDescription ? (
                                <p><b>Description </b>: {this.props.data.longDescription} </p>) : null}
                        </div>
                    </div>

                    {this.state.isPreviewVisible ? (
                        <audio controls autoPlay>
                            <source src={this.props.data.previewUrl} type="audio/ogg"></source>
                            <source src={this.props.data.previewUrl} type="audio/mpeg"></source>
                        </audio>
                    ) : null}

                </div>
            </div>
        );
    }

}

export default ArtistsCard;