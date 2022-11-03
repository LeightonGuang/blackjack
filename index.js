//7 player max
//4 decks of cards

//      spades  hearts  diamonds  clubs
let suits = ["C", "D", "H", "S"];
let ranks = [ "A", "2", "3", "4", "5", 
              "6", "7", "8", "9", "10", "J", 
              "Q", "K"];

let card_name_num = 1;

let total = [0,0,0,0,0,0,0];

function button_func(){
  let test_img = document.querySelector("#card_num");
  //let suit = document.querySelector("#test_suit").value;
  let suit = player1.hand[player1.hand.length - 1].suit;
  //let rank = document.querySelector("#test_rank").value;
  let rank = player1.hand[player1.hand.length - 1].rank;
  let player_total = document.querySelector("#player1_card_total");

  if(suits.includes(suit) && ranks.includes(rank)){
    if(parseInt(rank)){
      total[0] += parseInt(rank);
  
    }else if(rank == "A"){
      total[0] += 1;
  
    }else if(rank == "J" || rank == "Q" || rank == "K"){
      total[0] += 10;
    }
  
    player_total.innerHTML = "Total: " + total[0];
  
    let y = -110 * (suits.indexOf(suit)) + "px";
    let x = -72 * (ranks.indexOf(rank)) + "px";
    console.log("y: " + y);
    console.log("x: " + x);
    
    test_img.style.marginTop = y;
    test_img.style.marginLeft = x;
  
    //clone cards and make new one
  
    let element = document.querySelector("#card0");
    let clone = element.cloneNode(true);
    clone.id = "card" + card_name_num;
    element.after(clone);
    card_name_num++;
    clone.removeAttribute("hidden", false);
  }
}

function deal_card(){
  deck.deal();
  button_func();
}

class Card{
  constructor(suit, rank){
    this.suit = suit;
    this.rank = rank;
  }
}

class Deck{
  constructor(){
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

  deal(){
    console.log("deal");
    let card;
    card = this.deck.pop();
    player1.hand.push(card);
  }
}

function Player(){
  this.name = "";
  this.hand = [];
  this.chips = 0;
}

let card = new Card(suits[0], ranks[12]);
//console.log(card);

let deck = new Deck();
console.log(deck.createDeck(suits, ranks));
deck.createDeck(suits, ranks);
console.log("first card in the deck: " + deck.deck[0].value);

let player1 = new Player();
console.log(player1);