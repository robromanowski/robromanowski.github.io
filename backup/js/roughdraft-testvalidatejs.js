// Validate the form
$("#formValidate").validate({
        rules: {
            firstName: {
                required: true,
                minlength: 5
            },
            lastName: {
                required: true,
                minlength: 5
            },
            battleNetTag: {
                required: true,
                minlength: 5
            },
            rank: {
                required: true,
                minlength: 1
            },
            password: {
				required: true,
				minlength: 5
			},
                        /* to be used later */
                        /*
                                        cpassword: {
                                            required: true,
                                            minlength: 5,
                                            equalTo: "#password"
                                        },
                        */
            
			
               
        //For custom messages
        messages: {
            firstName:{
                required: "Enter a First name",
                minlength: "Enter at least 5 characters"
            },
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     }});
     