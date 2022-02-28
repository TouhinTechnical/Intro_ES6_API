class Support {
    name;
    role = 'Support Web Dev';
    address = 'BD';
    constructor(name){
        this.name = name;
    }
    startSession(){
        console.log('start a support session');
    }
}
const newMember = new Support('Touhidul islam');
console.log(newMember);

class Company {
    name;
    address;
    role;
    constructor(name,address,role){
        this.name = name;
        this.address = address;
        this.role = role;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}
const companyInfo = new Company('samsung','USA','It is moblie brand');
const companyInfo1 = new Company('Iphone', 'USA', 'It is powerful moblie brand');
companyInfo.startSession();
companyInfo1.startSession();
console.log(companyInfo);
console.log(companyInfo1);