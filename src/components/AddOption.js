import React from 'react';

export default class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };

    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // if (option) {
        //     this.props.handleAddOption(option);
        // }
        this.setState(() => {
            return {
                error: error
            };
        });
        if (!error) {
            e.target.elements.option.value = '';
        };
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="addOption-error">{this.state.error}</p>}
                <form className="addOption" onSubmit={this.handleAddOption}>
                    <input className="addOption__input" type="text" name="option"/>
                    <button className="button">Add Option</button>    
                </form>
            </div>
        );
    }
}
