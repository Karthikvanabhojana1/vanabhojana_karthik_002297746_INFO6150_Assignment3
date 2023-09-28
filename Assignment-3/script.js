//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");






function addStudents(){

var table=document.getElementById("myTable");

var tbody = document.getElementsByTagName("tbody")[0];

var studentName= table.lastElementChild.lastElementChild.previousElementSibling.firstElementChild?.nextElementSibling?.innerHTML || "Student 0"

var lastIndex = studentName.split(" ")[1]; 

var trnode=document.createElement("tr");

var tdcheckBoxNode=document.createElement("td");
tdcheckBoxNode.innerHTML='<input type="checkbox" onclick="onClickCheckBox(this)"/><br /><br /><img src="./down.png" width="25px" onclick="onselectdropdown(this)" />'


var tdStudentNode=document.createElement("td");
updatedstudent=tdStudentNode.innerHTML='Student '+(parseInt(lastIndex)+1)

var tdAdvisorNode=document.createElement("td");
tdAdvisorNode.innerHTML='Teacher '+(parseInt(lastIndex)+1)

var tdAwardStatus= document.createElement("td");
tdAwardStatus.innerHTML='Approved'

var tdSemester= document.createElement("td");
tdSemester.innerHTML='Fall'


var tdtype= document.createElement("td");
tdtype.innerHTML='TA'


var tdBudget= document.createElement("td");
tdBudget.innerHTML='12345'


var tdPercentage= document.createElement("td");
tdPercentage.innerHTML='100%'

var trdropdown=document.createElement("tr");
trdropdown.classList.add("dropDownTextArea");
trdropdown.innerHTML='Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br />'


trnode.appendChild(tdcheckBoxNode);
trnode.appendChild(tdStudentNode);
trnode.appendChild(tdAdvisorNode);
trnode.appendChild(tdAwardStatus);
trnode.appendChild(tdSemester)
trnode.appendChild(tdtype);
trnode.appendChild(tdBudget);
trnode.appendChild(tdPercentage);


tbody.appendChild(trnode);
tbody.appendChild(trdropdown);
alert(updatedstudent+" Record added successfull")
}
var count=0;
var checkedvar=0;


function onClickCheckBox(checkBox){
var selectedRow=checkBox.parentElement.parentElement;
var buttonselection=checkBox.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;

var trnode=checkBox.parentElement.parentElement.parentElement.firstElementChild;
var thdeletenode=document.createElement("th");
  thdeletenode.innerHTML="DELETE";
  var theditnode=document.createElement("th");
  theditnode.innerHTML="EDIT";
if(checkBox.checked==true ){
  checkedvar++;
  count++;
  // && document.querySelectorAll('input[type="checkbox"]:checked').length>0
  document.getElementById("button").style.cursor = "default";
  

  selectedRow.style.backgroundColor="yellow";
  var deletebutton=document.createElement("td");
  var editbutton=document.createElement("td");
 
  deletebutton.innerHTML = '<button id="deleted" type="button" onclick="deleteRow(this)">Delete</button>' 
  editbutton.innerHTML = '<button id="edited" type="button" onclick="onEditRow(this)">Edit</button>' 
  buttonselection.style.backgroundColor = 'orange'
if(count===1) {
  console.log("222")
  trnode.appendChild(thdeletenode);
  trnode.appendChild(theditnode); 
  buttonselection.style.backgroundColor = 'orange'
  document.getElementById("button").style.cursor = "default";


}

  
  selectedRow.appendChild(deletebutton);
  selectedRow.appendChild(editbutton);

 
  
}
else{
 
  selectedRow.style.backgroundColor="#fff";
  selectedRow.deleteCell(-1)  
  selectedRow.deleteCell(-1)  
 



  if((checkBox.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML==="EDIT" || checkBox.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML==="DELETE") && checkedvar<=1)

 {
  console.log(checkedvar)

  trnode.lastElementChild.remove();
  trnode.lastElementChild.remove();
  count=0;
  checkedvar--;
  buttonselection.style.backgroundColor = 'grey'
  document.getElementById("button").style.cursor = "not-allowed";

 } 
 else{
  checkedvar--;
 }

   
}
  

} 

function deleteRow(deletedRef){
  var buttonselection=deletedRef.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;

var selectedRow = deletedRef.parentElement.parentElement;
var trnode=deletedRef.parentElement.parentElement.parentElement.firstElementChild;

  var selectedStudent = deletedRef.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML;
  var selecteddropdown=deletedRef.parentElement.parentElement.nextElementSibling;
  if(confirm("Do you want to delete "+selectedStudent+" details")){
    console.log(selectedRow.rowIndex);
    console.log(selectedStudent);
  
    document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
    document.getElementById("myTable").deleteRow(selecteddropdown.rowIndex)
    alert(selectedStudent +" has been deleted");
  
    selectedRow.deleteCell(-1)  
    selectedRow.deleteCell(-1)
    checkedvar--;
    count--;
  
    if((trnode.lastElementChild.innerHTML==="EDIT" || trnode.lastElementChildinnerHTML==="DELETE") && checkedvar<1)
  
    {
     console.log(checkedvar)
   
     trnode.lastElementChild.remove();
     trnode.lastElementChild.remove();
     count=0;
     checkedvar=0;
     buttonselection.style.backgroundColor = 'grey'
       document.getElementById("button").style.cursor = "not-allowed";

    } 
  }
}


function onselectdropdown(element){
  var tabeldrop=element.parentElement.parentElement.nextElementSibling;
  console.log(tabeldrop);
  if( tabeldrop.style.display==="block"){
    tabeldrop.style.display="none"

  }
  else{
    tabeldrop.style.display="block"

  }
}


function onEditRow(editRef){

  // var table=document.getElementById("myTable");
  var selectedRow = editRef.parentElement.parentElement;
  // // var index=selectedRow.rowIndex;
  var selectedStudent = editRef.parentElement.parentElement.firstElementChild.nextSibling.innerHTML
  
prompt("Edit details of " +selectedStudent);
alert(selectedStudent +" data updated successfully");



}