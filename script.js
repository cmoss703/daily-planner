$(document).ready(function () {
    function currentTime() {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    currentTime();
    setInterval(function () {
        currentTime();
    }, 1000);

    populateBoxes()

    function populateBoxes() {

    for (var j = 9; j < 20; j++) {

        var retrieveID = "#task-hour" + [j]

        $(retrieveID).val(localStorage.getItem("saved hour" + [j]));

    }
};

// var obj = {title: attribute}

$(".btn-success").on("click", function () {

    var saveID = $(this).attr("id")
    taskID = "#task-" + saveID;

    console.log($(taskID).val());

    var userData = $(taskID).val();

    localStorage.setItem("saved " + saveID, userData);

});

$(".btn-danger").on("click", function () {

    var clearID = $(this).attr("id")
    taskID = "#task-hour" + clearID.substring(5, 7);

    console.log(taskID);

    $(taskID).val('');

});

function timePast() {

    var hour = moment().hours();

    for (var i = 9; i < 20; i++) {

        var eachHour = $("#task-hour" + [i])

        if (hour > i) {

            eachHour.addClass("past");

        } else if (hour === i) {

            eachHour.addClass("present")

        } else {

            eachHour.addClass("future")

        };
    }

};

$("#clearDay").on("click", function () {

    localStorage.clear();

    populateBoxes();

});

timePast();

});
