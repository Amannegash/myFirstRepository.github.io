var emplList=[];
var index=0;
var timer=null;
var make=function(){
	var fn;
	var s;
	function create(accountName,deposit){
		fn=accountName;
		d=deposit;
	}
	return{
		
		set:function(accountName,deposit){
			create(accountName,deposit);
		},
		get:function(){
		return{
			accountName:fn,
			deposit:s,
			info:function(){
				return "account Name: "+this.accountName+"\n"+"deposit: "+this.deposit;
			}
		};
		}
	};
};

function start(){
	//alert("hi");
	var name = document.getElementById("Account Name").value;
	var sal = document.getElementById("Deposit").value;

	var emp = make();
	emp.set(accountName,dep);
	var temp =emp.get();
	if(accountName.localeCompare("")==0 || sal.localeCompare("")==0){
	document.getElementById("result").value="Please Enter Account Name and Dposit";}
	else{
		document.getElementById("result").value=temp.info();
	
	emplList[index]=temp;
	index=index +1;
	}
}

function summaryReport(){
	//alert("hi");
	document.getElementById("summary").value="summary report:"+"\n";
	document.getElementById("rep").style.display="block";
	
	if(index>0){
		
	for(let i=0;i<emplList.length;i++){
		document.getElementById("summary").value =document.getElementById("summary").value  + "Account Name: "+emplList[i].accountName+", deposit: " +emplList[i].salary +"\n";
	}

	}
	else{
		document.getElementById("summary").value ="Create employee object(s) first to review the summary report. Thank you! "
		document.getElementById("summary").style.color="red";
		document.getElementById("summary").style.fontSize="16px";
		if(timer==null) timer = setInterval(goOff,20000);
	}
	

}

function goOff(){
	document.getElementById("rep").style.display="none";
	clearInterval(timer);
	timer=null;
}


window.onload=function(){
	
	document.getElementById("button").onclick=start;
	document.getElementById("getReport").onclick=summaryReport;
};
	