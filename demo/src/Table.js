import React, { Component } from "react";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {console.log(this.props.getAll.length)}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {this.props.getAll.map((value, index) => {
            return (
              <tbody key={value._id}>
                <tr >
                  <th scope="row">{index + 1}</th>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.city}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => this.props.updateData(value)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn" onClick={() => this.props.deleteData(value)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </>
    );
  }
}

export default Table;
