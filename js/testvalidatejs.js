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
			cpPassword: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
        },
        //For custom messages
        messages: {
            firstName:{
                required: "Enter a username",
                minlength: "Enter at least 5 characters"
            },
            lastName:{
                required: "Enter a lastname",
                minlength: "Enter at least 5 characters"
            },
            battleNetTag:{
                required: "Enter a tag",
                minlength: "Enter at least 5 characters"
            },
            rank:{
                required: "Enter a rank",
                minlength: "Enter at least 5 characters"
            },
            password:{
                required: "Enter a password",
                minlength: "Enter at least 5 characters"
            },
            cpPassword:{
                required: "Enter the same password",
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
     });
     