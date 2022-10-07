/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/cloud.png":
/*!***************************!*\
  !*** ./src/img/cloud.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "afbfe9e7c3d74863caa74eb9834df9cc.png");

/***/ }),

/***/ "./src/img/player.png":
/*!****************************!*\
  !*** ./src/img/player.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2b3bee1e1b967cffb6fe29a880e1bdf1.png");

/***/ }),

/***/ "./src/img/stone.png":
/*!***************************!*\
  !*** ./src/img/stone.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6bd447ed04da45dd00147b3691296cf5.png");

/***/ }),

/***/ "./src/img/three.png":
/*!***************************!*\
  !*** ./src/img/three.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "da78ff9e317507bba6cf513a8a2f88d2.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_three_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/three.png */ "./src/img/three.png");
/* harmony import */ var _img_player_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/player.png */ "./src/img/player.png");
/* harmony import */ var _img_stone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/stone.png */ "./src/img/stone.png");
/* harmony import */ var _img_cloud_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/cloud.png */ "./src/img/cloud.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var threeImage = new Image();
threeImage.src = _img_three_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var playerImage = new Image();
playerImage.src = _img_player_png__WEBPACK_IMPORTED_MODULE_1__["default"];
var stoneImage = new Image();
stoneImage.src = _img_stone_png__WEBPACK_IMPORTED_MODULE_2__["default"];
var cloudImage = new Image();
cloudImage.src = _img_cloud_png__WEBPACK_IMPORTED_MODULE_3__["default"];
var canvas = document.querySelector('canvas');
var scoreElement = document.querySelector('#score');
var scoreTotal = document.querySelector('.score-total');
var tryAgain = document.querySelector('.score-total-btn');
var ctx = canvas.getContext('2d');
var windowWidth = document.body.clientWidth;
var windowheight = document.body.clientHeight;
canvas.width = windowWidth;
canvas.height = windowheight;
var gravity = 0.5;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  space: {
    pressed: false
  }
};
var winCondition = true;
var scrollOffset = 0;
var score = 0;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 50;
    this.height = 150;
    this.image = playerImage;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        color = _ref.color;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.color = color;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Platform;
}();

var Background = /*#__PURE__*/function () {
  function Background(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        width = _ref2.width,
        height = _ref2.height,
        color = _ref2.color;

    _classCallCheck(this, Background);

    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.color = color;
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Background;
}();

var Three = /*#__PURE__*/function () {
  function Three(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        width = _ref3.width,
        height = _ref3.height;

    _classCallCheck(this, Three);

    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.image = threeImage;
  }

  _createClass(Three, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Three;
}();

var Cloud = /*#__PURE__*/function () {
  function Cloud(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        width = _ref4.width,
        height = _ref4.height;

    _classCallCheck(this, Cloud);

    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.image = cloudImage;
  }

  _createClass(Cloud, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Cloud;
}();

var RainDrop = /*#__PURE__*/function () {
  function RainDrop(_ref5) {
    var x = _ref5.x,
        y = _ref5.y,
        speed = _ref5.speed;

    _classCallCheck(this, RainDrop);

    this.position = {
      x: x,
      y: y
    };
    this.fallSpeed = speed;
    this.width = 1;
    this.height = 2;
    this.color = 'blue';
  }

  _createClass(RainDrop, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();

      if (this.position.y + this.height <= windowheight - 100) {
        this.position.y += this.fallSpeed;
      } else {
        this.position.x = Math.random() * windowWidth;
        this.position.y = 0;
      }
    }
  }]);

  return RainDrop;
}();

var Collision = /*#__PURE__*/function () {
  function Collision(_ref6) {
    var x = _ref6.x,
        y = _ref6.y,
        width = _ref6.width,
        height = _ref6.height;

    _classCallCheck(this, Collision);

    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.image = stoneImage;
  }

  _createClass(Collision, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Collision;
}();

var player = new Player();
var platforms = [new Platform({
  x: 0,
  y: windowheight - 150,
  width: windowWidth,
  height: 150,
  color: '#594240'
})];
var backgrounds = [new Background({
  x: 0,
  y: 200,
  width: windowWidth,
  height: 450,
  color: '#98FFA2'
}), new Background({
  x: 0,
  y: 0,
  width: windowWidth,
  height: 200,
  color: '#98F3FF'
})];
var collisions = [new Collision({
  x: windowWidth,
  y: windowheight - 100,
  width: 50,
  height: 50
})];
var rainDrops = [];

for (var i = 0; i < 10000; i++) {// let dropX = Math.random() * windowWidth 
  // let dropY = Math.random() * (windowheight - 300)
  // let dropSpeed = Math.random() * 5
  // rainDrops.push(new RainDrop({
  //     x: dropX,
  //     y: dropY,
  //     speed: dropSpeed,
  // }))
}

var forest = [new Three({
  x: -85,
  y: windowheight - 600,
  width: 300,
  height: 500
}), new Three({
  x: 300,
  y: windowheight - 440,
  width: 200,
  height: 340
}), new Three({
  x: windowWidth / 2 - 150,
  y: windowheight - 650,
  width: 300,
  height: 550
}), new Three({
  x: windowWidth / 1.3 - 110,
  y: windowheight - 470,
  width: 220,
  height: 370
}), new Three({
  x: windowWidth - 150,
  y: windowheight - 600,
  width: 300,
  height: 500
})];
var sky = [new Cloud({
  x: 50,
  y: 80,
  width: 100,
  height: 50
}), new Cloud({
  x: windowWidth / 4 - 50,
  y: 40,
  width: 100,
  height: 50
}), new Cloud({
  x: windowWidth / 2 - 50,
  y: 80,
  width: 100,
  height: 50
}), new Cloud({
  x: windowWidth / 1.3 - 50,
  y: 40,
  width: 100,
  height: 50
}), new Cloud({
  x: windowWidth - 150,
  y: 80,
  width: 100,
  height: 50
})];

var animate = function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  platforms.forEach(function (platform) {
    platform.draw();
  });
  backgrounds.forEach(function (background) {
    background.draw();
  });
  collisions.forEach(function (collision) {
    collision.draw();
  });
  sky.forEach(function (cloud) {
    cloud.draw();
  });
  forest.forEach(function (three) {
    three.draw();
  });
  rainDrops.forEach(function (drop) {
    drop.update();

    if (keys.space.pressed) {
      if (drop.position.y >= player.position.y + player.height - Math.floor(Math.random() * (100 - 50 + 1) + 50) && drop.position.x <= player.position.x + player.width / 2 && drop.position.x >= player.position.x - Math.floor(Math.random() * (50 - 25 + 1) + 20)) {
        drop.position.x -= Math.random() * 50;
        drop.position.y -= 20;
      }

      if (drop.position.y >= player.position.y + player.height - Math.floor(Math.random() * (100 - 50 + 1) + 50) && drop.position.x <= player.position.x + player.width + Math.floor(Math.random() * (50 - 25 + 1) + 20) && drop.position.x >= player.position.x + player.width / 2) {
        drop.position.x += Math.random() * 50;
        drop.position.y -= 20;
      }
    }
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5 + scrollOffset / 1000000;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed && winCondition) {
      scrollOffset += 1;
      collisions.forEach(function (collision) {
        collision.position.x -= 5 + scrollOffset / 100;
      });
      forest.forEach(function (three) {
        three.position.x -= scrollOffset / 100;
      });
      sky.forEach(function (cloud) {
        cloud.position.x -= scrollOffset / 100;
      });
    }
  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y + 100 && player.position.y + player.height + player.velocity.y >= platform.position.y + 100) {
      player.velocity.y = 0;
    }
  });
  collisions.forEach(function (collision) {
    if (player.position.y + player.height <= collision.position.y && player.position.y + player.height + player.velocity.y >= collision.position.y && player.position.x + player.width >= collision.position.x && player.position.x <= collision.position.x + collision.width) {
      player.velocity.y = 0;
    }

    if (player.position.x + player.width >= collision.position.x && player.position.x <= collision.position.x + collision.width && player.position.y + player.height + player.velocity.y >= collision.position.y) {
      player.velocity.x = 0;
      winCondition = false;
    }

    if (collision.position.x + collision.width <= 0) {
      collisions.shift();

      if (winCondition && player.position.x >= 400) {
        var platformX = windowWidth;
        var platformY = windowheight - 100;
        collisions.push(new Collision({
          x: platformX,
          y: platformY,
          width: 50,
          height: 50
        }));
      }
    }
  });
  forest.forEach(function (three) {
    if (three.position.x + three.width <= -100) {
      three.position.x = windowWidth;
    }
  });
  sky.forEach(function (cloud) {
    if (cloud.position.x + cloud.width <= -100) {
      cloud.position.x = windowWidth;
    }
  });

  if (scrollOffset > 2000) {
    console.log('you win');
  }

  if (winCondition) {
    scoreElement.innerHTML = "<span>Your score: ".concat(scrollOffset, "</span>");
    scoreTotal.classList.add('hide');
  } else {
    scoreTotal.classList.remove('hide');
  }
};

animate();
addEventListener('keydown', function (_ref7) {
  var key = _ref7.key;

  switch (key) {
    case 'ArrowUp':
      if (player.velocity.y === 0 && winCondition) {
        player.velocity.y -= 10;
      }

      break;

    case 'ArrowRight':
      keys.right.pressed = true;
      break;

    case 'ArrowDown':
      //player.velocity.y += 10 
      break;

    case 'ArrowLeft':
      keys.left.pressed = true;
      break;

    case ' ':
      keys.space.pressed = true;
      break;
  }
});
addEventListener('keyup', function (_ref8) {
  var key = _ref8.key;

  switch (key) {
    case 'ArrowUp':
      //keys.up.pressed = false
      break;

    case 'ArrowRight':
      keys.right.pressed = false;
      break;

    case 'ArrowDown':
      //keys.down.pressed = false
      break;

    case 'ArrowLeft':
      keys.left.pressed = false;
      break;

    case ' ':
      keys.space.pressed = false;
      break;
  }
});
tryAgain.addEventListener('click', function () {
  location.reload();
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map