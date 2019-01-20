document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  document.getElementById("themeButton").addEventListener('click', () =>{
    console.log('do it');
    var result = chooseTheme();
    document.getElementById('result').innerHTML=result;
  });

});

function chooseTheme(){
  var nouns = [
    "sonic the hedgehog ",
    "dracula ",
    "pizza ",
    "power rangers "
  ];
  var verbs = [
    " runs to ",
    " eats at ",
    " falls in love at ",
    " goes to "
  ];
  var places = [
    " walmart ",
    " halloween store ",
    " hell ",
    " hamburger restaurant ",
    " the zoo ",
    " the aquarium "
  ];
  var modifiers = [
    " in space",
    " with skateboards",
    " while brushing their teeth",
    " on sale",
    " in winter"
  ];
  var noun = nouns[Math.floor(Math.random() * nouns.length)];
  var verb = verbs[Math.floor(Math.random() * verbs.length)];
  var place = places[Math.floor(Math.random() * places.length)];
  var modifier = modifiers[Math.floor(Math.random() * places.length)];
  return noun + verb + place + modifier;

}
