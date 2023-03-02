
    var pos = 0;
    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png']
    ];
    var direction = 0;


    const pacMen = [];

    function setToRandom(scale) {
        return {
            x: Math.random() * scale,
            y: Math.random() * scale
        }
    }
    // Factory to make a PacMan 
    function makePac() {
        // returns an object with values scaled {x: 33, y: 21}
        let velocity = setToRandom(10);
        let position = setToRandom(200);
        let focus = true;
        // Add image to div id = game
        let game = document.getElementById('game');
        let newimg = document.createElement('img');
        newimg.style.position = 'absolute';
        newimg.src = "PacMan1.png";
        newimg.width = 100;
        newimg.style.left = position.x;
        newimg.style.top = position.y;
        game.appendChild(newimg);
        // new style of creating an object
        return {
            position,
            velocity,
            newimg,
            focus
        }
    }

    function update() {
        //loop over pacmen array and move each one and move image in DOM
        pacMen.forEach((item) => {
            checkCollisions(item)
            item.position.x += item.velocity.x;
            item.position.y += item.velocity.y;

            item.newimg.style.left = item.position.x;
            item.newimg.style.top = item.position.y;
        })
        setTimeout(update, 20);
    }
//credit to Ilya Flaks for giving me a peek at his solution which I cobbled into this one, which works except for the fact the pacmen change position on hitting any side.

    function checkCollisions(item) {
        if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || 
            item.position.x + item.velocity.x < 0) 
                {item.focus = !item.focus;
                item.velocity.x = -item.velocity.x;}
        else if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
                item.position.y + item.velocity.y < 0) 
                {item.focus = true; 
                item.velocity.y = -item.velocity.y;}
        if (item.focus) {item.newimg.src = "PacMan1.png";} 
        else {item.newimg.src = "PacMan3.png";}
    }

    function makeOne() {
        pacMen.push(makePac()); // add a new PacMan
    }
