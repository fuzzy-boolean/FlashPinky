let counter = 0;
let exampleCards = [
  {
    ID: 1,
    content: {
      front: "lingua",
      back: "language in latin",
      phrases: ["lingua latina lingua mortua non est."],
    },
    tags: ["latin", "vocab"],
    rating: 0,
  },
  {
    ID: 2,
    content: {
      front: "język",
      back: "language in polish",
      phrases: ["Lubię uczyć się języków obcych."],
    },
    tags: ["polish", "vocab"],
    rating: 0,
  },
  {
    ID: 3,
    content: {
      front: "declare an Array",
      back: "arr = [1, 2]",
      remarks: "Expressions 1 and 3 are optional.",
    },
    tags: ["JS", "coding"],
    rating: 0,
  },
  {
    ID: 4,
    content: {
      front: "C'est chouette!",
      back: "هذا رائع",
      phrases: ["هذا رائع"],
    },
    tags: ["french", "phrases"],
    rating: 0,
  },
];

//// INTERVALLS! ////
// tiers is the table to determine how long a card will be postponed.
// keys are tiers, the content is the number of days.
const tiers = {
  1: 1,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 7,
};

function makeDaylyDeck() {
  // 1. search for all 'active' & 'due' (today or in the past) cards in the database.
  // 2. append theses to an array and shuffle it.
  // 3. return the array. (lenth of the array could be writen to a variable in global scope!)
}

function startTest(numberOfCards) {
  // 0 = all cards in the daylyDeck
  // 1. display the current card's (daylyDeck[counter]) FRONT
  // 2. onEvent (space or button): display  current card's BACK
  // 3. onEvent "remembered" (space or button):
  //    - set new 'due date' and promote the card:
  //      - DUE = today + tiers[TIER] days (IN THE DATABASE!)
  //      - tier++; (IN THE DATABASE!)
  // 4. onEvent "forgotten" (f or button):
  //    - add to immidiate review after the test
  //    - demote TIER: tier--; (IN THE DATABASE!)
  //    - set DUE to tomorrow (IN THE DATABASE!)
  // 5. if counter != daylyDeck.lenght : counter++; repeat.
  //      - else:
  //        - stop test
  //        - counter = 0;
  //        - start immidiate review
  // 6. End-Matter: Evaluation and stuff ...
}

function displayCurrentCard() {
  card = exampleCards[counter];
  document.getElementById("card-front").textContent = card.content.front;
  document.getElementById("card-back").textContent = "?";

  // changes color of front-frame depending on rating. as a simple feedback
  if (card.rating > 2) {
    document.getElementById("card-front").style.borderColor = "green";
  } else if (card.rating < -2) {
    document.getElementById("card-front").style.borderColor = "red";
  } else {
    document.getElementById("card-front").style.borderColor = "yellow";
  }
}

function displayBack() {
  document.getElementById("card-back").textContent =
    exampleCards[counter].content.back;
}

//// BUTTONS! ////

document.getElementById("remembered").addEventListener("click", function () {
  counter = (counter + 1) % exampleCards.length;
  exampleCards[counter].rating++;
  displayCurrentCard();
});

document.getElementById("forgotten").addEventListener("click", function () {
  counter = (counter + 1) % exampleCards.length;
  exampleCards[counter].rating--;
  displayCurrentCard();
});

document.getElementById("show").addEventListener("click", function () {
  displayBack();
});

displayCurrentCard();
