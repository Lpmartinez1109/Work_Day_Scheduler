$(document).ready(function(){

    var description = $(".description");

    $.each($("*[data-text]"), function(index, element){
        var test = ($(element).attr("data-text"));
        var array = test.split(', ')
        if (array === description.getHours){
            this.classList.add("current")
        }
        else if (array <d.getHours) {
            this.classList.add("past")
        }
        else {
            this.classList.add("future")
        }
    })

}
)



// var day= new Date();
// document.write("getTime() : " + day.getTime() ); 



// console.log(day);


// var time = (".description")
// for (let i = 0; i < time.length; i++) {
//     var timeArr = time[i];
//     var timeEl = JSON.stringify(timeArr)
//     console.log(timeEl.dataValue)
// }
// function save() 
// { var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
// }
// var date = moment();
// console.log(date);

if (localStorage[".description"])
{
    var description = localStorage[".description"] ;
    document.getElementById(".description").value = description;
    alert("Your event has been saved")
}

var saveBtn = document.getElementById("save");
    if(saveBth){
        addEventListener("click", save())
    };
    function save(){
        // var description = document.getElementById(".description").value;
        //localStorage["user"] = user ;
            
            localStorage.setItem(".description", description) ;
            alert("Your event has been saved!") ;
            $(".description").each(function () {
                $(this).val(localStorage.getItem("item-" + $(this).attr("data-value")));
            });
            $(".description").on("keyup", function (itm) {
                localStorage.setItem("item-" + $(this).attr("data-value"), $(this).val());
            })
            preventDefault();
        };
        console.log(saveBtn);