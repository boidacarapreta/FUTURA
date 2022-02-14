//import { stage01 } from "./stage01.js";

var stage00 = new Phaser.Scene("Introdução");

var map;
var tileset0;
var terreno;
var tileset1;
var ARCas;
var player1;
var player2;
var parede;
var voz;
var pointer;
var touchX;
var touchY;
var timedEvent;
var timer = -1;
var timerText;
var life = 0;
var lifeText;
var trilha;
var jogador;
var ice_servers = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};
var localConnection;
var remoteConnection;
var midias;
const audio = document.querySelector("audio");

stage00.preload = function () {

  this.load.image("map", "./assets/fundo-pagegame-fundo01.png");
  this.load.image("pc", "./assets/object-pagegame-pc.png");
  this.load.spritesheet("close", "./assets/button-pagegame-close.png", { frameWidth: 236, frameHeight: 43.1429});
  this.load.spritesheet("dicas", "./assets/object-pagegame-dicas.png", { frameWidth: 202, frameHeight: 202}); 
  this.load.image("entrada", "./assets/object-pagegame-entrada.png");
  this.load.spritesheet("saida", "./assets/object-pagegame-saida.png", { frameWidth: 314, frameHeight: 93});
  this.load.image("status01", "./assets/player1-pagegame-status.png");
  this.load.image("status02", "./assets/player2-pagegame-status.png");
  this.load.image("senha", "./assets/senha-pagegame-inserir.png");
  this.load.image("confirmar", "./assets/subpage-pagegame-confirmar.png");
  this.load.image("subpage", "./assets/subpage-pagegame-fundo.png");
  this.load.image("dica01", "./assets/subpage-pagegame-fundo.png");
  this.load.spritesheet("player1", "./assets/players1.png",
    { frameWidth: 100, frameHeight: 150});
  this.load.spritesheet("player2", "./assets/players2.png",
    { frameWidth: 100, frameHeight: 150});
};

stage00.create = function () {
  this.add.image(960, 540, 'map');
  this.add.image(2880, 540, 'map');
  this.add.image(2880, 540, 'pc');
  this.add.image(1434, 771, 'dicas');
  this.add.image(1673, 445, 'dicas');
  this.add.image(486, 771, 'dicas');
  this.add.image(247, 445, 'dicas');
  this.add.image(960, 1033.5, 'entrada');
  this.add.image(2880, 1033.5, 'entrada');
  this.add.image(960, 46.5, 'saida');
  this.add.image(2880, 46.5, 'saida', 2); 
  this.add.image(214.5, 94, 'status01');
  this.add.image(2134.5, 94, 'status02');
  this.add.image(1802, 21.5715, 'close');
  this.add.image(3721, 21.5715, 'close');

  /*
  this.anims.create({
    key: "left1",
    frames: this.anims.generateFrameNumbers("player1", {
      start: 0,
      end: 6,
    }),
    frameRate: 10,
    repeat: -1,
  });

  // Animação do jogador 2: a esquerda
  this.anims.create({
    key: "left2",
    frames: this.anims.generateFrameNumbers("player2", {
      start: 0,
      end: 6,
    }),
    frameRate: 10,
    repeat: -1,
  });

  // Animação do jogador 1: a direita
  this.anims.create({
    key: "right1",
    frames: this.anims.generateFrameNumbers("player1", {
      start: 15,
      end: 21,
    }),
    frameRate: 10,
    repeat: -1,
  });

  // Animação do jogador 2: a direita
  this.anims.create({
    key: "right2",
    frames: this.anims.generateFrameNumbers("player2", {
      start: 15,
      end: 21,
    }),
    frameRate: 10,
    repeat: -1,
  });

  // Animação do jogador 1: ficar parado (e virado para a direita)
  this.anims.create({
    key: "stopped1",
    frames: this.anims.generateFrameNumbers("player1", {
      start: 11,
      end: 14,
    }),
    frameRate: 5,
    repeat: -1,
  });

  // Animação do jogador 2: ficar parado (e virado para a direita)
  this.anims.create({
    key: "stopped2",
    frames: this.anims.generateFrameNumbers("player2", {
      start: 11,
      end: 14,
    }),
    frameRate: 5,
    repeat: -1,
  });

  var socket = this.socket;

  this.socket.on("jogadores", function (jogadores) {
    if (jogadores.primeiro === self.socket.id) {
      // Define jogador como o primeiro
      jogador = 1;

      // Personagens colidem com os limites da cena
      player1.setCollideWorldBounds(true);
    }});
    */
};
 
export { stage00 };