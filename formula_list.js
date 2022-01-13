
let ifStatements = [
    {
        statement: ((x ^ y) % 10)
    },
    {
        statement: ((x << y) % 100)
    },
    {
        statement: ((x^y) % 3)
    },
    {
        statement: (x ** 2 > y * 2)
    },
    {
        statement: (x ** 2 > y * 2)
    },
]

let fillStyles = [
    {
        style: `rgb(${(x^y) * 3}, ${(x^y)}, 155)`
    },
    {
        style: `rgb(${(x^y) * 30}, ${(x^y) * 3}, 155)`
    },
    {
        style: `rgb(${(x^y) * 30}, ${(x^y) * 3}, 55)`
    },
    {
        style: `rgb(${(cos^sin) * 10}, ${(x^y) * 3}, 155)`
    },
    
]

let fillRects = [
    {
        Rect: (x*5, y*5, 120, 120)
    },
    {
        Rect: (x**2, y*5, 120, 120)
    },
    {
        Rect: (x**2, y*5, 30, 30)
    },
    {
        Rect: (x, y, 1, 1)
    },
]

/*
// draw arc of circles
    let radius = 100;//outer radius
    let rows = 7;//number of rows
    let diff = 20;//distance between each row
    let circle_count = [33, 29, 26, 23, 21, 18, 1];
    for (let j = 0; j < rows; j++) {
        //the circle count to be made
        let count = circle_count.shift();

        let current_radius = radius - j*diff;
        for (let i = 0; i < count; i++) {
            //divide 180 degrees by the number of circle to draw 
            let angle = Math.PI / (count-1) * i*-1;
            //x coordinate
            let x = current_radius * Math.cos(angle) + 300;
            //y coordinate
            let y = current_radius * Math.sin(angle) + 100;
            context.beginPath();
            context.arc(x, y, 5, 0, 2 * Math.PI);
            context.stroke();
        }
    }

Specific Setups
    Sunset:
    for (let x = 0; x < 255; x++) {
        for (y = 0; y < 255; y++) {
            if ((x^y) % 3 && (y > 20)) {
                context.fillRect(x**2, y*5, 120, 120)
                context.fillStyle = `rgb(${(x^y) * 10}, ${(x^y) * 3}, 155)`
            } else {
                canvas.style.background = '#FFFF9B'
            }
        };
    };

    Pastel Gradient
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

*/