import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
        priority:'',
        createdBy:'',
        assignedTo:''
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleCreatedBy = this.handleCreatedBy.bind(this);
    this.handleAssignedTo = this.handleAssignedTo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleTitle( event ){
      this.setState({
        title : event.target.value
      });
    }

    handlePriority( event ){
      this.setState({
        priority : event.target.value
      });
    }

    handleCreatedBy( event ){
      this.setState({
        createdBy : event.target.value
      });
    }

    handleAssignedTo( event ){
      this.setState({
        assignedTo : event.target.value
      });
    }

    handleSubmit( event ){
      event.preventDefault();
      this.props.addCard(this.state);
      this.setState({
          title: '',
          priority:'',
          createdBy:'',
          assignedTo:''
      });
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type='text' value={this.state.title} placeholder = 'title' onChange={this.handleTitle} />
        </div>
        <div>
          <input type='text' value={this.state.priority} placeholder='priority' onChange={this.handlePriority} />
        </div>
        <div>
        <input type='text' value={this.state.createdBy} placeholder='createdBy' onChange={this.handleCreatedBy} />
        </div>
        <div>
        <input type='text' value={this.state.assignedTo} placeholder='assignedTo' onChange={this.handleAssignedTo} />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;