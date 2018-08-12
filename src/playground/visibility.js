class Visibility extends React.Component{
    constructor(props) {
        super(props);
        //preserve bindings
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. There are som details here</p>
                    </div>
                )}
            </div>
        )
    }
}
ReactDOM.render(<Visibility />, document.getElementById('app'));
