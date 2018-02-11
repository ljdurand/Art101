//code taken from stack overflow
$(function () {
         $(".like").click(function () {
             var input = $(this).find('.qty1');
             input.val(parseInt(input.val())+ 1);
    
         });
     $(".dislike").click(function () {
         var input = $(this).find('.qty2');
         input.val(parseInt(input.val()) + 1);
     });
  });


//function to calculate pages per day
function calculate(){
    var pages = document.getElementById("pages").value;
//    error checking for no page number inserted
    if(pages === ""){
       alert("Please insert the total amount of pages in the book.");
    }
//    get elements and change value to 0 if there is no input
    var days = document.getElementById("days").value;
    if (days == ""){
        days = 0;
    }
    var weeks = document.getElementById("weeks").value;
    if (weeks == ""){
        weeks = 0;
    }
    var months = document.getElementById("months").value;
    if(months == ""){
        months = 0;
    }
    var year = document.getElementById("year").value;
    if(year == ""){
        year = 0;
    }
//    calculate total number of days and calculate pages per day
    var totalDays = days*1 + weeks*7 + months*30 + year*365; 
    var pagesPerDay = (pages/totalDays);
        document.getElementById("space").innerHTML = "You have to read " + pagesPerDay + " pages per day in order to finish your book in " + year + " years, " + months + " months, " + weeks + " weeks, and " + days + " days.";
}


