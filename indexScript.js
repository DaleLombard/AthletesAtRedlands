$(document).ready(function(){
    $("#indexBtn").click(function(){
        $("#btnWrapper").hide();
        $("#wrapper").show();
    });

    $("#indexAthleteBtn").click(function(){
        let role = "Athlete";
        $("#wrapper").hide();
        $("#formWrapper").show();
        $("#athleteFormBtnWrapper, #athleteFormBtn").show();
        $("#athleteFormBtnWrapper, #athleteFormBtn").css("display", "flex");
        console.log(role);
    });

    $("#athleteFormBtn").click(function(){
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let trainingGroupName = $("#trainingGroupName").val();
        console.log(firstName);
        console.log(lastName);
        console.log(trainingGroupName);
        if (firstName.length === 0) {
            alert("Please provide a first name.");
        }else if (lastName.length === 0) {
            alert("Please provide a last name.");
        }else if (trainingGroupName.length === 0) {
            alert("Please provide a training group name.");
        } else {
            $("#formWrapper, #athleteFormBtn").hide();
            $("#accountFormWrapper").show();
            $("#accountFormBtnWrapper, #accountFormBtn").show();
            $("#accountFormBtnWrapper, #accountFormBtn").css("display", "flex");
        }
    });

    $("#accountFormBtn").click(function(){
        let username = $("#username").val();
        let password = $("#password").val();
        let reEnterPassword = $("#reEnterPassword").val();
        console.log(username);
        console.log(password);
        console.log(reEnterPassword);
        if (username.length === 0) {
            alert("Please provide a username.");
        }else if (password.length === 0) {
            alert("Please provide a username.");
        }else if (reEnterPassword !== password) {
            alert("Passwords do not match.");
        } else {
            $("#accountFormWrapper, #accountFormBtn").hide();
        }
    });
});