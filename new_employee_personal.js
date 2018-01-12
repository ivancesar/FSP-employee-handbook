function openArticle(articleID) {
	let lista = document.getElementsByClassName("what_we_do_article");
	let i;
	for (i = 0; i < lista.length; i++) {
		if (lista[i].classList.contains('what_we_do_article_open')) {
			lista[i].classList.toggle('what_we_do_article_open')
		}
	};
	document.getElementById(articleID).classList.toggle('what_we_do_article_open');
}

// a key map of allowed keys
/*
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  let div =document.createElement('div');
  div.innerHTML='<p class="normalText">Made by Ivan Cesar</p>'
  div.style.width='20%';
  div.style.height='100px';
  div.style.position='absolute';
  div.style.top="50%";
  div.style.left="40%";
  div.style.backgroundColor="red";
  div.style.color="green";
  div.style.zIndex="10";
  document.getElementById("main").appendChild(div);
} */