
/*function id(elementId){
	var el = document.getElementById(elementId);
	return el;
}
function radioLi(name){
    console.log('name ' + name)
	var el = document.getElementsByName(name);
	return el;
}
function check(row){
    var form = document.getElementById("food-form");
    console.log('row ' + form)
	var el = radioLi(row);
	el[0].checked = true;
}
function value(field) {
    var int;
    var form = document.getElementById("food-form");
    console.log('value ' + value)
	var row = radioLi(field);
        for (var i=0; i < row.length; i++) {
            if (row[i].checked==true) {    
            int = row[i].value;
			int = parseFloat(int);
			return int;
        }
    }
}
function totalValue(){
	var firstRow = value("meal");
	var secondRow = value("flavour");
	var thirdRow = value("food");
    console.log('total value ' + total)
	var total=[firstRow,secondRow,thirdRow];
	return total;
}
function risk(){
	var total=0;
	var totalRow = totalValue();
	for(var i= 0; i < totalRow.length; i++){
		total += totalRow[i];
	}
	return total;
}
function riskFactor(){
	var riskFactor = [];
	var totalRow = totalValue();
	for(var i= 0; i < totalRow.length; i++){
		if(totalRow[i]>=10){
			riskFactor.push(i);
		}
	}
	var lenght =riskFactor.length;
	for(var x= 0; x < lenght; x++){
		if(riskFactor[x]==0){
			riskFactor.splice(x,1,"Meal");
		}else if(riskFactor[x]==1){
			riskFactor.splice(x,1,"Flavour");
		}else if(riskFactor[x]==2){
			riskFactor.splice(x,1,"Food");
		}
	}
	return riskFactor;
}
function mainRisk(){
	var highRisk = "Your main risk factor";
	var risk = riskFactor();
	switch (risk.length){
		case 1:
			highRisk+= " is your " + risk[0]+".";
			break;
		case 2:
			highRisk+= "s are your "+risk[0]+" and your "+risk[1]+".";
			break;
		case 3:
			highRisk+="s are your " +risk[0]+ ", "+risk[1]+" and your "+risk[2]+".";
			break;
		default:
			highRisk="";
			break;
	}
	return highRisk;
}
function message(){
	var rMessage = risk();
	var fMessage;
	if (rMessage >25){
		fMessage = "high"
	}else if(rMessage>15){
		fMessage="medium"
	}else{
		fMessage="low"
	}
	return fMessage
}

function myFunction(){
	this.setAttribute("disabled","disabled");
	var mess = message(); 
	var p = id("total");
	var a = id("link");
	var fMessage;
	var sMessage;
	var link;
	switch(mess){
		case "high":
			fMessage = document.createTextNode("Your results show that you currently have a HIGH risk of developing diabetes. "+ mainRisk()+" We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our ")
			sMessage = document.createTextNode(" and a member of the Health Authority Diabetes Team will be in contact with you.")
			link = document.createTextNode("contact form");
			p.insertBefore(fMessage,a);
			p.appendChild(sMessage);
			break;
		case "medium":
			fMessage= document.createTextNode("Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at ");
			link =document.createTextNode("http://www.zha.org.zd.");
			p.insertBefore(fMessage,a);
			break;
		default:
			fMessage=document.createTextNode("Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.");
			p.appendChild(fMessage);
			break;
	}
	var box = document.getElementById("message");
	var h2 = p.previousElementSibling;
	h2.innerHTML="Your Result";
	box.setAttribute("class","displayResult");

}


window.onload = function(){
id("calculate").disabled=false;
	check("meal");
	check("flavour");
	check("food");
}*/

function total() {
    var elements = document.getElementById("food-form").elements;
    var total = 0;
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        if(item.checked){
            total += parseInt(item.value);
        }
    }
    var p = document.getElementById("total");
	var fMessage;
	if (total >34){
		fMessage = document.createTextNode("You love meat and fish and their nutritional values!")
		p.append(fMessage);
	}else if(total>25){
        fMessage = document.createTextNode("You love carbs and you probably are a pasta lover")
		p.append(fMessage);
    }else{
		fMessage = document.createTextNode("You love food in general and would eat anything. Congrats!!")
		p.append(fMessage);
	}
	var box = document.getElementById("message");
	var h2 = p.previousElementSibling;
	h2.innerHTML="Your Result";
	box.setAttribute("class","displayResult");
    document.getElementById("calculate").disabled=true;
}

function radioLi(name){
	var el = document.getElementsByName(name);
	return el;
}

function check(row){
	var el = radioLi(row);
	el[0].checked = true;
}

window.onload = function(){
    document.getElementById("calculate").disabled=false;
        check("meal");
        check("flavour");
        check("food");
}