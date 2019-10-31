import React from 'react';
import { connect } from 'react-redux';
import { addTodo, inputChange } from './../redux/actions';

class Form extends React.Component {
    addNewToDo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.props.inputValue);
    }
    handleInputChange = (e) => {
        console.log(e.target.value);
        this.props.inputChange(e.target.value);
    }
    render() {
        return (
            <form onSubmit={(e) => this.addNewToDo(e, "abc")}>
                <input onChange={(e)=>this.handleInputChange(e)} value={this.props.inputValue} type="text" />
                <input type="submit" />
            </form>
        )
    }

}
const mapStateToProps = state => {
    return {
        inputValue: state.value
    }
}
export default connect(mapStateToProps, { addTodo, inputChange })(Form);