const SLICE_COUNT = 8;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("peony_circle" , "png");
  pScope.load_image_sequence("mariposa" , "png", 2);
  pScope.load_image_sequence("petals" , "png", 4);
 
  
  
}

function setup_layers(pScope){

  new PLayer(null, 174, 235, 174);  //lets us draw the whole circle background, ignoring the boundaries


  let layer4 = new PLayer(petals); // I put layer 4 on top to have it behind the other visuals. 
  layer4.mode(SWIRL(4));
  layer4.set_boundary (0,400);

  var layer1 = new PLayer(mariposa);
  layer1.mode( RING );
  layer1.set_boundary( 0, 100);

  var layer2 = new PLayer(peony);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  let layer3 = new PLayer(bees);
  layer3.mode(RING);
  layer3.set_boundary (0, 400);


}

function petals (x, y, animation, pScope){

  scale(animation.frame*5);

  
  pScope.draw_image_from_sequence("petals", 1200, 1000 - animation.wave()*50, animation.frame);


}

function mariposa (x, y, animation, pScope){
  
  //scale(animation.frame*2);

  scale(0.4); // my butterflys 
  pScope.draw_image_from_sequence("mariposa", 1200, 1000 - animation.wave()*50, animation.frame);

}

function peony (x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  //strokeWeight(0);

  /* rotate(5);
  fill(237, 119, 208)
  arc(x,y,300,500,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background */
 
  /* fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw */

  scale(1); // center peony 
  pScope.draw_image("peony_circle", x + 15, y+20,backgroundArcStart,backgroundArcEnd);
   
}

function bees (x, y, animation, pScope){

  
  scale(0.8);
  strokeWeight(0);

  rotate(-10); // this makes it so each bee is within the frame 
  fill(126, 190, 247);
  ellipse(-250, -450 - animation.wave()*50, 100, 120); // wing #2


  fill(245, 215, 95);
  ellipse(-200, -350-animation.wave()*50, 170, 150); // the bees will be my coded visual
  fill(0);
  rect(-200, -425 - animation.wave()*50, 10, 130); // strips 
  rect(-220, -425 - animation.wave()*50, 10, 130);
  rect(-240, -420 - animation.wave()*50, 10, 120);
  rect(-260, -405 - animation.wave()*50, 10, 100);
  //rect(-280, -380 - animation.wave()*50, 10, 50);

  ellipse(-150, -380 - animation.wave()*50, 20, 20); // the eye
  rect(-150, -390 - animation.wave()*50, 15, 5); // eyelash

  fill(227, 190, 41);
  ellipse(-165, -350 - animation.wave()*50, 35, 25); // blush

  rotate(15);
  fill(166, 213, 255);
  ellipse(-337, -375 - animation.wave()*50, 100, 120); // wing #1

  fill(89, 81, 53);
  ellipse(-400, -240 - animation.wave()*50, 15, 15); // trail 
  ellipse(-440, -210 - animation.wave()*50, 15, 15);
  ellipse(-465, -170 - animation.wave()*50, 15, 15);






  

}

