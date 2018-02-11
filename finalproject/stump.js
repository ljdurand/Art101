var inputValue = $("#input input:text");
var outputValue = $("#output");


//top button function
function goTop(){
    scroll(0,0);
}

//scroll function from stack overflow
(function () {

    var scrollHandle = 0,
        scrollStep = 5,
        parent = $("#container");

    //Start the scrolling process
    $(".panner").on("mouseenter", function () {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);

        $(this).addClass('active');

        startScrolling(direction, scrollStep);
    });

    //Kill the scrolling
    $(".panner").on("mouseleave", function () {
        stopScrolling();
        $(this).removeClass('active');
    });

    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function () {
                var newOffset = parent.scrollLeft() + (scrollStep * modifier);

                parent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }

}());


//function for adding book from dropdown to input field from stack overflow
$(function(){
    $('.special_field_link').click(function() {
                                      $("#new-task").val($(this).html());
                                  });
});





//genre object
   var genre = {
       "Tragedy" : ["Death of a Salesman" + "<img src = 'images/DeathOfASalesman.jpg' style='width: 150px;height: 215px;margin-right: 5px'>" , 
                    "King Lear" + "<img src = 'images/king-lear-william-shakspeare-paperback-cover-art.jpg' style='width: 150px;height: 215px;margin-right: 5px'>", 
                    "A Separate Peace" +  "<img src = 'images/516M1eQGQQL._SY344_BO1,204,203,200_.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>",
                    "Of Mice and Men" + "<img src = 'images/ofMiceAndMen.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>",
                    "The Crucible" + "<img src = 'images/crucible.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>"],
       "Fantasy" : ["Peter Pan" +  "<img src = 'images/peterpan.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>", 
                    "The Once and Future King" + "<img src = 'images/onceandfutureking.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>",
                    "The Lion, the Witch, and the Wardrobe" + "<img src = 'images/lionwitchwardrobe.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>"],
       "Children's Literature" : ["The Little Prince" + "<img src = 'images/littlePrince.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>", 
                                  "The Adventures of Tom Sawyer" + "<img src = 'images/tomsawyer.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>",
                                  "The Lion, the Witch, and the Wardrobe" + "<img src = 'images/lionwitchwardrobe.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>"],
       "Historical Fiction" : ["A Tale of Two Cities" + "<img src = 'images/taleOfTwoCities.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>", 
                               "Kite Runner" + "<img src = 'images/77203.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>", 
                               "The Great Gatsby" + "<img src = 'images/gatsby.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>",
                              "The Crucible" +  "<img src = 'images/crucible.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>"],
       "Coming of Age" : ["The Perks of Being a Wallflower" + "<img src = 'images/Perksofbeingwallflower1.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>", 
                          "A Separate Peace" +  "<img src = 'images/516M1eQGQQL._SY344_BO1,204,203,200_.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>",
                         "The Outsiders" +  "<img src = 'images/outsiders.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>"],
       "Science Fiction" : ["Flowers for Algernon" + "<img src = 'images/flowers_for_algernon.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>",
                            "1984" + "<img src = 'images/1984-book-cover.jpeg' style = 'width: 150px;height: 215px;margin-right: 5px'>",
                           "Twenty Thousand Leagues Under the Sea" + "<img src = 'images/twenty.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>"],
       "Satire" : ["Pride and Prejudice" + "<img src = 'images/PrideAndPrejudice.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>", 
                   "The Adventures of Tom Sawyer" + "<img src = 'images/tomsawyer.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>", 
                   "The Once and Future King" + "<img src = 'images/onceandfutureking.jpg' style = 'width: 150px;height: 215px;margin-right: 5px'>"], 
       }
//   pages object
    var pages = {
        "0-150" : ["Death of a Salesman", "King Lear", "The Little Prince", "The Crucible"],
        "150-300" : ["A Separate Peace", "The Perks of Being a Wallflower", "Of Mice and Men", "Peter Pan", "The Adventures of Tom Sawyer", "The Great Gatsby", "The Lion, the Witch, and the Wardrobe", "The Outsiders"],
        "300+" : ["Kite Runner", "Pride and Prejudice", "Flowers for Algernon", "A Tale of Two Cities", "The Once and Future King", "1984", "Twenty Thousand Leagues Under the Sea"],   
    }
    
    
// all the code for the random book generator
    
//comparing the pages and length
function main(){
    //go get the array of books based on the user's genre preference
    var bookGenre = checkGenre(); 
    console.log("The book genre");
    console.log(bookGenre);
    //go get the array of books based on the user's pages preference
    var bookPages = checkPages();
    console.log("The book pages");
    console.log(bookPages);
    for(var i = 0; i < bookGenre.length; i++){
        for(var j = 0; j < bookPages.length; j++){
            if(bookPages[j] == bookGenre[i]){
                $("#js-output").html(bookGenre[i]);
            }else{
                $("#js-output").html(bookGenre[0]);
            }
        }
    }
}


// making the array random
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//finding the genre from the genre object
function checkGenre(){
    //get the user's inputed genre preference
    var genreInput = $("#genre").val();
    console.log("genreInput: " + genreInput);
    //change the object into an array of arrays with keys and values of the form [ [key, value], [key, value]]
    var genreArray = Object.entries(genre);
    console.log("entries: "+ Object.entries(genre));
    //iterate throught the length of the array of all the keys and their values
    for(var i = 0; i < genreArray.length; i++){
        console.log("genreArray: " + genreArray[i][0]);
        //check if the firt element in each of the array elements of the array matches the user's genre preference
        if(genreArray[i][0] == genreInput){
            //once it finds that the genres match, take off the genre key from the array
            genreArray[i].shift();
            //concatenate the array to only be the array for the specified key that matches the user's genre preference
            var merged = [].concat.apply([], genreArray[i]);
            console.log("new genre array: " +merged);
            merged = shuffleArray(merged);
            console.log("shuffled array: "+ merged);
            return merged;
        }
    }
}

//finding the pages from the pages object
function checkPages(){
    //get the user's inputed pages preference
    var pagesInput = $("#pages").val();
    console.log("pagesInput: " + pagesInput);
    //change the object into an array of arrays with keys and values of the form [ [key, value], [key, value]]
    var pagesArray = Object.entries(pages);
    console.log("entries: "+ Object.entries(pages));
    //iterate throught the length of the array of all the keys and their values
    for(var i = 0; i < pagesArray.length; i++){
        console.log("pagesArray: " + pagesArray[i][0]);
        //check if the firt element in each of the array elements of the array matches the user's pages preference
        if(pagesArray[i][0] == pagesInput){
            //once it finds that the pages match, take off the pages key from the array
            pagesArray[i].shift();
            //concatenate the array to only be the array for the specified key that matches the user's pages preference
            var merged = [].concat.apply([], pagesArray[i]);
            console.log("new pages array: " +merged);
            merged = shuffleArray(merged);
            console.log("shuffled array: "+ merged);
            return merged;
            return merged;
        }
    }
}