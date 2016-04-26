import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Header extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text="TheQuizMachine" />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <FontIcon className="muidocs-icon-action-settings" />
                    </ToolbarGroup>
                </Toolbar>
            </MuiThemeProvider>
        )
    };

}