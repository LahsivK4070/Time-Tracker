var dailyLink = document.querySelector(".daily");
var weeklyLink = document.querySelector(".weekly");
var monthlyLink = document.querySelector(".monthly");

dailyLink.addEventListener("click", function () {

    dailyLink.style.color = "white";
    weeklyLink.style.color = "hsl(236, 100%, 87%)";
    monthlyLink.style.color = "hsl(236, 100%, 87%)";
    
    document.querySelector(".pTime1").innerHTML = "YEsterday - 7hrs";
    document.querySelector(".pTime2").innerHTML = "Yesterday - 2hrs";
    document.querySelector(".pTime3").innerHTML = "Yesterday - 1hrs";
    document.querySelector(".pTime4").innerHTML = "Yesterday - 1hrs";
    document.querySelector(".pTime5").innerHTML = "Yesterday - 3hrs";
    document.querySelector(".pTime6").innerHTML = "Yesterday - 1hrs";

    document.querySelector(".t1").innerHTML = "5hrs";
    document.querySelector(".t2").innerHTML = "1hrs";
    document.querySelector(".t3").innerHTML = "0hrs";
    document.querySelector(".t4").innerHTML = "1hrs";
    document.querySelector(".t5").innerHTML = "1hrs";
    document.querySelector(".t6").innerHTML = "0hrs";
});

weeklyLink.addEventListener("click", function () {

    weeklyLink.style.color = "white";
    dailyLink.style.color = "hsl(236, 100%, 87%)";
    monthlyLink.style.color = "hsl(236, 100%, 87%)";
    
    document.querySelector(".pTime2").innerHTML = "Last Week - 36hrs";
    document.querySelector(".pTime1").innerHTML = "Last Week - 8hrs";
    document.querySelector(".pTime3").innerHTML = "Last Week - 7hrs";
    document.querySelector(".pTime4").innerHTML = "Last Week - 5hrs";
    document.querySelector(".pTime5").innerHTML = "Last Week - 10hrs";
    document.querySelector(".pTime6").innerHTML = "Last Week - 2hrs";

    document.querySelector(".t1").innerHTML = "32hrs";
    document.querySelector(".t2").innerHTML = "23hrs";
    document.querySelector(".t3").innerHTML = "13hrs";
    document.querySelector(".t4").innerHTML = "4hrs";
    document.querySelector(".t5").innerHTML = "5hrs";
    document.querySelector(".t6").innerHTML = "2hrs";
});

monthlyLink.addEventListener("click", function () {

    monthlyLink.style.color = "white";
    weeklyLink.style.color = "hsl(236, 100%, 87%)";
    dailyLink.style.color = "hsl(236, 100%, 87%)";
    
    document.querySelector(".pTime1").innerHTML = "Last Month - 128hrs";
    document.querySelector(".pTime2").innerHTML = "Last Month - 29hrs";
    document.querySelector(".pTime3").innerHTML = "Last Month - 19hrs";
    document.querySelector(".pTime4").innerHTML = "Last Month - 18hrs";
    document.querySelector(".pTime5").innerHTML = "Last Month - 23hrs";
    document.querySelector(".pTime6").innerHTML = "Last Month - 11hrs";

    document.querySelector(".t1").innerHTML = "103hrs";
    document.querySelector(".t2").innerHTML = "23hrs";
    document.querySelector(".t3").innerHTML = "13hrs";
    document.querySelector(".t4").innerHTML = "11hrs";
    document.querySelector(".t5").innerHTML = "21hrs";
    document.querySelector(".t6").innerHTML = "7hrs";
});