var currentComp = app.project.activeItem;

// define button colors
var greyed =[0.5,0.5,0.5];
// define Tvland Colors
var blue=[0.1,0.27,0.35];
var yellow=[0.96,0.68,0.09];
var red=[0.86,0.27,0.26];
var green=[0.4,0.73,0.69];
var purple=[0.38,0.47,0.63];
var manilla=[1,0.76,0.59];
var black=[0.07,0.07,0.07];
var white=[0.87,0.87,0.87];
var neutral=[0.5,0.5,0.5];


// Global Variables for stored selected colors
var currentMain = neutral ;
var currentsecond = neutral ;
var currentAccent = neutral;
var selectedPalette = [currentMain,currentsecond,currentAccent];
var howManyColors = 0;



// UI  DEFINITION
UI(this)
function UI(object){

var win = (object instanceof Panel) ? object : new Window("palette","TVLand Color System",[0,0,180,345],{resizeable:true,});

//color butons
but_1=win.add("button",[5,5,30,30],"");
butColor(but_1,blue);
but_2=win.add("button",[30,5,55,30],"");
butColor(but_2,yellow);
but_3=win.add("button",[5,30,30,55],"");
butColor(but_3,green);
but_4=win.add("button",[30,30,55,55],"");
butColor(but_4,purple);
but_5=win.add("button",[75,5,100,30],"");
butColor(but_5,red);
but_6=win.add("button",[100,5,125,30],"");
butColor(but_6,blue);
but_7=win.add("button",[75,30,100,55],"");
butColor(but_7,green);
but_8=win.add("button",[100,30,125,55],"");
butColor(but_8,manilla);
but_9=win.add("button",[140,5,165,30],"");
butColor(but_9,black);
but_10=win.add("button",[140,30,165,55],"");
butColor(but_10,white);


// Objects Swatches
blueSwatch={button:but_1,color:blue,active:true};
yellowSwatch={button:but_2,color:yellow,active:true};
greenSwatch={button:but_3,color:green,active:true};
purpleSwatch={button:but_4,color:purple,active:true};
redSwatch={button:but_5,color:red,active:true};
blueSwatch2={button:but_6,color:blue,active:true};
greenSwatch2={button:but_7,color:green,active:true};
manillaSwatch={button:but_8,color:manilla,active:true};
whiteSwatch={button:but_9,color:white,active:true};
blackSwatch={button:but_10,color:black,active:true};
allSwatches=[blueSwatch,yellowSwatch,greenSwatch,purpleSwatch,redSwatch,blueSwatch2,greenSwatch2,manillaSwatch,whiteSwatch,blackSwatch];

//text overlay
//statictext_1=win.add("statictext",[262,80,331,40] ,"Main",{multiline:false});
//statictext_2=win.add("statictext",[20,80,331,40] ,"2nd",{multiline:false});

//action buttons
process_btn=win.add("button",[5,150,340,175],"process");
reset_btn=win.add("button",[5,60,55,80],"reset");
rand_btn=win.add("button",[75,60,125,80],"random");

main_btn=win.add("button",[180,5,230,55],);
second_btn=win.add("button",[235,5,285,55],);
accent_btn=win.add("button",[290,5,340,55],);


mainText=win.add("statictext",[180,60,230,80] ,"Main",{multiline:false});
mainText.justify="center";
secondText=win.add("statictext",[235,60,285,80] ,"Second",{multiline:false});
secondText.justify="center";
logoText=win.add("statictext",[290,60,340,80] ,"Accent",{multiline:false});
logoText.justify="center";

panel_1=win.add("panel",[5,100,285,140],"selected Comp");
newText=panel_1.add("statictext",[5,85,165,120] ,"selected comp",{multiline:false});
compText=panel_1.add("statictext",[10,10,285,30] ,currentComp.name,{multiline:false});



loadComp_btn=win.add("button",[255,110,280,135],"<<");
help_btn=win.add("button",[320,110,340,135],"?");


butColor(main_btn,neutral);
butColor(second_btn,neutral);
butColor(accent_btn,neutral);

// radio buttons - default to radio1 selected
radio_1=win.add("radiobutton",[200,85,225,110],"");
radio_2=win.add("radiobutton",[250,85,285,110],"");
radio_3=win.add("radiobutton",[310,85,335,110],"");
radio_1.value=1;
}


// Colorize Button Color
function butColor(object,color){
  if(String(color)!="undefined"&&String(color)!="NaN")
  if(color[0]>0)
  {
      object.onDraw = fillRect; 
      object.fillBrush= object.graphics.newBrush( object.graphics.BrushType.SOLID_COLOR, color );
      object.visible=0;
      object.visible=1;
   }

function fillRect(){ 
 with( this ) {
try{  
        graphics.drawOSControl();
        graphics.rectPath(0,0,size[0]-2,size[1]-2);
        graphics.fillPath(fillBrush);
        }
        catch(err){}
        }
      } 
  }



////FUNCTIONS

// UI functions
reset_btn.onClick = function(){
  resetAll();
}

process_btn.onClick = function(){
  var isAComp= isComp(currentComp);
  if(isAComp==true){
  processColor(currentComp);
  //processText(editText.text);
  }
  else{
    alert ("select a comp before proceeding");
  }
}

rand_btn.onClick = function(){
  var randomPalette = shuffleArray(selectedPalette);
  butColor(main_btn,randomPalette[0]);
  butColor(second_btn,randomPalette[1]);
  butColor(accent_btn,randomPalette[2]);
}


loadComp_btn.onClick = function(){
  currentComp = app.project.activeItem;
  compText.text = currentComp.name;
}


help_btn.onClick = function(){
  helpWin=new Window("window","TVLand Color Help",[0,0,500,500],{resizeable:true,});
  helpWin.center();
  helpWin.show();

}

but_1.onClick = function(){
  if(isActive(blueSwatch)==true && howManyColors<2){
    butColor(but_1,greyed);
    greyedBlock2()
    howManyColors+=1;
    whatButton =testDestination();
    assignColorTo(blueSwatch,whatButton);
    }
  if(howManyColors>=2){
    greyColors();
  }
}


but_2.onClick = function(){
  if(isActive(yellowSwatch)==true && howManyColors<2){
  butColor(but_2,greyed); 
  greyedBlock2();
  howManyColors+=1;
  whatButton =testDestination();  
  assignColorTo(yellowSwatch,whatButton);
  }
  if(howManyColors>=2){
    greyColors();
  }
   
}

but_3.onClick = function(){
  if(isActive(greenSwatch)==true && howManyColors<2){
  greyedBlock2(); 
  butColor(but_3,greyed);
  howManyColors+=1;
  whatButton =testDestination();
  assignColorTo(greenSwatch,whatButton);
  }
  if(howManyColors>=2){
    greyColors();
  }

}

but_4.onClick = function(){
  if(isActive(purpleSwatch)==true && howManyColors<2){
  greyedBlock2();  
  butColor(but_4,greyed);
  howManyColors+=1;
  whatButton =testDestination();
  assignColorTo(purpleSwatch,whatButton);   
  }
  if(howManyColors>=2){
    greyColors();
  }
}

but_5.onClick = function(){
if(isActive(redSwatch)==true && howManyColors<2){
  greyedBlock1(); 
  butColor(but_5,greyed); 
  howManyColors+=1;
  whatButton =testDestination();
  assignColorTo(redSwatch,whatButton);  
  }
  if(howManyColors>=2){
    greyColors();
  }
}

but_6.onClick = function(){
  if(isActive(blueSwatch2)==true && howManyColors<2){
  greyedBlock1(); 
  butColor(but_6,greyed);
  howManyColors+=1;
  whatButton =testDestination();
  assignColorTo(blueSwatch2,whatButton);  
  }
  if(howManyColors>=2){
    greyColors();
  }
}

but_7.onClick = function(){
  if(isActive(greenSwatch2)==true && howManyColors<2){
  greyedBlock1(); 
  butColor(but_7,greyed); 
  howManyColors+=1;
  whatButton =testDestination();
  assignColorTo(greenSwatch2,whatButton);  
  }
  if(howManyColors>=2){
    greyColors();
  }
}

but_8.onClick = function(){
  if(isActive(manillaSwatch)==true && howManyColors<2){
  greyedBlock1();  
  butColor(but_8,greyed); 
  howManyColors+=1;
  whatButton =testDestination();
  assignColorTo(manillaSwatch,whatButton); 
  }
  if(howManyColors>=2){
    greyColors();
  } 
}

but_9.onClick = function(){
    
  butColor(but_9,greyed); 
  whatButton =testDestination();
  assignColorTo(blackSwatch,whatButton);  
}

but_10.onClick = function(){
  
  butColor(but_10,greyed); 
  whatButton =testDestination();
  assignColorTo(whiteSwatch,whatButton);  
}

// process functions

function greyedBlock2(){
 
  for(i=4;i<=7;i++){
    allSwatches[i].active=false;
    butColor(allSwatches[i].button,greyed);
  }
}

function greyedBlock1(){
  
  for(i=0;i<=3;i++){
    allSwatches[i].active=false;
    butColor(allSwatches[i].button,greyed);
  }
  
}


function greyColors(){  
  greyedBlock1();
  greyedBlock2();
  }


function resetAll(){
  radio_1.value=1;
  howManyColors=0;
  selectedPalette=[neutral,neutral,neutral];
  for(i=0;i<=allSwatches.length;i++){
    butColor(allSwatches[i].button,allSwatches[i].color);
  }
  for(i=0;i<=allSwatches.length;i++){
    allSwatches[i].active=true;
  }
}


function assignColorTo(currentSwatch,destinationBtn){
  selectedColor=currentSwatch.color;

if (isActive(currentSwatch)){

  butColor(destinationBtn,selectedColor);  

  if(destinationBtn==accent_btn) {
    selectedPalette[2]=selectedColor;
    radio_1.value=1;
  }
  else if (destinationBtn==main_btn) {
    selectedPalette[0]=selectedColor;
    radio_2.value=1;
  }
  else if(destinationBtn==second_btn) {
    selectedPalette[1]=selectedColor;
    radio_3.value=1;
  }

 currentSwatch.active=false;
}

}


function processColor(currentComp){

  for(i=1;i<=currentComp.numLayers;i++){

    if(currentComp.layer(i).name=="maincolor"){
      
      currentComp.layer(i).property("Effects").property("main").property("Color").setValue(selectedPalette[0]);
    }
    else if(currentComp.layer(i).name=="secondcolor"){
      currentComp.layer(i).property("Effects").property("main").property("Color").setValue(selectedPalette[1]);
    }
    if(currentComp.layer(i).name=="accentcolor"){
      currentComp.layer(i).property("Effects").property("main").property("Color").setValue(selectedPalette[2]);
    }
  }

}


function processText(myText){
  for(i=1;i<=currentComp.numLayers;i++){
    if(currentComp.layer(i).name=="editText"){
      currentComp.layer(i).sourceText.setValue(myText);
    }
  }
}

function shuffleArray(array) {

  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
// check functions

function testDestination(){
  if(radio_3.value==true){
    return accent_btn;
      }
   else if(radio_2.value==true){
    return second_btn;
      }
  else if(radio_1.value==true){
    return main_btn;
      }
}


function isActive(thisSwatch){
if(thisSwatch.active==true){
  return true;
}
else{
  return false;
}
}

function isComp(theComp){
  if(theComp instanceof CompItem){
    return true;
  }
  else{
    return false;
  }
}
