import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            city: '',
            _id: '',
            isEdit: false
        }
    }
    create = () => {
        console.log('create');
        // console.log(personObj);
        if (this.state._id !== '') {
            let personObj = {
                name: this.state.name,
                age: this.state.age,
                city: this.state.city,
                _id: this.state._id
            }
            this.props.newUpdate(personObj)
        }
        else {
            let personObj = {
                name: this.state.name,
                age: this.state.age,
                city: this.state.city
            }
            this.props.getPerson(personObj)
        }
        // if (!this.state.isEdit) {
        //     let personObj = {
        //         name: this.state.name,
        //         age: this.state.age,
        //         city: this.state.city
        //     }
        //     this.props.getPerson(personObj)
        // } else {
        //     let personObj = {
        //         name: this.state.name,
        //         age: this.state.age,
        //         city: this.state.city
        //     }
        //     this.props.getPerson(personObj)

        // }
    }

    componentWillReceiveProps(props) {
        console.log(props);
        // dout
        if (props.getUpdate._id != null) {

            this.setState({
                name: props.getUpdate.name || '',
                age: props.getUpdate.age || '',
                city: props.getUpdate.city || '',
                _id: props.getUpdate._id || '',
                isEdit: true
            })
        }

    }

    // componentDidUpdate(props) {
    //     console.log(props.getUpdate);
    //     this.setState({
    //         name: this.props.name
    //     })
    // }
    render() {
        return (<>
            <div>
                <form>
                    <div className="row">
                        <div className="col">
                            <h4>Person Inforamation</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type='text' className='form-control' placeholder='Name' value={this.state.name} onChange={(event) => this.setState({ ...this.state, name: event.target.value })}></input>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <input type='number' className='form-control' placeholder='Age' value={this.state.age} onChange={(event) => this.setState({ ...this.state, age: event.target.value })}></input>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <input type='text' className='form-control' placeholder='City' value={this.state.city} onChange={(event) => this.setState({ ...this.state, city: event.target.value })}></input>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <button type='submit' className='btn btn-primary' onClick={this.create}>{this.state.isEdit ? 'Update' : 'Enter'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </>);
    }
}

export default Form;