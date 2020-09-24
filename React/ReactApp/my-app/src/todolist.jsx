import React, { Component } from "react";
import "./todolist.css";

export class ToDo extends Component {
    state = {
        list: ["Apple"],
        newItem: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.newItem === "") return;
        const newList = [...this.state.list, this.state.newItem];

        this.setState({ list: newList });
        this.setState({ newItem: "" });

        e.target.querySelector("input").value = "";
    };

    handleChange = (e) => {
        const item = e.target.value;
        this.setState({ newItem: item });
    };

    removeItem = (_item) => {
        const updatedState = this.state.list.filter((item) => item !== _item);
        this.setState({ list: updatedState });
    };

    render() {
        return (
            <div className="todolist">
                <h3 className="todolist__header">To Do App</h3>
                <form onSubmit={this.handleSubmit} >
                    <input
                        className="todolist__input"
                        onChange={this.handleChange}
                        type="text"
                    />
                    {/* <span className="btn-default">Add</span> */}
                </form>
                {/* <br /> */}

                <ul className="todolist__content">
                    {this.state.list.map((item, index) => (
                        <li className="todolist__content-item" key={index}>
                            <span>{item}</span>
                            <button
                                onClick={() => this.removeItem(item)}
                                className="btn-remove"
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDo;
