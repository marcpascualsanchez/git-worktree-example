import Animal from './shelter/Animal';

function start() {
    const animals = [
        new Animal('Pipo', 4),
        new Animal('Tobi', 6),
    ]
    
    console.log(`You can adopt:\n${animals.map(a => `${a.name}, ${a.age} years old\n`)}`)
}

start()