let Pname= document.getElementById('name');
let dob= document.getElementById('dob');
let button= document.getElementById('button')
let outputName= document.getElementById('outputName');
let outAge= document.getElementById('outputAge')
// employee constractor
button.addEventListener('click',function(){
   let Name= Pname.value;
   let Dob= dob.value
   function Person(name, dob) {
      this.Name = name;
      this.dateOfBirth= new Date(dob);
      this.calculateAge= function(){
         const difference= Date.now() - this.dateOfBirth.getTime();
         const ageDate= new Date(difference);
         return ageDate.getFullYear() - 1970;
   
      }

   }
   const hussain = new Person("hussain",'5 june 2010')
   console.log
   const newperosn= new Person(Name, Dob)
   console.log(newperosn.calculateAge())

   outputName.textContent= Name;
   outAge.textContent=newperosn.calculateAge()
})



