# Simple Crossword Game

### Getting Started

1. Clone the git to your local directory.

```
	git clone
```

2. Change directory to /where/you/stored/this/repo and run Node Package Manager (NPM)
	
```
	cd /where/you/stored/this/repo
	npm install
```

3. The below you will start a simple server which will serve all the files in the repo.
	
```
	npm start
```

4. The web-server will be available at http://127.0.0.1:8080 or localhost:8080
5. You can stop the server by pressing `ctrl + c`

### Help

The game board is a 8 $\times$ 8 square board. All the empty (whitey) cells are the slots to be filed in by the player, any of which will turn to green when the user clicking on them, waiting for keyboard input. As long as the cell is in green color, the cell is ready to be either filled or changed. Once all the acrosses and downs are filled and if they are right, "You made it" window will pop out.
