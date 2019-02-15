function loadjson(file,callback){
  var xhr =new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

loadjson("data.json",function(text)
{
  var data =JSON.parse(text);
  console.log(data);
  details(data.basic);
  cnfo(data.cinfo);
  educationdetails(data.education);
  technicalskills(data.technical);
  Achivements(data.Achivements);
})
var left =document.querySelector(".leftchild");
function details(det){
  var img= document.createElement("img");
  img.src="pra.png";
  img.textContent =det.image;
  left.appendChild(img);

var name =document.createElement("h3");
name.textContent=det.name;
left.appendChild(name);

var mail=document.createElement("a");
mail.href="mailto:rajanaumasankar99@gmail.com"
mail.textContent = det.mail;
left.appendChild(mail);

var college= document.createElement("h2");
college.textContent =det.college;
left.appendChild(college);

var number=document.createElement("p");
number.textContent=det.number;
left.appendChild(number);

 var address= document.createElement("h4");
 address.textContent =det.address;
 left.appendChild(address);

 var hr = document.createElement("hr");
 hr.textContent=det.hr;
  left.appendChild(hr);

}
var right =document.querySelector(".rightchild");
function cnfo(infodata){
var info=document.createElement("h5");
  info.textContent="CareerObjective";
  right.appendChild(info);
  var cinf=document.createElement("p");
  cinf.textContent=infodata.info;
  right.appendChild(cinf);

  // var inff=document.createElement("p")
  // inff.textContent=infodata.info;
  // right.appendChild(inff);
}
function educationdetails(edu){
  var add=document.createElement("h6");
  add.textContent="Education Qualifications";
  right.appendChild(add);

  var hr=document.createElement("hr");
  right.appendChild(hr);

  var table1=document.createElement("table");
  table1.border="1";
  var tr1="<tr><th>institute</th><th>Degree</th><th>Passout</th></tr>";
  var tr2="";

  for (var i=0;i<edu.length;i++){
    tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>";
  }
table1.innerHTML=tr1+tr2;
right.appendChild(table1);
}

function technicalskills(tech){
  var add=document.createElement("h4");
  add.textContent="Technicalskills";
  right.appendChild(add);

  var hr=document.createElement("hr");
    right.appendChild(hr);


var ul = document.createElement("ul");
for(var i=0;i<tech.length;i++){
  var li = document.createElement("li");
  li.textContent = tech[i].title + ":" + tech[i].content;
  ul.appendChild(li);
}
right.appendChild(ul);
}

function Achivements(ach){
var add = document.createElement("h4");
add.textContent = " Achivements";
right.appendChild(add);

var hr = document.createElement("hr");
right.appendChild(hr);

var ul = document.createElement("ul");
for(var i=0;i<ach.length;i++){
  var li = document.createElement("li");
  li.textContent = ach[i].info;
  ul.appendChild(li);
}
right.appendChild(ul);
}
