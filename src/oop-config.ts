//Access modifier

//public


//private


//protected



//readonly


class Employee{


    constructor(
        public name:string,protected _baseSalary:number)
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

    calculatePay():number{
        return this.baseSalary;
    }
}
//Inheritance
class Manager extends Employee{
     

     constructor(name:string,_baseSalary:number,public teamMemberCount:number){
        super(name,_baseSalary);
    }

    describeWork():string{
        return `${this.name} manages ${this.teamMemberCount} team members`

    }
    describeManager():string{
        return `${this.name} earns ${this._baseSalary}`
    }
    override calculatePay():number{
        const basePay=super.calculatePay();
        return basePay+5000;
    }


}





const employee=new Employee("Mir",2000);
const employee2=new Employee("Mizan",24000);

console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);


console.log(employee.describe());

const manager=new Manager("Mizan",240000,5)

console.log(manager.describe());
console.log(manager.describeWork());
console.log()


export{}
