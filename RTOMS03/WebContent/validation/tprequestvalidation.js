
function validate(form3)
{
	//application no
	var IDpattern=new RegExp("[A-Z a-z 0-9]");
	var txtAppno = document.getElementById("txtAppno").value;
	if(!IDpattern.test(txtAppno))
	{
    document.getElementById("id1").innerHTML="*Enter valid id";
    document.getElementById("id1").style.color="Green";
    if(txtAppno==="")
    {
        document.getElementById("id1").innerHTML="*Don't leave name field empty";
        document.getElementById("id1").style.color="Green";
        return false;
    }
    return false;

	}

 else
 	{
     document.getElementById("id1").innerHTML="";
 	}
	

//customer name
	var txtCname = document.getElementById("txtCname").value;
	var Alphapattern=new RegExp("^[a-zA-Z]");
	
	
	if(!Alphapattern.test(txtCname))
		{
        document.getElementById("id2").innerHTML="*Name field accepts Alphabets only";
        document.getElementById("id2").style.color="Green";
        if(txtCname==="")
        {
            document.getElementById("id2").innerHTML="*Don't leave name field empty";
            document.getElementById("id2").style.color="Green";
            return false;
        }
        return false;

		}
	
     else
     	{
         document.getElementById("id2").innerHTML="";
     	}
	
//email
	
	var txtCemail = document.getElementById("txtCemail").value;
	var Emailpattern=new RegExp("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})");
	
	if(!Emailpattern.test(txtCemail))
	{
    document.getElementById("id3").innerHTML="*Enter a valid email id in format xyz@ymail.com";
    document.getElementById("id3").style.color="Green";
    if(txtCemail==="")
    {
        document.getElementById("id3").innerHTML="*Enter Email ID";
        document.getElementById("id3").style.color="Green";
        return false;
    }
    return false;

	}

 else
 	{
     document.getElementById("id3").innerHTML="";
 	}

	//PHONE
	var txtCphone = document.getElementById("txtCphone").value;
	var Mobilepattern=new RegExp("[7-9]{1}[0-9]{9}");
	
	if(!Mobilepattern.test(txtCphone))
	{
    document.getElementById("id4").innerHTML="* Phone number should start with 7-9 and remaing 9 digit with 0-9";
    document.getElementById("id4").style.color="Green";
    if(txtCphone==="")
    {
        document.getElementById("id4").innerHTML="Enter Phone Number";
        document.getElementById("id4").style.color="Green";
        return false;
    }
    return false;

	}

 else
 	{
     document.getElementById("id4").innerHTML="";
 	}

	
	//address
var  txtCaddress = document.getElementById(" txtCaddress").value;
	
	
	if( txtCaddress==="")
    {
        document.getElementById("id5").innerHTML="*Don't leave Address field empty";
        document.getElementById("id5").style.color="Green";
        return false;

    }
    else
    {
        document.getElementById("id5").innerHTML="";
    }
	
	
//AADHAR NUMBER
	
	var txtAdhar = document.getElementById("txtAdhar").value;
	var Mobilepattern=new RegExp("[0-9]{12}");
	
	if(!Mobilepattern.test(txtAdhar))
	{
    document.getElementById("id6").innerHTML="* Enter a valid 12 digit aadhar number";
    document.getElementById("id6").style.color="Green";
    if(txtAdhar==="")
    {
        document.getElementById("id6").innerHTML="*Please fill the aadhar number";
        document.getElementById("id6").style.color="Green";
        return false;
    }
    return false;

	}

 else
 	{
     document.getElementById("id6").innerHTML="";
 	}
	
//chassis number
	var txtChassis = document.getElementById("txtChassis").value;
	var Chasispattern=new RegExp("[A-Z a-z 0-9]")
	
	if(!Chasispattern.test(txtChassis))
	{
    document.getElementById("id7").innerHTML="* Enter a the chassis number";
    document.getElementById("id7").style.color="Green";
    if(txtChassis==="")
    {
        document.getElementById("id7").innerHTML="*Please fill the chassis number";
        document.getElementById("id7").style.color="Green";
        return false;
    }
    return false;

	}

 else
 	{
     document.getElementById("id7").innerHTML="";
 	}
	
//ENEGINE NUMBER
	var txtEngine = document.getElementById("txtEngine").value;
	var enginepattern=new RegExp("[A-Z a-z 0-9]")
	
	if(!enginepattern.test(txtEngine))
	{
    document.getElementById("id8").innerHTML="* Enter a the chassis number";
    document.getElementById("id8").style.color="Green";
    if(txtEngine==="")
    {
        document.getElementById("id8").innerHTML="*Please fill the chassis number";
        document.getElementById("id8").style.color="Green";
        return false;
    }
    return false;

	}

 else
 	{
     document.getElementById("id8").innerHTML="";
 	}
	
}