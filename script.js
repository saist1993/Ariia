
//include header in html

function clear() {
			$("#").trigger('reset');
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

//forget modal script
function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
}
/*
//Login Modal Script
$(document).ready(function(){
    $('.modal-footer button').click(function(){
		var button = $(this);

		if ( button.attr("data-dismiss") != "modal" ){
			var inputs = $('form input');
			var title = $('.modal-title');
			var progress = $('.progress');
			var progressBar = $('.progress-bar');

			inputs.attr("disabled", "disabled");

			button.hide();

			progress.show();

			progressBar.animate({width : "100%"}, 100);

			progress.delay(1000)
					.fadeOut(600);

			button.text("Close")
					.removeClass("btn-primary")
					.addClass("btn-success")
    				.blur()
					.delay(1600)
					.fadeIn(function(){
						title.text("Log in is successful");
						button.attr("data-dismiss", "modal");
					});
		}
	});

	$('#myModal').on('hidden.bs.modal', function (e) {
		var inputs = $('form input');
		var title = $('.modal-title');
		var progressBar = $('.progress-bar');
		var button = $('.modal-footer button');

		inputs.removeAttr("disabled");

		title.text("Log in");

		progressBar.css({ "width" : "0%" });

		button.removeClass("btn-success")
				.addClass("btn-primary")
				.text("Ok")
				.removeAttr("data-dismiss");
                
	});
});*/