function addPersonMethods({name, age}) {
    return {
        name:name,
        age:age,
        greet: (greeting) => {
            console.log(`${greeting}, my name is ${name}`)
        },
        compareAge: (person) => {
            if (person.age === age) {
                console.log(`My name is ${name} and I'm equally young as ${person.name}`)
            } else if (person.age < age) {
                console.log(`My name is ${name} and I'm older than ${person.name}`)
            } else {
                console.log(`My name is ${name} and I'm younger than ${person.name}`)
            }
        },
        namesake: (person) => {
            if (person.name === name) {
                console.log(`We have the same name, ${person.name} and I!`)
            } else {
                console.log(`We have different names, ${person.name} and I.`)
            }
        }
    }
}