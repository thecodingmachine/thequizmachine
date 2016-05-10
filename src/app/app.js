import React from 'react';
import {render} from 'react-dom';
import Navbar from './components/Navbar';
import Question from './components/Question';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }
    componentDidMount () {
        this.serverRequest = $.get("http://jservice.io/api/clues", function (results) {
            this.setState({
                questions: results
            });
        }.bind(this));
    }
    componentWillUnmount () {
        this.serverRequest.abort();
    }
    render () {
        var rows = [];
        this.state.questions.forEach(function(item) {
            if (item.question != "") {
                rows.push(<Question key={item.id} text={item.question} />);
            }
        });

        return  <div>
                    <Navbar/>
                    <div className="container">
                        {rows}
                    </div>
                </div>
    }
}

render(<App/>, document.getElementById('app'));