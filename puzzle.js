(function() {
    'use strict';

    // All jquery operations will be commented
    // Demonstrate in pure javascript for some reasons

    const board = document.getElementById('top-container');
    // $('.top-container')

    function makeSquare(size) {
        for (let i = 0; i < size; i++) {
            let square = document.createElement('div');
            square.setAttribute('id', 'square-'+i);
            square.setAttribute('class', 'square hide-cell');   // initiate black square waiting to be updated
            board.appendChild(square);
            // $('.top-container').append('<div id="square-"'+i+' class="white"></div>');
        }

    }

    /**
     * Parse local JSON file - puzzle.json to show puzzle game board
     * It has three attributes for each object - i). "boardSize", ii). "puzzleRiddle" and iii). "puzzleAnswer"
     * i)   "boardSize" is simply the total number of cells in the board
     * ii)  "puzzleRiddle" is a string containing all characters that initially shows on the board
     *      with white space indicating letters to be filled in by players and hashtag for "empty slot"
     * iii) "puzzleAnswer" is a string containing all characters that supposedly match the string left on board
     *      when finish the puzzle game
     */
    fetch('puzzle.json')
        .then((res) => res.json())
        .then((data) => {
            const size = parseInt(data['boardSize'], 10);  // parseInt for future checking
	        makeSquare(size);
            const pzRid = data['puzzleRiddle'];
            const pzAns = data['puzzleAnswer'];

            if (pzRid.length !== size || pzAns.length !== size)
                alert('Puzzle Riddle needs to be maintained!');

	        for (let i = 0; i < size; i++) {
		        //console.log(pzRid[i]);
		        var ch = document.getElementById('square-'+i);
                if (pzRid[i] !== '#') {
                    ch.setAttribute('class', 'square text-cell');
	                const text = document.createElement('b');
	                text.innerHTML = pzRid[i];
	                text.setAttribute('class', 'show-text');
                    if (pzRid[i] !== ' ') {
                        ch.setAttribute('class', 'square show-cell');
                        ch.appendChild(text);
                        continue;
                    }
	                ch.appendChild(text);
                }
	        }

			let cells = document.getElementsByClassName('text-cell');
	        for (let i = 0; i < cells.length; i++) {
		        cells[i].addEventListener('click', function () {
			        let prev = document.getElementsByClassName('square active-cell')[0];
			        if (prev !== undefined)
				        prev.className = prev.className.replace('active-cell', 'text-cell');
			        this.setAttribute('class', 'square active-cell');
		        });
	        }
	        // keyboard event listener after click event finished
	        document.addEventListener('keypress', function (e) {
		        const currCell = document.getElementsByClassName('square active-cell')[0];
		        currCell.getElementsByTagName('b')[0].innerHTML = e.key.toUpperCase();
		        let ans = document.getElementsByTagName('b');
		        let usAns = '';
		        for (let i = 0; i < ans.length; i++) {
			        usAns += ans[i].innerHTML;
		        }

		        // console.log('usAns: '+usAns);    // for debug purpose
		        // console.log('pzAns: '+pzAns.replace(/#/g, ''));
		        if (usAns === pzAns.replace(/#/g, ''))
		        	alert('You made it!');
	        });
        });
}());
