import CardList from './CardList';

 export default class App {

    constructor() {
        this.cards = [];
        this.addCard = this.addCard.bind(this);
    }

    addCard(data) {
        this.cards = [...this.cards, data];
        CardList(this.cards);
    }
}

