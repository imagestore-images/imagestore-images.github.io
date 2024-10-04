var sapi_search_Memory = "images";
var sapi_input_Memory = "search";
var sapi_result_Memory = "result";

const sapi_result_widget = document.getElementById(sapi_result_Memory);
const sapi_input_widget = document.getElementById(sapi_input_Memory);

function sapi_Search(){
    var queery = sapi_input_widget.value;
    const sapi_dataset = document.getElementsByClassName(sapi_search_Memory);

   for (var i = 0;i < sapi_dataset.length;i++){
        if (sapi_dataset[i].innerHTML.toLowerCase().includes(queery.toLowerCase())){
            sapi_dataset[i].style.display = 'block';
        }
        else {
            sapi_dataset[i].style.display = 'none';
        }
   }
}

sapi_result_widget.addEventListener('click', ()=>{
   sapi_Search();
});

sapi_input_widget.addEventListener('keydown', function(event){
    if (event.key == "Enter"){
        sapi_Search();
    }
    else {

    }
})