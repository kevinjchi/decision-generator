
import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Action from './components/Action';
import Header from './components/Header';


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
        this.state = {
            options: props.options
        };
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
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOptionSingular(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
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

    }
    render() {
        const title = 'title';
        const subtitle = 'subtitle';

        return (
            <div>
                <Header 
                title={title}
                subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOptionSingular={this.handleDeleteOptionSingular}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>            
//             </div>
//         );
//     }
// }



// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick} 
//                     disabled={!this.props.hasOptions}>
//                     what to do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return ( 
        <div>
            <button onClick={props.handleDeleteOptions} > Remove All </button>
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                    />
                ))
            }
        </div>
    );
};

// class Options extends React.Component {

//     render() {
//         return ( 
//             <div>
//                 <button onClick={this.props.handleDeleteOptions} > Remove All </button>
//                 {
//                     this.props.options.map((option) => 
//                     <Option key={option} optionText={option}/>)
//                 }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
        {props.optionText}
        <button 
        onClick={(e) => {
            props.handleDeleteOptionSingular(props.optionText);
        }}
        >remove</button>
        </div>)
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//             {this.props.optionText}
//             </div>
//         )
//     }
// }


const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp options={['Devils den', 'district']}/>, appRoot);

// const template = <p>testing jsx</p>;
// ReactDOM.render(template, document.getElementById('app'))


