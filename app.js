let fname= document.getElementById('fname');
let lname= document.getElementById('lname');
let dob= document.getElementById('dob');
let button= document.getElementById('button')
let outputfName= document.getElementById('outputfName');
let outputlName= document.getElementById('outputlName');
let outAge= document.getElementById('outputAge')
const display3 =document.getElementById('display');
display3.style.display='none';

button.addEventListener('click',function(){
   let firstName= fname.value;
   let lastName= lname.value;
   let Dob= dob.value
   function Person(firstName, lastName, dob) {
      this.fname = firstName;
      this.lname= lastName;
      this.dateOfBirth= new Date(dob);
     

   }
   Person.prototype.calculateAge= function(){
      const difference= Date.now() - this.dateOfBirth.getTime();
      const ageDate= new Date(difference);
      return ageDate.getFullYear() - 1970;
   }
   Person.prototype.fullName= function(){
      return `${this.fname} ${this.lname}`
   }
   // const hussain = new Person("hussain",'5 june 2010')
   const newperosn= new Person(firstName,lastName, Dob)
 display3.style.display="block";
   
   outputfName.textContent= newperosn.fullName();
   outAge.textContent=newperosn.calculateAge();
})



