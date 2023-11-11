// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    var today = dayjs();

    function displayTime() {
        $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
    }
    displayTime();

    var timeboxEl = document.querySelectorAll(".time-block");
    for (var i=0; i < timeboxEl.length; i++) {
        var hour = today.format("H");
        console.log(hour);
        var timeboxhour = Number(timeboxEl[i].id);
        if (timeboxhour < hour) {
            timeboxEl[i].childNodes[3].classList.add("past")
        }
        else if (timeboxhour == hour) {
            timeboxEl[i].childNodes[3].classList.add("present")
        }
        if (timeboxhour > hour) {
            timeboxEl[i].childNodes[3].classList.add("future")
        }
    }       

})

