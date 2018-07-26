import React, {Component} from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    video = this.props.video;
    onVideoSelect = this.props.onVideoSelect;

    render() {
        return (
            <li className="list-group-item" onClick={ () => this.onVideoSelect(this.video)} >
                <div className="video-list-media">
                    <div className="media-left">
                        <img className="media-object" src={this.video.snippet.thumbnails.default.url} /> 
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {this.video.snippet.title}
                        </div>
                    </div>
                </div>
            
            </li>
        );
    }
}

export default VideoListItem;