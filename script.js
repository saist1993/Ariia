
function clear() {
			$("#doctor").trigger('reset');
			document.getElementById('choice').disabled=true;
			document.getElementById('userId').value="";
}
//function to make different signUp forms to show/hide according the selection of user type
function setVisibile() {
		var el0 = document.getElementById('tp');
		var el = el0.value;
		
		var el1 = document.getElementById(el);
		
		el1.style.display='block';
		
     for(i = 0; i < el.length; i++) {
       trend = el0[i];
       if (!trend.selected) {
           var el2 = document.getElementById(trend.value);
           el2.style.display='none';
       }   
     }  
	}
	
function myFunc() {
		var el3 = document.getElementById("choice");
		var el4 = document.getElementById("userId");
		
		if (el4.value.length > 0) {
			el3.disabled = false;
		}	
		else {
			el3.disabled = true;
		}	
	
	}

function pageChange(id) {
		element = document.getElementById(id)
		
		if (id=="register"||id=="signUp") {
			window.open("signup.html",'_parent');
		}
		else if (id=="updateprofile")
		{
			window.open("updateProfile.html",'_parent');
		}
		else if(id=="resetpassword"){
			window.open("resetPassword.html",'_parent');
		}
		else if (id=="doctorView") {
			window.open("doctorViewVideo.html",'_parent');
		}
		else {alert(id);
			window.open("noPageError.html",'_parent');		
		}
}

//to make a block visible
function setVisibility(id,visibility) {
		
		var el = document.getElementById(id);
		alert(el)
		var el1 = document.getElementById('opt');
			el1.style.display='none';		
        el.style.display = visibility;
	}