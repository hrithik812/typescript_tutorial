// const greetings=()=>{
//     console.log('Hello World');
    
// }

// greetings();

//Literal Type
 
// type Status="pending"

// const status :Status="pending" 


//Basic Union

type Identity=string | number


const id:Identity='345456'

//Literal Union
type Role="user"|"admin"|"manager"


//Object union

type Admin={
    id:number,
    role:'admin',
    privileges:string[]
}


type Member={
    id:number,
    role:'member',
    plans:string[]
}
type User=Admin | Member

const user:User ={
    id:123,
    role:'member',
    plans:['a','b']
}

// type alias vs interface


// Interface is generally connected to objects
//Type Alias is more connected to Literals,unions,tuples,primitives

//  Interface define korte hoy object akaare 
// type alias use kora jaai direct equal operator diye
 
//TODO:interface

interface Animal{
    species: string
}


interface Cat extends Animal {

    breed:string
}


const cat:Cat ={
    breed:"Persian",
    species:"Felix Con"
}

//Similar thing we can achieve by type Alias

type Vehicle ={
    brand:string
}

type Car=Vehicle & {
    model:string
}

const car :Car={
    brand:'Toyota',
    model:"Corolla"
}

//Another difference is that we can declare two interface with same name and they will be merged but we can not do that with type


//Top Types


let x:any='Hello World'

x=123

// x.length

// console.log(x);

// const something:unknown='Hello Programming'

// something.length


let something:unknown;

// let num:number=123

// something=num

// nullish type
interface User2{
    name:string
}

type loggedInUser =User2 | null;

const currentUser:loggedInUser=null


const anotherGreet=():undefined=>{
    console.log('ABCD');
    
}
const getError=(msg:string):never =>{
    throw new Error(msg)
}
const greetings2=anotherGreet()


// Type assertion




//as syntax

type Status="pending" | 'approved' | 'rejected'

const someStatus:string="pending"
const showStatus=(status:Status)=>{
console.log("Your current application status is "+status);
}


showStatus(someStatus as Status)
//non-null assertion
// Eta null and undefined er khetre hobe
interface Config{
    port?:number
}

const config:Config={
    port:5000
}

const currentPort:number=config.port!;


//constant assertion



const configuration ={
    port :8080,
    prefix:"/api/v1"
} as const 

//Pura object k readonly kore dite chaile evhabe korte hobe




//Type narrowing
export{}
