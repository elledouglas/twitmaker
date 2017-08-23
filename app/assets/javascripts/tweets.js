// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function (){

// LISTEN FOR THE SUBMIT EVENT ON THE FORM
  var newTweetForm = document.querySelector('#new_tweet');


  newTweetForm.addEventListener('submit', function(eventObject){
    eventObject.preventDefault();
    var todoElement = document.querySelector('#create-tweet')

    //  SUBMIT THE FORM via AJAX
    $.ajax({
      url: this.getAttribute('action'),
      method: this.getAttribute('method'),
      data: {tweet:},
      dataType: 'json'
    }).done(function(data){

    })


  })
})
