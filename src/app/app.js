import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return  <div className="navbar-fixed">
                    <nav className="grey darken-1">
                        <div className="nav-wrapper">
                            <a href="#!" className="brand-logo center">TheQuizMachine</a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="mobile.html"><i className="material-icons">settings</i></a></li>
                            </ul>
                        </div>
                     </nav>
                </div>

    }
}

render(<App/>, document.getElementById('app'));