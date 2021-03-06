document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  if(document.getElementById("themeButton")){
    document.getElementById("themeButton").addEventListener('click', () =>{
      console.log('do it');
      var result = chooseTheme();
      document.getElementById('result').innerHTML=result;
    });
  }
});

function chooseTheme(){
  var nouns = [
    'Sheep',
    'Super Mario',
    'Sonic The Hedgehog',
    'fish people',
    'Goblin',
    'two-headed creature',
    'pikachu',
    'drunk person',
    'cloud strife',
    'a grandma/pa',
    'Sailor Moon',
    'a potato',
    'a ghost',
    'dragons',
    'Friends and/or enemies',
    'clowns',
    'a single mime',
    'a vampire / vampires / dracula',
    'new york city',
    'ducktales',
    'the ninja turtles',
    'hamburgers',
    'cats and dogs',
    'garfield',
    'centaurs',
    'shoot for the moon',
    'fruit tree',
    'a human being',
    'an octopus',
    'a toaster',
    'cuties / QTs',
    'pizza(s)',
    'a dentist',
    'cowboy',
    'burglar',
    'elephants',
    'a mummy',
    'the sphinx',
    'alien/s',
    'a monster',
    'dinosaur/s',
    'a couple',
    'a muscular tiger-person',
    'a swordfighter',
    'shrek',
    'a beautiful person',
    'a tomato',
    'zombies',
    'a bus',
    'a pineapple',
    'wrestler/s',
    'a magician',
    'a powerful animal',
    'hot dog man',
    'several children pretending to be one large adult',
    'a chef',
    'a robot',
    'a giraffe',
    'a cat person',
    'a skeleton'
  ];
  var verbs = [
    'plays final fantasy at',
    'are/is being cute',
    'party/parties/partying',
    'playing videogames in/at',
    'skateboarding',
    'joins a punk band',
    'falls in love',
    'listens to records',
    'spends the day at a grocery store',
    'monster',
    'student loans',
    'has/have sex',
    'has the adventure of a lifetime',
    'scratches',
    'controls lightning',
    'shoots fireballs',
    'time travels to the 90s',
    'uses tinder',
    'smiles',
    'goes on a date',
    'go/goes back to highschool',
    'feels existential dread',
    'enters a parallel universe',
    'is/are insecure',
    'plays basketball',
    'HOST/S A PIZZA PARTY',
    'road rage',
    'has mommy issues',
    'drinks coffee',
    'swims',
    'has dinner',
    'eats a donut',
    'goes to',
    'feels self conscious about their fashion',
    'feels confident walking',
    'does laundry',
    'grows really large',
    'works on a food truck',
    'wait/s tables',
    'fights',
    'meditate/s',
    'feels sick',
    'gooes on vacation',
    'enters a swimsuit contest',
    'says goodbye',
    'feels heartbreak',
    'is rejected',
    'fight/s zombies',
    'surfs the internet',
    'paints something',
    'plays frisbee',
    'makes sphaghetti',
    'becomes president',
    'punches',
    'kicks',
    'looks in the mirror',
    'thinks about the past',
    'dance/s',
    'sips some tea',
    'breaks up',
    'learns karate',
    'learns to love again',
    'try to go to the movies',
    'transforms into a werewolf',
    'finds his grandma',
  ];
  var places = [
    'a castle',
    'in a house',
    'underwater',
    'a pizza shop',
    'mcdonalds',
    'ATLANTIS',
    'at a casino',
    'in the DESERT',
    'an ice world',
    'in the city',
    'space',
    'at the dentist',
    'a dinosaur museum',
    'the dentist',
    'the street',
    'a bakery',
    'a coffee shop',
    'a cemetary',
    'a music show',
    'a strip club',
    'a spaceship',
    'a grocery store',
    'a restauraunt',
    'a school',
    'inside a computer',
    'a dungeon',
    'a fashion show',
    'a farm',
    'an aquarium',
    'on a train',
    'on a bus',
    'hell',
    'the dentist',
    'heaven',
    'haunted house',
    'karate dojo',
    'on a cliff',
    'a plane',
    'disneyworld',
    'da beach',
    'on the nyc subway',
    'wrestling ring',
    'under a full moon',
  ];
  var modifiers = [
    'with knives',
    'with nunchaku',
    'with guitars',
    'with a doggo',
    'wearing tight jeans',
    'with their family',
    'on halloween',
    'on christmas',
    'on a boat',
    'under a funky tree',
    'on a grandma/pa',
    'on a multi-legged cat',
    'and falls in love',
    'and a turtle is there too',
    'with a dentist',
    'w/ their dad',
    'wearing a cape',
    'wearing a mask',
    'nearby a person making sphagetti',
    'next to a large cat',
    'riding a pineapple',
    'wielding a katana',
    'holding a hot drink',
    'holding a championship belt',
    'riding a doggo',
    'in summer',
    'in winter'
  ];
  var noun = nouns[Math.floor(Math.random() * nouns.length)];
  var verb = verbs[Math.floor(Math.random() * verbs.length)];
  var place = places[Math.floor(Math.random() * places.length)];
  var modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
  return noun + ' ' + ' ' + verb + ' ' + ' ' + place + ' ' + ' ' + modifier;

}
