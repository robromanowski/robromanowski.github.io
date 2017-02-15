$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});

/** Check Stored Data Functions **/

// New User Function
function Submit() {
    // Using an alert to test button action - submit
    alert("Submitted :)");

    var newUser = document.getElementById("password").value

    //Get tag and store it
    localStorage.setItem(document.getElementById("battleNetTag").value, newUser);
}

// Display toast alert
// displays if submit is successful
function displayToast() {
    Materialize.toast('Submitted. All set!', 4000);
}

// Search User Function
function Lookup() {
    if (localStorage.getItem(document.getElementById("battle-net-tag-search").value) == null) {
        //alert("Battle.net tag not found. Did you register yet or type it in incorrectly?");
        Materialize.toast('Battle.net tag not found. Did you register yet or did you type it in incorrectly?', 4000);
    } else {
        var storedPassword = localStorage.getItem(document.getElementById("battle-net-tag-search").value)
            //Debugging Alerts
            // Check to see if right information is being saved and passed through

        // alert(storedPassword);
        // alert(document.getElementById("password-search").value);

        if (storedPassword == document.getElementById("password-search").value) {
            //alert("We received your application and are looking into it now!");
            Materialize.toast('We received your application and are looking into it now!', 4000);
        } else {
            //alert("We have not received anything yet with those credentials. Can you check your spelling or go back and submit!s");
            Materialize.toast('Your Battle.net tag name was found, but password seems wrong', 4000);
        }
    }
}

function SuggestGame() {
    // Using an alert to test button action - submit
    // alert("Submitted :)");
    
    if(document.getElementById("name-of-game").value == '') {
        
    // test to alert if game was empty, if it was empty, should trigger here, if not move down to else statement
    // alert('You did not input a game, silly!');
        
    // Display the toast for to show them it was succesful
    Materialize.toast('Looks like you forget to suggest a game name!', 4000);
        
    } else {

    // Set a variable for the name
    var newGame = document.getElementById("name-of-game").value

    //Get tag and store it
    localStorage.setItem(document.getElementById("name-of-game").value, newGame);
    
    // Display the toast for to show them it was succesful
    Materialize.toast('Thanks for your suggestion! :)', 4000);
        
    // test to alert back if it detected the right game you typed in
    //alert('your game.value was = ' + newGame);
        
    // Close the modal automatically
     $('#modal1').modal('close');
    }
}

    

/*
// Disable button function
// Disable all fields so you can hit submit until it detects all are filled out
$(document).ready(function () {
    requiredTest();
    $('#firstName, #lastName, #battleNetTag, #rank, #password, #cpPassword').change(requiredTest);
});
*/

/*
function requiredTest() {
    if ($('#firstName').val().length > 4 &&
        $('#lastName').val().length > 4 &&
        $('#battleNetTag').val().length > 4 &&
        $('#rank').val().length > 0 &&
        $('#password').val().length > 4 &&
        $('#cpPassword').val().length > 4 &&
        $('#password').val() == $('#cpPassword').val()) {
        $("button[type=submit]").prop("disabled", false);
    } else {
        $("button[type=submit]").prop("disabled", true);
    }
}
*/

/*
$('#firstName, #lastName, #battleNetTag, #rank, #password, #cpPassword').bind('keyup', function() {
    if(allFilled()) $('#submitAppButton').removeAttr('disabled');
});

function allFilled() {
    var filled = true;
    $('body input').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}
*/