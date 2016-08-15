$(document).ready(function()
{
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});

/** Check Stored Data Functions **/

// New User Function
function Submit()
{
    alert("Button is working submit");
    var newUser = document.getElementById("password").value


    //Get tag and store it
    localStorage.setItem(document.getElementById("battle-net-tag").value, newUser);
}

// Search User Function
function Lookup()
{
    if (localStorage.getItem(document.getElementById("battle-net-tag-search").value) == null)
    {
        alert("Battle.net tag not found. Did you register yet or type it in incorrectly?");
    }
    else
    {
        var storedPassword = localStorage.getItem(document.getElementById("battle-net-tag-search").value)
            //Debugging Alerts
            // Check to see if right information is being saved and passed through

        // alert(storedPassword);
        // alert(document.getElementById("password-search").value);

        if (storedPassword == document.getElementById("password-search").value)
        {
            alert("We received your application and are looking into it now!");
        }
        else
        {
            alert("We have not received anything yet with those credentials. Can you check your spelling or go back and submit!s");
        }
    }
}
