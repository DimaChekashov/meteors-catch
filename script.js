var meteorContainer = document.getElementById('meteorites');
var meteorRaining, drawMeteor, clearTrash;
var s = 10;

var Meteor = function(id) {
  this.id = id;
  this.createMeteor = function() {
    var meteor = document.createElement('span');
    meteor.classList.add('meteor');
    meteor.setAttribute('countId', id);
    meteor.setAttribute('top', 0);
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
}

var clearMeteor = function() {
  meteors = document.getElementsByClassName('meteor');
  for(i = 0; i < meteors.length; i++) {
    if(parseInt(meteors[i].getAttribute('top')) == 90) {
      meteorContainer.removeChild(meteors[i]);
    }
  }
}

var mCount = 1;
var createMeteor = function() {
  var meteor = new Meteor(mCount);
  meteor.createMeteor();
  mCount++;
}

var initalGame = function() {
  meteorRaining = setInterval(createMeteor, 1000);
  drawMeteor = setInterval(spead, 1000);
  clearTrash = setInterval(clearMeteor, 1000);
}

var gameOver = function() {
  clearInterval(meteorRaining);
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
