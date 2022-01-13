
let generateTFT = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'art';
    canvas.height = '500';
    canvas.width = '500';
    canvas.style.border = '3px solid black';
    canvas.style.background = '#000000';
    // canvas.style.background = '#FFFFFF';

    const context = canvas.getContext('2d');

    for (let x = 0; x < 500; x++) {
        for (y = 0; y < 500; y++) {
            let angle = 6 * y
            let cos = Math.cos(angle)
            let sin = Math.sin(angle)
            let tan = Math.tan(angle)
            if (((tan / 3.14) * 10 > 1) || ((sin / 3.14) * 100 < 5)) {
                context.fillRect(x, y, 100, 500)
                context.fillStyle = `rgb(${(sin^x) * 10}, ${(cos^y) * 3}, 150)`
            } else if (x ** 2 % 2 !== 0) {
                context.fillRect(x ^ cos, tan % cos, 100, 500)
                context.fillStyle = `rgb(${(x*y) * 30}, ${(x^y)}, 55)`
            }
        };
    };    

    const display = document.getElementById('display')
    display.append(canvas)
}