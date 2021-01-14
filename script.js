$(document).ready(function () {
    function currentTime() {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    currentTime();
    setInterval(function () {
        currentTime();
    }, 1000)
});


$('button').on('click', function () {

    var saveID = $(this).attr("id");
    var taskID = "task-" + saveID;

    console.log(taskID)

        const savedInput = $(`#input-${timeBlock}`).val();
        localStorage.setItem(timeBlock, userData);

});