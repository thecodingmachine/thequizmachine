import React from 'react';
//import { Link } from 'react-router';
import AppBar from 'essence-appbar';
import BottomSheets from 'essence-bottomsheet';
import { Block, Text } from 'essence-core';
import Icon from 'essence-icon';


class AppShell extends React.Component {
    render() {
        return (
            <div class="app">
                <Block classes={'e-row'}>
                    <AppBar className={'e-background-red-500 e-text-white'}>
                        <Text type={'strong'}>TheQuizMachine</Text>

                        <Block className={'e-right'}>
                            <Icon name={'action-settings'} />
                        </Block>
                    </AppBar>
                </Block>

                <main>
                    { this.props.children }
                </main>

                <BottomSheets classes={'e-background-white'} visible={false}>
                </BottomSheets>
            </div>
        )
    }
}

export default AppShell;