import store from '../../store';

export function toggleAppBottomSheets() {
    store.dispatch({
        type: 'TOGGLE_APP_BOTTOM_SHEETS'
    });
}
