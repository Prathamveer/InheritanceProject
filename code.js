var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b8c2a9f5-623f-40f7-b715-c592c3e4d8dc","4ff7daa2-e0fc-49fe-b03e-340a9ab52c4a","0adde0ae-94d9-4a11-a330-c88afda99975","781ed671-bd1c-460f-abbe-001dfdf6db9c","7acf645f-35af-40aa-9cff-2a39123adf24","b2efd9f4-7262-4b07-86ec-a15b3d061853"],"propsByKey":{"b8c2a9f5-623f-40f7-b715-c592c3e4d8dc":{"name":"black","sourceUrl":"assets/api/v1/animation-library/gamelab/LbkSt1m4aQtq.uX.iRGJnF5RD5jG9seX/category_vehicles/enemyBlack2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"LbkSt1m4aQtq.uX.iRGJnF5RD5jG9seX","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LbkSt1m4aQtq.uX.iRGJnF5RD5jG9seX/category_vehicles/enemyBlack2.png"},"4ff7daa2-e0fc-49fe-b03e-340a9ab52c4a":{"name":"green","sourceUrl":"assets/api/v1/animation-library/gamelab/HmEdMW8OcdHcZ9V2HAzDdwYOGq5pZpc_/category_vehicles/enemyGreen2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"HmEdMW8OcdHcZ9V2HAzDdwYOGq5pZpc_","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HmEdMW8OcdHcZ9V2HAzDdwYOGq5pZpc_/category_vehicles/enemyGreen2.png"},"0adde0ae-94d9-4a11-a330-c88afda99975":{"name":"neon","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"sROvf1JdiUq_cR7UP83lQag0U2VVMJTR","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0adde0ae-94d9-4a11-a330-c88afda99975.png"},"781ed671-bd1c-460f-abbe-001dfdf6db9c":{"name":"blue","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"zQrJBxg7oWDMk7LKTZzNon9kTxAER13v","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/781ed671-bd1c-460f-abbe-001dfdf6db9c.png"},"7acf645f-35af-40aa-9cff-2a39123adf24":{"name":"yellow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"YPrESCsLaNBNvjlgIFlMknfG2a4Dr_XH","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7acf645f-35af-40aa-9cff-2a39123adf24.png"},"b2efd9f4-7262-4b07-86ec-a15b3d061853":{"name":"red","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"4CkLcxXaKLrA46uLv1jynyZbVy04Nydt","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b2efd9f4-7262-4b07-86ec-a15b3d061853.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var coinsGroup=createGroup();


function draw() {
  background("black");
  
  BlueCoins();
  RedCoins();
  GreenCoins();
  BlackCoins();
  
  drawSprites();
}
function BlueCoins(){
      if(World.frameCount%100===0){
    var coin=createSprite(randomNumber(10,390),0,10,50);
    coin.setAnimation("neon");


    coin.velocityY=6;
    coinsGroup.add(coin);
    coin.lifetime=70;
    }
}
function RedCoins(){
      if(World.frameCount%50===0){
    var coin=createSprite(randomNumber(10,400),0,10,50);
    coin.setAnimation("blue");


    coin.velocityY=6;
    coinsGroup.add(coin);
    coin.lifetime=70;
    }
}
function GreenCoins(){
      if(World.frameCount%20===0){
    var coin=createSprite(randomNumber(10,400),0,10,50);
    coin.setAnimation("yellow");


    coin.velocityY=6;
    coinsGroup.add(coin);
    coin.lifetime=70;
    }
}
function BlackCoins(){
      if(World.frameCount%70===0){
    var coin=createSprite(randomNumber(0,400),0,10,50);
    coin.setAnimation("red");

    coin.velocityY=6;
    coinsGroup.add(coin);
    coin.lifetime=70;
    }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
