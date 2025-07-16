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

//// Old and not needed! ////
/*
for (let c of exampleCards) {
    console.log(c);
    const answer = prompt(
        c["front"] +
            "\n\n[d] - to discover back, \n[f] - if forgot, \n[g] - if good, \n[e] to exit."
    );
    if (answer === "e") {
        break;
    } else if (answer === "d") {
        alert(c["back"]);
    } else if (answer === "f") {
        c["rating"]--;
    } else if (answer === "g") {
        c["rating"]++;
    } else {
        break;
    }
}
*/
