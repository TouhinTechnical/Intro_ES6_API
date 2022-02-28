class TeamMember{
    name;
    role;
    address;
    constructor(name, address,role){
        this.name = name;
        this.address = address;
        this.role = role;
    }
}
class StudentCare extends TeamMember {
    groupSupportTime;
    constructor(name, address, role, time){
        super(name, address, role);
        this.groupSupportTime = time;
    }
    buildARoutine(student){
        console.log(this.name, 'Build a routine for', student);
    }
}
const aliya = new StudentCare('Alia Bhatt', 'Mumbai','Student Care Web Dev', 12);
aliya.buildARoutine('Ranbir');
console.log(aliya);
//
class NeptuneDev extends TeamMember {
    releaseApp(version){
        console.log(this.name, 'release app version', version);
    }
}
const aliy1 = new NeptuneDev('Alia Bhatt', 'Mumbai','Neptune App developer Dev');
aliy1.releaseApp('1.4.5');
console.log(aliy1);