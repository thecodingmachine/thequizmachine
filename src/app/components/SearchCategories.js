import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// TODO
const items = [];
for (let i = 0; i < 100; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`Category ${i}`} />);
}

export default class SearchCategories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};
    };

    handleChange(event, index, value) {
        console.log(this);
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <SelectField maxHeight={300} value={this.state.value} fullWidth={true} onChange={this.handleChange}>
                    {items}
                </SelectField>
            </MuiThemeProvider>
        );
    }

}
