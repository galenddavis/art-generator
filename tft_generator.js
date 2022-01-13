
let generateTFT = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'art';
    canvas.height = '500';
    canvas.width = '500';
    canvas.style.border = '3px solid black';
    canvas.style.background = '#000000';
    // canvas.style.background = '#FFFFFF';
    const context = canvas.getContext('2d');

    let angle = (Math.floor(Math.random()* 7) + 1) 
    let cos = Math.cos(angle)
    let sin = Math.sin(angle)
    let tan = Math.tan(angle)

    let randRBG = () => {
        let values = []
        for (let i = 0; i < 3; i++) {
            values.push((Math.random() * 255) + 1)
        }
        return (
            `rgb(${values[0]}, ${values[1]}, ${values[2]})`
        )
    }

    let randRect = (x, y, sin, tan, cos) => {
        let result = [x, y]
        let operands = [x, y, sin, tan, cos, Math.floor(Math.random() * 500) + 1]
        let randIndex = Math.floor(Math.random() * operands.length + 1)
        for (let i = 0; i < 2; i++) {
            debugger
            result.push(operands[randIndex])
        }
        console.log(result)
    }
    randRect(5, 6, cos, sin, tan)
  
    for (let x = 0; x < 500; x++) {
        for (y = 0; y < 500; y++) {
            if (((tan / 3.14) * 10 > 1) || ((sin / 3.14) * 100 < 5)) {
                let style = randRBG()
                context.fillRect(x, y, 100, 250)
                context.fillStyle = `rgb(${(sin^x) * 10}, ${(cos^y) * 3}, 150)`
                // context.fillStyle = style
            } else if (x ** 2 % 2 !== 0) {
                let style = randRBG()
                context.fillRect(x ^ cos, 250, 100, 500)
                // context.fillStyle = style
                context.fillStyle = `rgb(${(x*y) * 30}, ${(x^y)}, 55)`
            }
        };
    };    

    const display = document.getElementById('display')
    display.append(canvas)
}