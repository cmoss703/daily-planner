// Time interval to be deployed once the page has fully loaded

$(document).ready(function () {
    function currentTime() {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    currentTime();
    setInterval(function () {
        currentTime();
    }, 1000);

    // function called to fill in any boxes that have a task saved in local storage

    populateBoxes()

    function populateBoxes() {

        for (var j = 9; j < 20; j++) {

            var retrieveID = "#task-hour" + [j]

            $(retrieveID).val(localStorage.getItem("saved hour" + [j]));

        }
    };

    // when the save button is clicked, the button ID is changed to the taskID and then saved to local storage to be called in the function above.

    $(".btn-success").on("click", function () {

        var saveID = $(this).attr("id")
        taskID = "#task-" + saveID;

        console.log("saved " + taskID);

        var userData = $(taskID).val();

        localStorage.setItem("saved " + saveID, userData);

    });

    // when the clear button next to a task is clicked, the task is deleted from storage

    $(".btn-danger").on("click", function () {

        var clearID = $(this).attr("id")
        var hourID = "hour" + clearID.substring(5, 7);
        taskID = "#task-" + hourID;

        console.log("cleared " + taskID);

        localStorage.removeItem("saved " + hourID);

        populateBoxes();

    });

    // this function updates the class of a time box based on whether the respective hour has passed, 
    // matches the current hour (retrieved using Moment), or has yet to occur.
    // The new class corresponds to a css style which changes the color of that box.
    
    timePast();

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

    // When the "Clear Schedule" button is clicked, all items are cleared from local storage and from the task boxes.

    $("#clearDay").on("click", function () {

        localStorage.clear();

        populateBoxes();

        console.log("Day cleared");

    });

});
