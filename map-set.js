let cardAce = {
    name: 'Ace of Spades'
};

let cardKing = {
    name: 'King Of Clubs'
};

let deck = new Map();
deck.set('as',cardAce);
deck.set('kc',cardKing);
console.log(deck);

// Map {
//  'as' => { name: 'Ace of Spades' },
//  'kc' => { name: 'King Of Clubs' } }
