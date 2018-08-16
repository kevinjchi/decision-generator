import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';


/** 
 * New class syntax to remove contructor -- see babel syntax
 * Pull the state out of contructor
 * convert all event handlers to class properties (arrow functions)
 * delete constructor completetly
 * start with class properties end with method
 * */ 

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOptionSingular = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > - 1) {
            return 'This option already exists';
        } 
        this.setState((prevState) => {
            // prevState.options.push(option); dont push original array, not good
            return {
                options: prevState.options.concat([option])
            }
        });
    };
    handleClearSelectedOptionState = () => {
        this.setState(() => ({ selectedOption: undefined}));
    }

    // LifeCycle components
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // do nothing at all
        }
        console.log('ComponentDidMount -fetching data');
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            // console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnMount');
    }
    render() {
        const title = 'title';
        const subtitle = 'subtitle';

        return (
            <div>
                <Header 
                title={title}
                subtitle={subtitle} />
                <div className="container">
                    <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                     />
                    <div className="widget">
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                        />
                        <AddOption
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOptionState={this.handleClearSelectedOptionState} 
                    />
            </div>
        );
    }
}