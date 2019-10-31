import React from "react";
import { connect } from "react-redux";
import { checkTodo, uncheckTodo } from "./../redux/actions";

class List extends React.Component {
    handleCheckChange = (e, i) => {
        console.log(i);
        if (e.target.checked) {
            this.props.checkTodo(i);
        }
        else {
            this.props.uncheckTodo(i);
        }
    };
    renderHeadline = () => {
        return this.props.todos.filter(t => t.done === this.props.done).length !== 0 ? (
                <h2>{this.props.done ? 'Done tasks' : 'Not done tasks'}</h2>
            ) : null;
    }

    render() {
        return (
            <div className="taskList">
                {this.renderHeadline()}
                <ul>
                    {this.props.todos
                        .filter(t => t.done === this.props.done)
                        .map(t => {
                            return (
                                <li key={this.props.todos.indexOf(t)}>
                                    <input
                                        onChange={(e) => this.handleCheckChange(e, this.props.todos.indexOf(t))}
                                        type="checkbox"
                                        checked={t.done}
                                    />
                                    <p>{t.text.charAt(0).toUpperCase()}{t.text.substring(1)}</p>
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
