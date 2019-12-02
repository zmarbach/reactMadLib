import React from 'react';
import { Link } from 'react-router-dom';

export const AccountsList = props => {
    //this means we are still watiing on the results from API because we set accounts as 'undefined' by default
    if(!props.accounts){
       return <div>Loading...</div>
    }

    //if API returns an empty array
    if(!props.accounts.length){
        return <div className = "alert alert-info">No Records Found</div>
    }
    
    return <>
    <table className="table table-striped table-condensed">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Is Employee</th>
                <th>Department</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            {
                props.accounts.map(x => 
                    <tr key={x.id}>
                        <td> <Link to={`/edit/` + x.id}> {x.name} </Link></td>
                        <td> {x.email} </td>
                        <td> {(x.isEmployee) ? 'Y' : 'N'}</td>
                        <td> {x.departmentId}</td>
                        <td> <button className = "btn btn-sm btn-danger" onClick={e => props.onDelete(x.id)}> Delete </button> </td>
                    </tr>) 
            }
        </tbody>
    </table>
</>
};
