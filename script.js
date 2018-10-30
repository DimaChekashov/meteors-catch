var meteorContainer = document.getElementById('meteorites');
var meteorRaining, drawMeteor, clearTrash;
var s = 10;
var scene = document.getElementById('scene');
var scoreCount = 0;

var score = function() {
  console.log(scoreCount);
  document.getElementById('score').innerText = scoreCount;
}

var Meteor = function(id) {
  this.id = id;
  this.createMeteor = function() {
    var meteor = document.createElement('span');
    meteor.classList.add('meteor');
    meteor.setAttribute('countId', id);
    meteor.setAttribute('top', -20);
    meteor.style.left = (Math.floor(Math.random() * (9 - 1) + 1) * 10) + '%';
    meteorContainer.appendChild(meteor);
  }
}
//meteorContainer.removeChild(meteor);
var spead = function() {
  meteors = document.getElementsByClassName('meteor');
  for(i = 0; i < meteors.length; i++) {
    meteors[i].style.top = parseInt(meteors[i].getAttribute('top')) + s + '%';
    meteors[i].setAttribute('top', parseInt(meteors[i].getAttribute('top')) + s);
  }
  meteorsSave = document.getElementsByClassName('meteor-save');
  for(i = 0; i < meteorsSave.length; i++) {
    meteorsSave[i].style.top = parseInt(meteorsSave[i].getAttribute('top')) + 5 + '%';
    meteorsSave[i].setAttribute('top', parseInt(meteorsSave[i].getAttribute('top')) + 5);
  }
}

var clearMeteor = function() {
  meteors = document.getElementsByClassName('meteor');
  for(i = 0; i < meteors.length; i++) {
    if(parseInt(meteors[i].getAttribute('top')) > 90) {
      gameOver();
      meteorContainer.removeChild(meteors[i]);
    }
  }
  meteorsSave = document.getElementsByClassName('meteor-save');
  for(i = 0; i < meteorsSave.length; i++) {
    if(parseInt(meteorsSave[i].getAttribute('top')) > 90) {
      meteorContainer.removeChild(meteorsSave[i]);
    }
  }
}

var mCount = 1;
var createMeteor = function() {
  var meteor = new Meteor(mCount);
  meteor.createMeteor();
  mCount++;
}

var destroyMeteor = function(e) {
  if(e.target.classList == 'meteor') {
    e.target.classList.remove('meteor');
    e.target.classList.add('meteor-save');
    scoreCount++;
    score();
  }
}

var initalGame = function() {
  meteorRaining = setInterval(createMeteor, 1000);
  drawMeteor = setInterval(spead, 1000);
  clearTrash = setInterval(clearMeteor, 1000);
  scene.addEventListener('click', destroyMeteor);
}

var gameOver = function() {
  clearInterval(meteorRaining);
  clearInterval(drawMeteor);
  clearInterval(clearTrash);
  document.getElementById('over-screen').style.display = 'flex';
  /* meteors = document.getElementsByClassName('meteor');
  for(i = 0; i < meteors.length; i++) {
    meteorContainer.removeChild(meteors[i]);
  } */
}

var gameStart = function() {
  var startScreen = document.getElementById('start-screen');
  var name = document.getElementById('start-screen-name').value;
  if (!name == '') {
    startScreen.style.display = 'none';
    initalGame();
    return name;
  }
  alert('Введите Имя');
  return false;
}
