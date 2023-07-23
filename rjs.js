function addwork(){
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weFeild");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","enter here");
   let weOb=document.getElementById("we");
   let buttonOb=document.getElementById("button");
   weOb.insertBefore(newNode,buttonOb);

}
function addpro(){
  
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("prFeild");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","enter here");
   let taskOb=document.getElementById("task");
   let addprojectOb=document.getElementById("addproject");
   taskOb.insertBefore(newNode,addprojectOb);

}
function addedu(){
  
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eFeild");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","enter here");
   let workOb=document.getElementById("work");
   let addeducationOb=document.getElementById("addeducation");
   workOb.insertBefore(newNode,addeducationOb);

}
 function generatecv(){
    let nameFeild = document.getElementById("nameFeild").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameFeild;
    document.getElementById("nameT2").innerHTML=nameFeild;
    
    document.getElementById("contactT").innerHTML=document.getElementById("contactFeild").value;

    document.getElementById("emailT").innerHTML=document.getElementById("emailFeild").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressFeild").value;

    document.getElementById("linkT").innerHTML=document.getElementById("linkedinFeild").value;

    document.getElementById("gitT").innerHTML=document.getElementById("githubFeild").value;

    document.getElementById("hackT").innerHTML=document.getElementById("hackerrankFeild").value;
   
    document.getElementById("objectT").innerHTML=document.getElementById("objectiveField").value;

     //work experience
    
     let wes = document.getElementsByClassName("weFeild");
     let str = " ";
     for (let e of wes){
       str = str + `<li>${e.value}</li>`;
     }
     document.getElementById("weT").innerHTML = str;

     //projects

     let pes = document.getElementsByClassName("prFeild");
     let str1= " ";
     for (let d of pes){
       str1 = str1 + `<li>${d.value}</li>`;
     }
     document.getElementById("prT").innerHTML = str1;

     //education

     let ees = document.getElementsByClassName("eFeild");
     let str2= " ";
     for (let f of ees){
       str2 = str2 + `<li>${f.value}</li>`;
     }
     document.getElementById("eT").innerHTML = str2;

    
    

    //image upload
    let file = document.getElementById("imgFeild").files[0];
    console.log(file);
    let reader= new FileReader();
    reader.readAsDataURL(file); 
    console.log(reader.result);
    reader.onloadend =function()
    {
      document.getElementById("imgT").src=reader.result;
    };
    
      
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
 }