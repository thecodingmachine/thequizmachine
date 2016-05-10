import React from 'react';
import {render} from 'react-dom';

class Question extends React.Component {
    render () {
        return  <div className="row">
                    <div className="col s12 m12">
                        <div className="card blue-grey lighten-5">
                            <div className="card-content black-text">
                                <p>{this.props.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
    }
};
export default Question;