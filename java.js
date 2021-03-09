'use strict';
let tabel = document.getElementById('tabel');
let form = document.getElementById('form');
let total=document.getElementById('total');
let allStudentArray=[];
let hArray=['id','studentName','email','mobile','tuition'];
let totalTuition=0;


function Student(id,studentName,email,mobile){
    this.id=id;
    this.studentName= studentName;
    this.email=email;
    this.mobile=mobile;
    this.age=0;
    this.tuition=0;
    allStudentArray.push(this);
}

Student.prototype.radnomAge=function(){
    let random= Math .random();
    random=18+random*(24-18+1);
    random=Math.floor(random);
    this.age= random;
}

function calculateTotalTuition(){
    totalTuition=0;
for (let i=0;i<allStudentArray.length;i++){
    totalTuition +=allStudentArray.tuition;

}
return totalTuition
}

function createHeaderForTabel(){
    let headerRow=document.createElement('tr');
    tabel.appendChild(headerRow);
    for(let i=0;i<hArray.length;i++){
        let headerTabelData =document.createElement('th');
        headerRow.appendChild(headerTabelData);
        headerTabelData.textContent=hArray[i];
    }
}
 createHeaderForTabel();

 if(localStorage.getItem('AllStudent')){
     totalTuition=0;
     allStudentArray=JSON.parse(localStorage.getItem('AllStudent'));
     render();

 }

 function render(){
     for(let i=0;i<allStudentArray.length;i++){
         let studentRow= document.createElement('tr');
         tabel.appendChild(studentRow);
         let emailTd=document.createElement('td');
         studentRow.appendChild(emailTd);
         emailTd.textContent= allStudentArray[i].email;
         console.log(allStudentArray[i].email);

         let mobileTd=document.createElement('td');
         studentRow.appendChild(mobileTd);
         mobileTd.textContent=allStudentArray[i].mobile;

         let ageTd=document.createElement('td');
         studentRow.appendChild(ageTd);
         ageTd.textContent=allStudentArray[i].age;

         let tuitionTd=document.createElement('td');
         studentRow.appendChild(tuitionTd);
         tuitionTd.textContent=allStudentArray[i].tuition;
     }
     
 }


 form.addEventListener('submit',addstudent)

 function addstudent(event){
     event.preventDefault();

     let emailUser=event.target.email.value;
     let mobileUser=event.target.mobile.value;
     let idUser=event.target.number;
     

     let addNewStudent=new Student(emailUser,mobileUser,idUser);
     addNewStudent.radnomAge();
     addNewStudent.totalTuition();
     //addNewStudent.calculateTotalTuition();
  
     render();

     calculateTotalTuition();
     total.textContent='total :'+totalTuition;
     localStorage.setItem('AllStudent',JSON.stringify(allStudentArray))

 }
 calculateTotalTuition();
 total.textContent='total:'+ totalTuition
console.log(totalTuition)


