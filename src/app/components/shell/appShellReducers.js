const appShellInitialState = {
    isAppBottomSheetsExpanded: false
};

export default function(state = appShellInitialState, action) {

    var newState = Object.assign({}, state);

    switch(action.type) {

        case 'TOGGLE_APP_BOTTOM_SHEETS':
            newState.isAppBottomSheetsExpanded = !state.isAppBottomSheetsExpanded;
            break;
        default:
            break;
    }

    return newState;
}