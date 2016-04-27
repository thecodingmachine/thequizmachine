import React from 'react';
import { connect } from 'react-redux';
import AppShell from './AppShell';
import { toggleAppBottomSheets } from './appShellActions';


class AppShellContainer extends React.Component {
    render() {
        console.log(this.props);
        return (
            <AppShell {...this.props} />
        )
    }
}

const stateToProps = function(state) {
    console.log(state);
    return {
        isAppBottomSheetsExpanded: state.appShellReducer.isAppBottomSheetsExpanded
    }
};

const dispatchToProps = function(dispatch) {
    console.log("dispatch");
    // In a real app, you would 'dispatch' an action here based
    // on the user being clicked
    return {
        toggle() {
            console.log("toggle");
            return (
                toggleAppBottomSheets
            );
        } 
    }
};

export default connect(stateToProps, dispatchToProps)(AppShellContainer)
