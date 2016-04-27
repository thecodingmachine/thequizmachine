import React from 'react';
import { Block, Text } from 'essence-core';
import BottomSheets from 'essence-bottomsheet';
import { List, ListItem } from 'essence-list';
import Icon from 'essence-icon';

class AppBottomSheets extends React.Component {
    render() {
        return (
            <BottomSheets classes={'e-background-deep-purple-900'} visible={ this.props.isAppBottomSheetsExpanded }>
            </BottomSheets>
        )
    }
}

export default AppBottomSheets;
