import React from "react";
// import { connect } from "react-redux";
// import { addTodo } from "../redux/index";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(event) {
    if (event.key === "Enter") this.props.add(this.state.input);
    // this.setState({ input: "" });
  }
  render() {
    return (
      <div>
      <input
          type="text"
          value={this.state.input}
          onChange={evt => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleAdd}
        />
        <button
          onClick={() => {
            this.props.add(this.state.input);
            this.setState({ input: "" });
          }}>
          Add
        </button>
      </div>
    );
  }
}

export default InputForm

// const mapDispatchToProps = (dispatch) => {
//   console.log("Dispatching Props", dispatch);
//   return { add: (text) => dispatch(addTodo(text)) };
// };

// export default connect(null, mapDispatchToProps)(InputForm);
