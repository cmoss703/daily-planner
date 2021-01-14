$(document).ready(function () {
    function currentTime() {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    currentTime();
    setInterval(function () {
        currentTime();
    }, 1000);


$(".btn-success").on("click", function () {

    var saveID = $(this).attr("id");
    var taskID = "task-" + saveID;

    console.log(taskID);

    // var userData = taskID.valueOf();

    // var savedText = localStorage.setItem(savedText, userData);

});

$(".btn-danger").on("click", function() {

    var clearID = $(this).attr("id");
    var taskID = "#task-hour" + clearID.substring(5 , 7);

    console.log(taskID);

    $(taskID).text('');

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

timePast();

});
