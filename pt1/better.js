const createPlayer = (name, hp, mp, items) => {
    return {
        name,
        hp,
        mp,
        items,
    };
}

const hanSolo= createPlayer('Han Solo', 100, 0, ['blaster']);

const darthVader= createPlayer('Darth Vader', 200, 100, ['saber']);

console.log(hanSolo);
console.log(darthVader);