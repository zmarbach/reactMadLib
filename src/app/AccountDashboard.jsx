import React from 'react';
import { AccountsRepository} from '../api';
import { AccountsList } from './AccountsList';
import { Link } from 'react-router-dom';

export class AccountDashboard extends React.Component {

    accountRepository = new AccountsRepository();

    state = {
        accounts: undefined 
    };

    componentDidMount(){
        this.accountRepository.getAccounts()
            .then(accounts => this.setState({accounts: accounts}));
    }

    /*clear fix below will clear the float above*/
    render(){
        return <>
            <div className ="container">
                <Link to="/new" className="btn btn-sm btn-success float-right">
                    + New Account
                </Link>
                <h1>Accounts</h1>
                
                <div className="clearfix"></div>
                <AccountsList accounts = {this.state.accounts} onDelete = {x=> this.onDelete(x)}/>
            </div>
        </>

    }

    onDelete(id) {
        if(window.confirm("Are you sure?")){
            this.accountRepository.deleteAccount(id)
            .then(this.setState(prevState => {
                prevState.accounts = prevState.accounts.filter(account => account.id !== id)
                return prevState;

            }))
        };
    }
}