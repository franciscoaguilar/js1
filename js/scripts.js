
// let passwordInput =  document.forms.login.password;
let emailInput = document.forms.login.email;
let myPTag = document.querySelector('#data_binding');
let submit = document.forms.login.Submitbtn;
let createElement = document.createElement('li');
let list = document.getElementById('list')
let textnode = document.createTextNode(emailInput);
createElement.appendChild(textnode);
    document.getElementById("list").appendChild(createElement);






emailInput.addEventListener('onclick', e => {
  createElement.appendChild(textnode);
      document.getElementById("list").appendChild(createElement);
});

submit.addEventListener('click', e => {
    if (passwordInput.value === ''|| emailInput.value ===''){
      e.preventDefault();
    }
})
//
// call how it works with this
// let user = {
//   name: prompt('what is your name'),
//   password: 12345,
//   status: 'active'
// };
// let guest = {
//   name: "guest",
//   password: undefined,
//   status: "inactive"
// };
// let newScope = {
//   name: "jose",
//   password:" pass",
//   instrument: 'pipees',
//   context: logMyName
// }
// function logMyName(greeting){
//   console.log(this.name, this.password);  //defenitin
//   alert(`${greeting}, ${this.name}!`);
// }
// // newScope.context("fly away"); //impicit binding
// logMyName.call(user, "helo"); //call site
// logMyName.call(guest, "sign up");
// logMyName.apply(user, ["helo"]); //used for arrays
//unless you are using a fat arrow function this is in the global context
// variables are not bound to this
// if you wanna change this refrence you can use call or apply
// let classScore = 90;
// const scopeOne ={
//   classScore: 75,
//   scopeTwo: {
//     classScore: 50
//   }
// };
// console.log(classScore);
// console.log(scopeOne.classScore);
// console.log(scopeOne.scopeTwo.classScore);
