import React, { Component } from 'react';

export default class NewCourseForm extends Component {

    static defaultProps = {
        onSubmit: () => { }
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            image: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        const { target } = event,
            { name, value } = target;

        this.setState({
            [name]: value
        })

    }


    handleSubmit(event) {
        event.preventDefault();
        if (this.state.name && this.state.image && this.state.category)
            this.props.onSubmit(this.state)
        this.setState({
            name: '',
            image: ''
        });
    }

    render() {

        const { props, state } = this;

        return (
            <form className="course-form" onSubmit={this.handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input name="name" value={state.name} onChange={this.handleChange}></input>
                </label>
                <label>
                    <span>Image:</span>
                    <input name="image" value={state.image} onChange={this.handleChange}></input>
                </label>
                <label>
                    <span>Category:</span>
                    <select name="category" value={state.category} onChange={this.handleChange}>
                        <option value=''>Selecionar</option>
                        <option value='JavaScript'>JavaScript</option>
                        <option value='Php'>Php</option>
                        <option value='Ruby'>Ruby</option>
                        <option value='Python'>Python</option>
                        <option value='C#'>C#</option>
                    </select>
                </label>
                <button type="submit" > Criar Curso </button>
            </form>
        )
    }
}   