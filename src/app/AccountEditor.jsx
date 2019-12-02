import React from 'react';
//brackets here because we will pull many different files from models folder
import { Department} from '../models';
import { PhoneList } from './PhoneList';
import { PhoneEditor } from './PhoneEditor';
import { AccountsRepository } from '../api';
import {Link, Redirect} from 'react-router-dom';

//need "export" here so we can use it else where
export class AccountEditor extends React.Component{

    accountRepository = new AccountsRepository();

    departments = [
        new Department(1, 'HR'),
        new Department(2, 'Marketing'),
        new Department(3, 'Sales'),
        new Department(4, 'Accounting')
    ]

    state = {
        name: '',
        email: '',
        isEmployee: false,
        departmentId: 0,
        phoneNumbers : [],
        redirect: undefined
    };

    render(){
        return <>
            { this.state.redirect && <Redirect to="/" /> }
            <form className="container">
                <h1>Account Editor</h1>
                <div className="form-group">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" 
                            id="name" 
                            name="name" 
                            className="form-control" 
                            value = {this.state.name}
                            onChange = { e => this.setState({name: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="text" 
                            id="email" 
                            name="email" 
                            className="form-control"
                            value ={this.state.email}
                            onChange = { e => this.setState({email: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label htmlFor="isEmployee">
                    <input type="checkbox" 
                            id="isEmployee" 
                            name="isEmployee" 
                            checked = {this.state.isEmployee}
                            onChange = { e => this.setState({isEmployee: e.target.checked})}/>
                        Is Employee
                    </label>
                </div>

                <div className="form-group" style = { { "display": this.state.isEmployee ? "block" : "none" } } >
                    <label htmlFor="departmentId">
                        Department
                    </label>
                    <select  
                        id="departmentId" 
                        name="departmentId" 
                        className="form-control"
                        value = {this.state.departmentId}
                        onChange = { e => this.setState({departmentId: e.target.value})}>
                        <option></option>
                        {
                            this.departments.map( x => <option key={x.id} value ={x.id}>{x.name}</option>)
                        }
                    </select>
                </div>
                
                <PhoneList phoneNumbers = {this.state.phoneNumbers}/>
                <PhoneEditor onPhoneAdded = {x => this.onPhoneAdded(x)}/>
                <div>
                    
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick = {e => this.onSubmit()}>
                        Save
                    </button>

                    <Link to="/" 
                    className="btn btn-secondary btn-block">
                        Return to List
                    </Link>

                </div>
            </form>
        </>
    }

    //use this to request info from API...this is best time to do it - componentDidMaount method
    //get the account by ID, once have it then setState in order to display it
    componentDidMount(){
        let accountId = this.props.match.params.accountId;
        //if accountId does NOT exist then we want to go to the blank version...otherwise set the state with data for whichever Id we searched for
        if(accountId){
        this.accountRepository.getAccountById(accountId)
            .then(account => this.setState(account));
        }
    }

    onPhoneAdded(phone){
        this.setState(prevState => {
            prevState.phoneNumbers.push(phone);
            return prevState;
        });
    }

    onSubmit(){
        //this gets called from the then method on AccountRepository
        var onSaveComplete = () => {
            alert("Save complete!");
            this.setState({redirect: true});
        }
        
        if(this.state.id) {
            this.accountRepository.updateAccount(this.state.id, this.state)
            .then(onSaveComplete);
        } else {
            this.accountRepository.addAccount(this.state)
            .then(onSaveComplete);
        }
    }
}