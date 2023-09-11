class Player {
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }

    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`)
    }
}
    const hanSolo = new Player("Han Solo", 100, 0, 'blaster');
    hanSolo.speak('Never tell me the odds');
    console.log(hanSolo);
    console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

    function anotherPlayer(){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
}

    const darthVader = new anotherPlayer('Darth Vader', 200, 100, ['saber']);
    console.log(darthVader);
    console.log(Object.getOwnPropertyNames(darthVader));
    console.log(Object.getOwnPropertyNames(darthVader.__proto__));  