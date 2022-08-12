var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");

var button=document.createElement("button");
button.setAttribute("id","search");
button.innerHTML="Search";
button.addEventListener("click",foo);

var country1=document.createElement("div");
country1.setAttribute("id","country1");

var probability1=document.createElement("div");
probability1.setAttribute("id","probability1");

var country2=document.createElement("div");
country2.setAttribute("id","country2");

var probability2=document.createElement("div");
probability2.setAttribute("id","probability2");

var err=document.createElement("div");
err.setAttribute("id","err");

div.append(input,button,country1,probability1,country2,probability2,err);
document.body.append(div);

async function foo (){
    let res1=document.getElementById("name").value;
    let res2=await fetch(`https://api.nationalize.io/?name[]=${res1}`);
    let res3=await res2.json();
    console.log(res3);
    
    try{
        console.log(res3[0].country[0].country_id);
        country1.innerHTML=`Possible Nationality 01 : ${res3[0].country[0].country_id}`;
    
        console.log(res3[0].country[0].probability);
        probability1.innerHTML=`Possible Probability 01 : ${res3[0].country[0].probability}`;
    
        console.log(res3[0].country[1].country_id);
        country2.innerHTML=`Possible Nationality 02 : ${res3[0].country[1].country_id}`;
    
        console.log(res3[0].country[1].probability);
        probability2.innerHTML=`Possible Probability 02 : ${res3[0].country[1].probability}`;
    }
    catch(error){
        console.log(error);
        document.getElementById("err").innerHTML = error.message;
        
    }

    
}

