import React from "react";
import { connect } from "react-redux";
import { checkTodo, uncheckTodo } from "./../redux/actions";

class List extends React.Component {
    handleCheckChange = (e,i) => {
        console.log(i);
        if (e.target.checked) {
            this.props.checkTodo(i);
        }
        else {
            this.props.uncheckTodo(i);
        }
    };

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos
                        .filter(t => t.done === this.props.done)
                        .map(t => {
                            return (
                                <li key={this.props.todos.indexOf(t)}>
                                    <input
                                        onChange={(e)=>this.handleCheckChange(e,this.props.todos.indexOf(t))}
                                        type="checkbox"
                                        checked={t.done}
                                    />
                                    <p>{t.text}</p>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todosList
    };
};

export default connect(mapStateToProps, { checkTodo, uncheckTodo })(List);
