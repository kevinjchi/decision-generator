class IndecisionApp extends React.Component {
    render() {
        const subtitle = 'Put your life in the hands of compt';
        const title = 'indecision';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options} length={options.length}/>
            <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>

                <p>This is a react component from Header</p>
            </div>
        ) 
    }
}

class Action extends React.Component {
    handlePick() {
        alert('')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What to do?</button>
            </div>
        );
    }
}


class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    removeAll() {
        alert('RemoveAll');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>RemoveAll</button>

                THINKING IN PROPS
                {
                    this.props.options.map( (option) => 
                    <Option key={option} optionText={option} />)
                }
                THINKING IN PROPS HALFWAY
                {
                    this.props.options.map( (option) => 
                        <p key={option}> {option} </p>
                    )
                }
                <p>length: {this.props.length}</p>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOptions extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <button>Add options component</button>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>input</button>    
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));