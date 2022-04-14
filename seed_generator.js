
let seedGenerator = () => {
    let seed = [];
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789";

    while (seed.length < 9) {
        let randNum = Math.floor(Math.random() * chars.length + 1)
        debugger
        seed.push(chars[randNum])
    }
    console.log(seed.join(''))
    return seed.join('');
}

seedGenerator()