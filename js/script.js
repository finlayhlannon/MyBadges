var usedCodes = [
  "example", "finlay", "hayes", "aspect", "bhavesh", "death", "bunny", "far", "jedi princess chelsea", "jediprincesschelsea", "melo", "minions", "nnn", "random mortis", "randommortis", "samriddhi", "shivnotech", "unimmortalpanda", "zain", "grxim", "nxtviv", "pepsi", "pepsi.<3", "rishii", "marv", "mjrn"
];

function handleSubmit(event) {
  event.preventDefault();
  var input = document.querySelector('.search-input');
  var id = input.value.trim().toLowerCase();
  if (id == "jedi princess chelsea") {
    var url = 'mybadges.vercel.app/badges/jediprincesschelsea.html';
  }
  else if (id == "random mortis") {
    var url = 'mybadges.vercel.app/badges/randommortis.html';
  }
  else if (id == "pepsi.<3") {
    var url = 'mybadges.vercel.app/badges/pepsi.html';
  }
  else{
    var url = 'mybadges.vercel.app/badges/' + id + '.html';
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
