import React, { Component } from 'react';

class AddTasks extends Component {
    constructor(){
        super();
        this.state = {
            content: null
        }
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {addTask} = this.props;
        addTask(this.state);
        e.target.reset()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                    <div className="input-field col s6">
                        <input id="content" type="text" className="validate" placeholder="Your todo" onChange={this.handleChange} required></input>
                    </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default AddTasks;
