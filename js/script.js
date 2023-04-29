var usedCodes = [
  "example", "finlay", "hayes", "aspect", "bhavesh", "death", "bunny", "far", "jedi princess chelsea", "jediprincesschelsea", "melo", "minions", "nnn", "random mortis", "randommortis", "samriddhi", "shivnotech", "unimmortalpanda", "zain", "grxim", "nxtviv", "pepsi", "pepsi.<3", "rishii", "marv", "mjrn"
];

function handleSubmit(event) {
  event.preventDefault();
  var input = document.querySelector('.search-input');
  var id = input.value.trim().toLowerCase();
  if (id == "jedi princess chelsea") {
    var url = 'file:///C:/Users/finla/OneDrive/Documents/Code/ID/badges/jediprincesschelsea.html';
  }
  else if (id == "random mortis") {
    var url = 'file:///C:/Users/finla/OneDrive/Documents/Code/ID/badges/randommortis.html';
  }
  else if (id == "pepsi.<3") {
    var url = 'file:///C:/Users/finla/OneDrive/Documents/Code/ID/badges/pepsi.html';
  }
  else{
    var url = 'file:///C:/Users/finla/OneDrive/Documents/Code/ID/badges/' + id + '.html';
  }
  
  // check if the code is in the usedCodes array
  if (usedCodes.includes(id)) {
    window.location.href = url;
  } else {
    alert('Invalid code!');
  }
}

var submitButton = document.querySelector('.search-button');
submitButton.addEventListener('click', handleSubmit);

var inputField = document.querySelector('.search-input');
inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleSubmit(event);
  }
});
