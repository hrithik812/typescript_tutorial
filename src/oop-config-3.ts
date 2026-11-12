abstract class UIComponent{

    constructor(protected id:string){}
    abstract render():string;
}

class Input extends UIComponent{
    constructor(id:string,private type:string,private placeholder:string){
      super(id)
    }
    render(){
        return `<input type=${this.type} id=${this.id} placeholder="${this.placeholder}" name="${this.id}"/>`
    }
}

const emailInput=new Input("email","email","Enter your email");

const passwordInput=new Input("password","password","Enter your password");

console.log(emailInput.render());
console.log(passwordInput.render());