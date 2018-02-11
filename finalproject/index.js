var inputValue = $("#input input:text");
var outputValue = $("#output");

function main() { 
    var randomBooks = books[Math.floor(Math.random() * books.length)];
    document.getElementById("js-output").innerHTML= randomBooks.title; 
    //display choice options with each question. I couldn't figure out how to make them radio buttons or split them onto separate lines
}

//grabbing the input and output



function getBookInformation() {
	$.get('goodreadsHttpHandler.ashx'
	, { bookAuthor: $('#authorTextbox').val(), bookTitle: $('#titleTextbox').val() }
	, function (data) {
	}
	);
}

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











//todoList object
  todoList = {
    //empty items array
    items: [],
    addItem: function(item) {
        //new item object
      item = {
        text: item,
        completed: false,
      }
        //adds item to item array
      this.items.push(item);
    },
    deleteItem: function(index) {
        //from the index, deletes 1 item
      this.items.splice(index, 1);
    },
    completeItem: function(index) {
        //changes completed to be true if it's false
      if(this.items[index].completed == false){
          this.items[index].completed = true;
      }
    },
    updateList: function(item) {
        //clear out what's already there
      outputValue.html("");
        //iterate thorugh all the items in the array
      for (i=0;i<this.items.length;i++) {
          //format text for how to print the item
        var taskText = " " + (i+1) + ". " + this.items[i].text;
          //create a new div element
        var itemElement = $('<div class="item"></div>');
          //new element for the checkbox
        var checkboxElement = $('<input type="checkbox" id="'+i+'" class="complete-item" />');
        if (this.items[i].completed) {
            //strike out the task if it's completed and mark the checkbox
          taskText = taskText.strike();
          checkboxElement.prop('checked', true);
        };
          //tag for deleted element
        var deleteElement = $('<span id="'+i+'" class="delete-item">  X</span>');
          //print the task
        itemElement.html(taskText);
          //append and prepend the checkbox, delete, and the itemelement
        itemElement.prepend(checkboxElement);
        itemElement.append(deleteElement);
        outputValue.append(itemElement);
      }
      $(".delete-item").click(function(){
          //get the id to delete
        id = $(this).attr('id');
        todoList.deleteItem(id);
        todoList.updateList();
      })
      $(".complete-item").change(function(){
          //get the id of hte completed item
        id = $(this).attr('id');
        todoList.completeItem(id);
        todoList.updateList();
      })
    }
  }

//event listener for submitting
  inputValue.change(function(){
      //get the input value
    var inputContents = inputValue.val();
      //if there's nothing there, give a warning
    if (inputContents == "") {
        alert("Please add an item");
    }else{
      todoList.addItem(inputContents);
      todoList.updateList();
    }
  })



var books = [
    
    {
    title: "King Lear",
    genre: ["tragedy"],
    pages: "",
    image: "",
    },
    
    {
    title: "Kite Runner",
    genre: ["historical fiction", "drama"],
    pages: "",
    image: "",
    },
    
    {
    title: "Death of a Salesman",
    genre: ["tragedy"],
    pages: "",
    image: "",
    },
    
    {
    title: "A Separate Peace",
    genre: ["historical fiction", "Naturalism"],
    pages: "",
    image: "",
    },
    
    {
    title: "Perks of Being a Wallflower",
    genre: [""],
    pages: "",
    image: "",
    },
    
    {
    title: "Pride and Prejudice",
    genre: [""],
    pages: "",
    image: "",
    },
        
]




