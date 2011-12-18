window.onload = function() {
    function Player(x,y,map,elem,char) {
        this.x = x;
        this.y = y;
        this.map = map;
        this.elem = elem;
        this.char = char;
        this.vx = 0;
        this.vy = 0;
        console.log(this.map.arr);
        var tmp = this.map.arr[this.y].split("");
        //this.map.arr[this.y][this.x] = "@";
        tmp[this.x] = this.char;
        this.map.arr[this.y] = tmp.join("");
        console.log(this.map.arr);
        //console.log(":"+this.map.arr[this.y][this.x]+":");
        //this.moveLeft();
        console.log(this.map.draw(this.elem));
    }
    Player.prototype.moveLeft = function(amt) {
        if(this.x!==0 && this.map.arr[this.y][this.x-1]!="#") {
            var tmp = this.map.arr[this.y].split("");
            tmp[this.x] = " ";
            this.x -= amt;
            tmp[this.x] = this.char;
            this.map.arr[this.y] = tmp.join("");
            this.map.draw(this.elem);
        }
    };
    Player.prototype.moveRight = function(amt) {
        amt = amt||1;
        if(this.x!==this.map.arr[this.y].length-1 && this.map.arr[this.y][this.x+1]!="#") {
            var tmp = this.map.arr[this.y].split("");
            tmp[this.x] = " ";
            this.x += amt;
            tmp[this.x] = this.char;
            this.map.arr[this.y] = tmp.join("");
            this.map.draw(this.elem);
        }
    };
    Player.prototype.moveDown = function(amt) {
        amt = amt||1;
		//this.map.arr[this.y][this.x] = " ";
		//console.log(this.y, this.y+1)
		if(this.y!==this.map.arr.length-1 && this.map.arr[this.y+1][this.x]!="#") {
			var tmp = this.map.arr[this.y].split("");
            tmp[this.x] = " ";
            this.map.arr[this.y] = tmp.join("");
            this.y += amt;
            tmp = this.map.arr[this.y].split("");
            tmp[this.x] = this.char;
            this.map.arr[this.y] = tmp.join("");
            this.map.draw(this.elem);
		}
	};
    Player.prototype.moveUp = function(amt) {
        amt = amt||1;
        //this.map.arr[this.y][this.x] = " ";
		//console.log(this.y, this.y+1)
		if(this.y!==0 && this.map.arr[this.y+1][this.x]!="#") {
			var tmp = this.map.arr[this.y].split("");
            tmp[this.x] = " ";
            this.map.arr[this.ys] = tmp.join("");
            this.y -= amt;
            tmp = this.map.arr[this.y].split("");
            tmp[this.x] = this.char;
            this.map.arr[this.y] = tmp.join("");
            this.map.draw(this.elem);
		}
	};
    
    function Map(arr) {
        this.arr = arr;
        this.draw = function(elem) {
            elem.innerHTML = this.arr.join("\n");
            return elem.innerHTML;
        };
    }
    var map = [
        "##########",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "##########"
    ];
    function init() {
        //window.txt = map.join("\n");
        window.game = document.getElementById("game");
        //game.innerHTML = txt;
        window.mapInst = new Map(map);
        mapInst.draw(game);
        window.p = new Player(1,1,mapInst,game,"@");
        p.moveDown();
    }
    init();
};