import React from "react"

class CreateSquirrel extends React.Component {
  
  defaultState = {
    nameValue: "",
    imageValue: "",
    bioValue: ""
  }
  state = this.defaultState

  handleInputChange = e => {
    const inputName = e.target.name

    this.setState({
      [inputName]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/squirrels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.nameValue,
        img: this.state.imageValue,
        bio: this.state.bioValue
      })
    })
      .then(res => res.json())
      .then(data => {
        this.props.addSquirrel(data)
        this.setState(this.defaultState)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-form">
        <input
          type="text"
          placeholder="SQUIRREL NAME"
          name="nameValue"
          value={this.state.nameValue}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="imageValue"
          placeholder="IMAGE URL"
          value={this.state.imageValue}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="bioValue"
          value={this.state.bioValue}
          placeholder="BIO"
          onChange={this.handleInputChange}
        />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default CreateSquirrel
