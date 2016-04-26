import React from 'react';
import Header from '../components/Header';
import SearchCategories from '../components/SearchCategories';
import QuizItem from '../components/QuizItem';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <Header />
                <SearchCategories />
                <QuizItem />
                <QuizItem />
                <QuizItem />
                <QuizItem />
            </div>
        )
    };

}
