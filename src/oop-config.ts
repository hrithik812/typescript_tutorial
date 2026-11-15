//Access modifier

//public


//private


//protected



//readonly


class Employee{


    constructor(
        public name:string,private _baseSalary:number)
    {
    }
    get baseSalary(): number{
          return this._baseSalary
    }   
    set baseSalary(newSalary:number){
        if(newSalary<0){
            throw new Error("Salary can not be zero")
        }
        this._baseSalary=newSalary
    }
    describe():string {
        return `${this.name} earns ${this._baseSalary}`
    }
}

class Manager extends Employee{
    teamMemberCount:number;

    constructor(teamMemberCount:number,name:string,_baseSalary:number){
        super(name,_baseSalary);
        this.teamMemberCount=teamMemberCount
    }
}



const employee=new Employee("Mir",2000);
const employee2=new Employee("Mizan",24000);

console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);

console.log(employee.describe());

export{}
