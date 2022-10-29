//7 player max
//4 decks of cards

//      spades  hearts  diamonds  clubs
let suits = ["C", "D", "H", "S"];
let ranks = [ "A", "2", "3", "4", "5", 
              "6", "7", "8", "9", "10", "J", 
              "Q", "K"];

function button_func(){
  let test_img = document.querySelector("#card_num");
  let suit = document.querySelector("#test_suit").value;
  let rank = document.querySelector("#test_rank").value;

  //document.querySelector("#test_suit").value = "";
  //document.querySelector("#test_rank").value = "";
  console.log(suit);

  let y = -110 * (suits.indexOf(suit)) + "px";
  let x = -72 * (ranks.indexOf(rank)) + "px";
  console.log("y: " + y);
  console.log("x: " + x);
  

  test_img.style.marginTop = y;
  test_img.style.marginLeft = x;
}

class Card{
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
  }
}

class Deck{
  constructor(cards){
    this.deck = [];
  }

  createDeck(suits, values){
    for(let suit of suits){
      for (let value of values){
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck;
  }
}

function Player(){
  this.name = "";
  this.hand = [];
  this.chips = 0;
}

let card = new Card(suits[0], ranks[12]);
console.log(card);

let deck = new Deck();
console.log(deck.createDeck(suits, ranks));

let player1 = new Player();
console.log(player1);