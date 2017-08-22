var bulbasaur = {
	name: "Bulbasaur",
	health: 0,
	baseHealth: 150,
	attack: 0,
	baseAttack:5,
	counterAttack: 18,
	imgsrc: "assets/images/bulbasaur.png"
};

var charmander = {
	name: "Charmander",
	health: 0,
	baseHealth: 120,
	attack: 10,
	baseAttack:12,
	counterAttack: 9,
	imgsrc: "assets/images/charmander.png"
};

var squirtle = {
	name: "Squirtle",
	health: 0,
	baseHealth: 140,
	attack: 10,
	baseAttack: 8,
	counterAttack: 12,
	imgsrc: "assets/images/squirtle.png"
};

var pikachu = {
	name: "Pikachu",
	health: 0,
	baseHealth: 130,
	attack: 5,
	baseAttack: 8,
	counterAttack: 15,
	imgsrc: "assets/images/pikachu.png"
};

var gameStage;
var active;
var defend;
var wins;
var loss;

function init() {

	$("#player").hide();
	$("#enemy").hide();
	$("#battleBox").hide();
	$("#bulba").show();
	$("#char").show();
	$("#squirt").show();
	$("#pika").show();


	wins = 0;
	loss = 0;
	gameStage = 0;
	active = "";
	defend = "";

	bulbasaur.health = bulbasaur.baseHealth;
	charmander.health = charmander.baseHealth;
	squirtle.health = squirtle.baseHealth;
	pikachu.health = pikachu.baseHealth;

	bulbasaur.attack = bulbasaur.baseAttack;
	charmander.attack = charmander.baseAttack;
	squirtle.attack = squirtle.baseAttack;
	pikachu.attack = pikachu.baseAttack;

	$("#bulba").html("<img src='"+ bulbasaur.imgsrc + "'>" );

	$("#char").html("<img src='"+ charmander.imgsrc + "'>" );

	$("#squirt").html("<img src='"+ squirtle.imgsrc + "'>" );

	$("#pika").html("<img src='"+ pikachu.imgsrc + "'>" );
};

init();

//pick a player character
$("#bulba").on("click", function() {
	if(gameStage === 0) {
		if(wins > 0) {
			$("#battleBox").show();
		}
		$("#player").show();
		$("#player").html(bulbasaur.name +  " HP: " + bulbasaur.baseHealth +"<img src='"+ bulbasaur.imgsrc + "'>" );
		$("#bulba").css("display", "none");
		active = bulbasaur;
		gameStage++;
	}

	else if (gameStage === 1) {
		$("#enemy").show();
		$("#enemy").html(bulbasaur.name +  " HP: " + bulbasaur.baseHealth +"<img src='"+ bulbasaur.imgsrc + "'>" );
		$("#bulba").css("display", "none");
		$("#battleBox").show();
		defend = bulbasaur;
		gameStage++;
	}
});

$("#char").on("click", function() {
	if(gameStage === 0) {
		if(wins > 0) {
			$("#battleBox").show();
		}
		$("#player").show();
		$("#player").html(charmander.name +  " HP: " + charmander.baseHealth +"<img src='"+ charmander.imgsrc + "'>" );
		$("#char").css("display", "none");
		active = charmander;
		gameStage++;
	}

	else if (gameStage === 1) {
		$("#enemy").show();
		$("#enemy").html(charmander.name +  " HP: " + charmander.baseHealth +"<img src='"+ charmander.imgsrc + "'>" );
		$("#char").css("display", "none");
		$("#battleBox").show();
		defend = charmander;
		gameStage++;
	}
});

$("#squirt").on("click", function() {
	if(gameStage === 0) {
		if(wins > 0) {
			$("#battleBox").show();
		}
		$("#player").show();
		$("#player").html(squirtle.name +  " HP: " + squirtle.baseHealth +"<img src='"+ squirtle.imgsrc + "'>" );
		$("#squirt").css("display", "none");
		active = squirtle;
		gameStage++;
	}

	else if (gameStage === 1) {
		$("#enemy").show();
		$("#enemy").html(squirtle.name +  " HP: " + squirtle.baseHealth +"<img src='"+ squirtle.imgsrc + "'>" );
		$("#squirt").css("display", "none");		
		$("#battleBox").show();
		defend = squirtle;
		gameStage++;
	}
});

$("#pika").on("click", function() {
	if(gameStage === 0) {
		if(wins > 0) {
			$("#battleBox").show();
		}
		$("#player").show();
		$("#player").html(pikachu.name +  " HP: " + pikachu.baseHealth +"<img src='"+ pikachu.imgsrc + "'>" );
		$("#pika").css("display", "none");
		active = pikachu;
		gameStage++;
	}

	else if (gameStage === 1) {
		$("#enemy").show();
		$("#enemy").html(pikachu.name +  " HP: " + pikachu.baseHealth +"<img src='"+ pikachu.imgsrc + "'>" );
		$("#pika").css("display", "none");
		$("#battleBox").show();
		defend = pikachu;
		gameStage++;
	}
});


$("button").on("click", function() {
	if(active.health > 0 && defend.health > 0) {
		active.health -= defend.counterAttack;
		defend.health -= active.attack;
		active.attack += active.baseAttack;
		$("#player").html(active.name +  " HP: " + active.health +"<img src='"+ active.imgsrc + "'>" );
		$("#enemy").html(defend.name +  " HP: " + defend.health +"<img src='"+ defend.imgsrc + "'>" );
	}
	if(active.health <= 0) {
		loss++;
		$("#player").hide();
		$("#battleBox").hide();
		gameStage = 0;
	}
	if(defend.health <= 0) {
		wins++;
		$("#enemy").hide();
		$("#battleBox").hide();
		gameStage = 1;
	}
	reset();
});

function reset() {
	if(wins === 3) {
		alert("You did it!");
		init();
	}
	else if (loss > 0) {
		alert("Sorry you lost!")
		init();
	}
}

