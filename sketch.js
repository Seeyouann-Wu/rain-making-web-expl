let headlineForecast,
    headlineFinal,
    bgBrightness = 255,
    debug = false,
    headlineFieldWidth,
    headlineFieldHeight,
    headlineFieldX,
    headlineFieldY,
    discription,
    button;

function preload() {
  headlineForecast = loadImage('data/headlineForecast.png');
  headlineFinal = loadImage('data/headlineFinal.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight*0.6);
  discription = createP("Rainmaking, also known as artificial precipitation, artificial rainfall and pluviculture, is the act of attempting to artificially induce or increase precipitation, usually to stave off drought or the wider global warming. According to the clouds' different physical properties, this can be done using airplanes or rockets to sow to the clouds with catalysts such as dry ice, silver iodide and salt powder, to make clouds rain or increase precipitation, to remove or mitigate farmland drought, to increase reservoir irrigation water or water supply capacity, to increase water levels for hydropower generation, or even to solve the global warming problem.\nIn the United States, rainmaking was attempted by traveling showmen. It was practiced on the American frontier, but may have reached a peak during the dust bowl drought of the US west and midwest in the 1930s. The practice was depicted in the 1956 film The Rainmaker. Attempts to bring rain directly have waned with development of the science of meteorology, laws against fraud, and improved weather forecasting, with some exceptions such as cloud seeding and forms of prayer including rain dances, which are still practiced today. Prayers for rain is also a common cultural practice for Christians and Muslims.[citation needed] In some Christian areas, clerics of the Eastern Orthodox Church are believed to possess the power to arrest rain, bring hail to the farms of wayward souls, as well as to bring rain when the rainy season falls short.[citation needed]\nThe term is also used metaphorically to describe the process of bringing new clients into a professional practice, such as law, architecture, consulting, advertising, or investment banking—in general, processes that bring money into a company.\nIt is also used to describe a confidence trick where the scammer takes money from the victim to influence a system over which they have no real control, but a random chance of the outcome happening anyway.");
  button = createButton('Join Us');
  button.mouseClicked(openWebPage);
  if (debug) bgBrightness = 200;
}

function draw() {
  background(bgBrightness);
  
  //headline
  headlineFieldWidth = windowWidth;
  headlineFieldHeight = windowHeight*0.6;
  headlineFieldX = 0;
  headlineFieldY = 0;
  
  let headlineWidth = headlineFieldWidth*0.6,
      headlineHeight = headlineWidth/headlineForecast.width*headlineForecast.height;
  
  if (headlineHeight > headlineFieldHeight*0.8) {
    headlineHeight = headlineFieldHeight*0.8;
    headlineWidth = headlineHeight/headlineForecast.height*headlineForecast.width;
  } else {
    headlineFieldHeight = headlineHeight*1.25;
  }
  let headlineY = (headlineFieldHeight-headlineHeight)/2,
      headlineX = headlineY;
  
  noFill(); if (!debug) noStroke(); else strokeWeight(1);
  rect(headlineFieldX, headlineFieldY, headlineFieldWidth, headlineFieldHeight);
  fill(bgBrightness); 
  rect(headlineX, headlineY, headlineWidth, headlineHeight);
  image(headlineFinal, headlineX, headlineY, headlineWidth, headlineHeight);
  if (mouseY < headlineFieldHeight) {
    fill(bgBrightness); 
    rect(mouseX, headlineY, headlineX+headlineWidth-mouseX, headlineHeight);
  }
  image(headlineForecast, headlineX, headlineY, headlineWidth, headlineHeight);
  
  //css
  discription.style('padding', headlineX + 'px');
  button.center('horizontal');
}

function openWebPage() {
  window.open("https://google.com");
}

function windowResized() {
  resizeCanvas(windowWidth, headlineFieldHeight);
}
