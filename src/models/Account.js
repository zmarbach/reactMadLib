
//js file because no HTML blend...it is NOT a componenet, just setting up a class/prototype that components can use
export class Account {
    constructor(id, name, email, isEmployee, departmentId, phoneNumbers){
        this.id = id;
        this.name = name;
        this.email = email;
        this.isEmployee = isEmployee;
        this.departmentId = departmentId;
        this.phoneNumbers = phoneNumbers;
    }
}