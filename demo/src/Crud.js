import React, { Component } from "react";
import Form from "./Form";
import axios from 'axios';
import Table from "./Table";

class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personArr: [],
            editValue: []
        };

    }
    componentDidMount() {
        this.view()
    }
    add = async (dataObj) => {
        console.log(dataObj);
        let response = await axios.post('http://localhost:3001/student', dataObj);
        if (response.status === 200) {
            console.log('One object added');
            console.log(response);
        }
        this.view()
    }
    view = async () => {

        let response = await axios.get('http://localhost:3001/student')
        if (response.status === 200) {
            this.setState({ personArr: response.data });
            console.log('Get data');
        }
    }
    update = (data) => {
        console.log(data);
        this.setState({
            editValue: data
        })
    }
    updated = async (dataObj) => {
        console.log(dataObj, 'update value');
        let response = await axios.put('http://localhost:3001/student/update', dataObj);
        if (response.status === 200) {
            console.log('One object added');
            console.log(response);
        }
        this.view()
    }
    delect = async (dataObj) => {
        console.log(dataObj._id);
        // let response = await axios.delect(`http://localhost:3001/student/del:${ dataObj._id}`);
        // if (response.status === 200) {
        //     console.log('One object added');
        //     console.log(response);
        // }
        let option = window.confirm('Do you want delete this???')
        if (option) {
            axios.delete(`http://localhost:3001/student/del/${dataObj._id}`).then(res =>
                console.log(res)
            )
        }
        this.view()
    }
    render() {
        return (<>
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        {console.log(this.state.editValue, 'works')}
                        <Form getPerson={this.add} getUpdate={this.state.editValue} newUpdate={this.updated}></Form>
                    </div>
                    <div className="col-4">
                        <Table getAll={this.state.personArr} updateData={this.update} deleteData={this.delect}></Table>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Crud;
