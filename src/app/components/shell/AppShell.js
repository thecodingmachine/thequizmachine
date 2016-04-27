import React from 'react';
//import { Link } from 'react-router';
import AppNav from './AppNav'
import AppBottomSheets from './AppBottomSheets'


class AppShell extends React.Component {
    render() {
        return (
            <div class="app">
                <AppNav />
                <AppBottomSheets />
            </div>
        )
    }
}

export default AppShell;