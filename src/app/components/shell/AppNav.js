import React from 'react';
import { Block, Text } from 'essence-core';
import AppBar from 'essence-appbar';
import Icon from 'essence-icon';

class AppNav extends React.Component {
    render() {
        return (
            <AppBar className={'e-background-red-500 e-text-white'}>
                <Block classes={'e-row'}>
                    <Block classes={'brick brick-6 e-h-center e-v-center'}>
                        <Text type={'strong'}>TheQuizMachine</Text>
                    </Block>
                    <Block classes={'brick brick-6 e-h-center e-v-center'}>
                        <div onClick={ this.props.toggle }>
                            <Icon name={'action-settings'} />
                        </div>
                    </Block>
                </Block>
            </AppBar>
        )
    }
}

export default AppNav;