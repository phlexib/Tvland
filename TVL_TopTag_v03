// TVLAND TopTag SCRIPTS by Benjamin Rohel for ROGER.TV
// version 3.0

app.beginUndoGroup("TVL TOPTAG");

var tvlandAssetsFolder= (new File($.fileName)).parent;

/// GLOBAL VAIABLES ////

// define button colors
var greyed =[0.5,0.5,0.5];
// define Tvland Colors
var blue=[0.1,0.27,0.35];
var yellow=[0.96,0.68,0.09];
var red=[0.86,0.27,0.26];
var green=[0.4,0.73,0.69];
var purple=[0.38,0.47,0.63];
var manilla=[1,0.76,0.59];
var offManilla=[0.89,0.76,0.59];
var black=[0.07,0.07,0.07];
var white=[0.87,0.87,0.87];

// TEXTURES VARIABLES

var mainColorTexture="greyed";
var secondColorTexture="greyed";
var accentColorTexture="greyed";

var renderFolder
var editFolder;
var preFolder;

if (app.project.numItems >0){
  var textureFolder=findFolder("textures");
  var aeTextureArray=textureFolder.items;
}
var stringtvlandAssetsFolder= (tvlandAssetsFolder.toString())+"/tvlandAssets";

var textureIconPath=new Folder(stringtvlandAssetsFolder+"/texturesicons/");
var textureSourceArray = createListMenu(textureIconPath,"*.jpg");
var textureArray = textureSourceArray[0];
var textureNameArray = textureSourceArray[1];
var textureThumbArraySource = createListMenu(textureIconPath,"*.jpg");
var textureThumbArray =textureThumbArraySource[0];
var mainSelectedTexture=textureArray[0];
var secondSelectedTexture=textureArray[1];
var secondSelectedTexture=textureArray[2];


// WORDS WORK

//word process
  var wordCompLayer="";
  var wordCompName="";

if (app.project.numItems >0){
  var wordsFolder=findFolder("words");
  var aeWordArray=wordsFolder.items;
  var aeWordArray=wordsFolder.items;
}

var wordIconPath=new Folder(stringtvlandAssetsFolder+"/wordsicons/");
var wordSourceArray = createListMenu(wordIconPath,"*.jpg");
var wordArray = wordSourceArray[0];
var wordNameArray = wordSourceArray[1];
var selectedWord = wordNameArray[1];

// DefaultPath
var currentComp = "select a comp and click <<";
if(app.project.activeItem instanceof CompItem){
var currentComp = app.project.activeItem;
}
//currentComp=findComp("TVL_TOPTAG");




// Text for help menu
var helpText="TVL PALETTE INSTRUCTIONS:\n\nAfter installing the script titled “TVL_Color_System” you can open the AE project we have supplied.\nFirst you should open the palette control panel which can be accessed by going to: Window > TVL_Color_System.jsxbin\nThe process is simple, just click on a color swatch to choose the first color for your palette. The script will automatically eliminate colors that are not available with your chosen color according to the color system that has been put into place. Next select your secondary color and finally your accent color. Once you have your three set, select the comp that you would like to change and press the “process” button.\nYou can use the radio buttons for additional control to manually target your selected color as primary, secondary or accent. \n\nBUTTON GUIDE\n\n\nCOLOR PALETTE\nThe color system that has been put in place has been coded into this script. You will be allowed to chose two colors and black or white. The color swatches will automatically update to show the color options remaining based on your first selection.\n\nRESET BUTTON\nThe reset button clears all swatches allowing you to restart your color selection.\n\nRANDOM BUTTON\nThe random button works on a pre-selected palette. Once you have a palette selected, you can click the random button to alternate the main, secondary and accent colors.\n\nRADIO BUTTONS\nRadio buttons allow you to manually set a target for the next color selected.\n\n<<\nPress this button to load a comp selected in the project panel to be the target for the color palette.\n\n?\nPressing this button will activate the help menu providing all information you see in this instructional document. \n\nPROCESS BUTTON\nBy pressing process, you set the comp colors to be changed to the new color palette.\n\n\n**Note: TVLBUG 1 and 2 have only one color ( Main Color), while TVLBUG 3 includes a primary, secondary, and accent. "



// UI  DEFINITION //
UI(this)
function UI(object){

var win = (object instanceof Panel) ? object : new Window("palette","TVLand Color System",[0,0,355,545],{resizeable:true,});

// COLOR PANEL
var colorPanel=win.add("panel",[5,5,355,120],"select colors");
//color butons
but_1=colorPanel.add("button",[5,15,30,40],"");
butColor(but_1,blue);
but_2=colorPanel.add("button",[30,15,55,40],"");
butColor(but_2,yellow);
but_3=colorPanel.add("button",[5,40,30,65],"");
butColor(but_3,green);
but_4=colorPanel.add("button",[30,40,55,65],"");
butColor(but_4,purple);
but_5=colorPanel.add("button",[75,15,100,40],"");
butColor(but_5,red);
but_6=colorPanel.add("button",[100,15,125,40],"");
butColor(but_6,blue);
but_7=colorPanel.add("button",[75,40,100,65],"");
butColor(but_7,green);
but_8=colorPanel.add("button",[100,40,125,65],"");
butColor(but_8,manilla);
but_9=colorPanel.add("button",[140,15,165,40],"");
butColor(but_9,black);
but_10=colorPanel.add("button",[140,40,165,65],"");
butColor(but_10,white);

reset_btn=colorPanel.add("button",[5,70,55,90],"reset");


// Selected colors Swatches
main_btn=colorPanel.add("button",[180,15,230,65],);
butColor(main_btn,greyed);
second_btn=colorPanel.add("button",[235,15,285,65],);
butColor(second_btn,greyed);
accent_btn=colorPanel.add("button",[290,15,340,65],);
butColor(accent_btn,greyed);

// Objects Swatches
blueSwatch={button:but_1,color:blue,active:true,colorString:"blue"};
yellowSwatch={button:but_2,color:yellow,active:true,colorString:"yellow"};
greenSwatch={button:but_3,color:green,active:true,colorString:"green"};
purpleSwatch={button:but_4,color:purple,active:true,colorString:"purple"};
redSwatch={button:but_5,color:red,active:true,colorString:"red"};
blueSwatch2={button:but_6,color:blue,active:true,colorString:"blue"};
greenSwatch2={button:but_7,color:green,active:true,colorString:"green"};
manillaSwatch={button:but_8,color:manilla,active:true,colorString:"manilla"};
whiteSwatch={button:but_9,color:white,active:true,colorString:"white"};
blackSwatch={button:but_10,color:black,active:true,colorString:"black"};
mainSwatch={button:main_btn,color:greyed,active:true,colorString:"greyed"};
secondSwatch={button:second_btn,color:greyed,active:true,colorString:"greyed"};
accentSwatch={button:accent_btn,color:greyed,active:true,colorString:"greyed"};
allSwatches=[blueSwatch,yellowSwatch,greenSwatch,purpleSwatch,redSwatch,blueSwatch2,greenSwatch2,manillaSwatch,whiteSwatch,blackSwatch];


// Global Variables to store selected colors
var currentMain = greyed ;
var currentsecond = greyed ;
var currentAccent = greyed;
var paletteArray= [mainSwatch,secondSwatch,accentSwatch];
var selectedPalette = [currentMain,currentsecond,currentAccent];
var howManyColors = 0;
var selectedColor=greyed;



//text boxes in UI
mainText=colorPanel.add("statictext",[180,70,230,80] ,"Main",{multiline:false});
mainText.justify="center";
secondText=colorPanel.add("statictext",[235,70,285,80] ,"Second",{multiline:false});
secondText.justify="center";
accentText=colorPanel.add("statictext",[290,70,340,80] ,"Accent",{multiline:false});
accentText.justify="center";



// radio buttons - default to radio1 selected
radio_1=win.add("radiobutton",[205,95,225,110],"");
radio_2=win.add("radiobutton",[258,95,285,110],"");
radio_3=win.add("radiobutton",[313,95,335,110],"");
radio_1.value=1;


// PAPER TEXTURE PANEL
texturePanel=win.add("panel",[5,130,355,270],"select texture");
mainTextureText=texturePanel.add("statictext",[10,10,345,20],"Main Texture");
mainTextureList=texturePanel.add("dropdownlist",[5,25,345,60],[]);
// ADD textures to list
for (var i = 0; i < textureArray.length; i++)
{
mainTextureList.add ("item", textureNameArray[i]); 
mainTextureList.items[i].image= File (textureArray[i]);
mainTextureList.selection=[0];
}

secondTextureText=texturePanel.add("statictext",[10,70,345,80],"Second Texture");
secondTextureList=texturePanel.add("dropdownlist",[5,85,345,120],[]);
// ADD textures to list
for (var i = 0; i < textureArray.length; i++)
{
secondTextureList.add ("item", textureNameArray[i]); 
secondTextureList.items[i].image= File (textureArray[i]);
secondTextureList.selection=[1];
}





// WORD PANEL
wordPanel=win.add("panel",[5,280,355,370],"select word");
//reloadComp_btn=wordPanel.add("button",[5,10,80,35],"apply")

wordsListbox=wordPanel.add("dropdownlist",[10,10,345,70],[],{multiselect:true});
for (var i = 0; i < wordArray.length; i++)
{
wordsListbox.add ("item", wordNameArray[i]); 
wordsListbox.items[i].image= File (wordArray[i]);
wordsListbox.selection=[0];
}


newText=wordPanel.add("statictext",[5,120,165,150] ,"Apply to Comp : ",{multiline:false});
wordsText=wordPanel.add("statictext",[100,120,280,150] ,currentComp.name,{multiline:false});
loadComp_btn=wordPanel.add("button",[320,120,345,150],"<<");


//action buttons
process_btn=win.add("button",[5,380,320,405],"process");
help_btn=win.add("button",[325,380,355,405],"?");


} // END OF UI DEFINITIONS

mainTextureList.onChange = function () {
  mainSelectedTexture=mainTextureList.selection;
}

secondTextureList.onChange = function () {
  secondSelectedTexture=secondTextureList.selection;
}


wordsListbox.onChange = function () {
  var select=(wordsListbox.selection);
  selectedWord=select.toString();
}
////   FUNCTIONS  ///////


/// UI functions

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

// Buttons Functions 

reset_btn.onClick = function(){
  resetAll();

}

process_btn.onClick = function(){
  var ttFolder=app.project.items.addFolder("_TOPTAG");
  var preFolder=app.project.items.addFolder("preTOPTAG");
  preFolder.parentFolder=ttFolder;

  currentComp=findComp("TVL_TOPTAG");
  var currentName=currentComp.name;
  currentComp=currentComp.duplicate();
  currentComp.name=currentName+"-"+selectedWord;
  currentComp.parentFolder=ttFolder;

  for(l=1;l<=currentComp.numLayers;l++){

    if(currentComp.layer(l).comment=="maintexture"){
    var textureLayer=currentComp.layer(l);
    assignTexture(textureLayer,mainSelectedTexture,mainColorTexture);
    }
    else if(currentComp.layer(l).comment=="secondtexture"){
    var textureLayer=currentComp.layer(l);
    assignTexture(textureLayer,secondSelectedTexture,secondColorTexture);
    }
  }
  var compToDo=currentComp;

  processColor(compToDo);

  //word process
  var wordCompLayer=findLayer(compToDo,"word");

  var wordCompName=wordCompLayer.source.name;
  var newWordComp=wordCompLayer.source.duplicate();
  
  newWordComp.name=wordCompName+"-"+selectedWord;
  newWordComp.parentFolder=preFolder;

  var wordComp=newWordComp;
  var wordLayer=wordComp.layer(1);
  wordComp.openInViewer();
  assignWord(wordLayer,selectedWord);
  wordLayer.selected=true;
  app.executeCommand(app.findMenuCommandId("Fit to Comp Width"));
  wordLayer.selected=false;
  compToDo.openInViewer();

  for(w=1;w<=compToDo.numLayers;w++){
    if(compToDo.layer(w).comment=="word"){
      
      compToDo.layer(w).replaceSource(newWordComp,true);
    }
    else{
      continue;
    }
  }

  
}

loadComp_btn.onClick = function(){

  wordsText.text=findComp("TVL_TOPTAG").name;
  compToDo.openInViewer();
}


help_btn.onClick = function(){
helpWin = new Window("window","TvLand Help",[0,0,500,800],{resizeable:true,borderless:false,resizeable:false,minimizeButton:true,maximizeButton:true,closeButton:true});
helpTextWin = helpWin.add("statictext",[5,5,495,700] ,helpText,{multiline:true});
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


// PROCESS FUNCTIONS

function greyedBlock2(){
  butColor(but_5,greyed);
  butColor(but_6,greyed);
  butColor(but_7,greyed);
  butColor(but_8,greyed);
  for(i=4;i<=7;i++){
    allSwatches[i].active=false;
  }
}

function greyedBlock1(){
  butColor(but_1,greyed);
  butColor(but_2,greyed);
  butColor(but_3,greyed);
  butColor(but_4,greyed);
  for(i=0;i<=3;i++){
    allSwatches[i].active=false;
  }
}


function greyColors(){  
  greyedBlock1();
  greyedBlock2();
  }


function resetAll(){
  butColor(but_1,blue);
  butColor(but_2,yellow);
  butColor(but_3,green);
  butColor(but_4,purple);
  butColor(but_5,red);
  butColor(but_6,blue);
  butColor(but_7,green);
  butColor(but_8,manilla);
  butColor(but_9,black);
  butColor(but_10,white);
  butColor(main_btn,greyed);
  butColor(second_btn,greyed);
  butColor(accent_btn,greyed);
  radio_1.value=1;
  howManyColors=0;
  selectedPalette=[greyed,greyed,greyed];
  for(i=0;i<=allSwatches.length;i++){
    allSwatches[i].active=true;
  }

  wordCompLayer="";
  wordCompName="";

}


function assignColorTo(currentSwatch,destinationBtn){
  selectedColor=currentSwatch.color;

if (isActive(currentSwatch)){

  butColor(destinationBtn,selectedColor);  

  if(destinationBtn==accent_btn) {
    selectedPalette[2]=selectedColor;
    accentColorTexture=currentSwatch.colorString;
    radio_1.value=1;
  }
  else if (destinationBtn==main_btn) {
    selectedPalette[0]=selectedColor;
    mainColorTexture=currentSwatch.colorString;
    radio_2.value=1;
  }
  else if(destinationBtn==second_btn) {
    selectedPalette[1]=selectedColor;
    secondColorTexture=currentSwatch.colorString;
    radio_3.value=1;
  } 

 currentSwatch.active=false;
}

}


function processColor(currentComp){
  
  // set offManilla if color for Logo is Manilla
  if(selectedPalette[0]==manilla){
    selectedPalette[0]=offManilla;
  }
  if(selectedPalette[1]==manilla){
    selectedPalette[1]=offManilla;
  }

  for(i=1;i<=currentComp.numLayers;i++){

    if(currentComp.layer(i).name=="maincolor"){
      
      currentComp.layer(i).property("Effects").property("main").property("Color").setValue(selectedPalette[0]);
    }
    else if(currentComp.layer(i).name=="secondcolor"){
      currentComp.layer(i).property("Effects").property("main").property("Color").setValue(selectedPalette[1]);
    }
    else if(currentComp.layer(i).name=="accentcolor"){
      currentComp.layer(i).property("Effects").property("main").property("Color").setValue(selectedPalette[2]);
    }
    
  }


  /*if (checkWhite.value==true){
      currentComp.layer("backsidecolor").property("Effects").property("whiteCheck").property("Checkbox").setValue(true);
    }
    else{
      currentComp.layer("backsidecolor").property("Effects").property("whiteCheck").property("Checkbox").setValue(false);
    }
  */
}




//replace texturefile 
function assignTexture(toLayer,selectedTexture,colorTexture){
    var newTexture=matchTexture(colorTexture,selectedTexture);
    toLayer.replaceSource(newTexture,true);
}

//replace texturefile 
function assignWord(toLayer,myWord){
    
    var newWord=matchWord(myWord);
    toLayer.replaceSource(newWord,true);
    
}


// check functions

function testDestination(){
  if(radio_3.value==true){
    return accentSwatch.button;
      }
   else if(radio_2.value==true){
    return secondSwatch.button;
      }
  else if(radio_1.value==true){
    return mainSwatch.button;
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

function compsToProcessFromRadio(){
  compsToProcess=[];
  compsToProcessName=[];
    
    if (radio_secondWord.value ==1){ 
      for(i=0;i<wordsListbox.selection.length;i++){
        currentIndex= wordsListbox.selection[i].index;
        compsToProcess.push(compArray[currentIndex]);
        compsToProcessName.push(compArray[currentIndex].name);
      }
    }
    else if (radio_allComp.value ==1){
      compsToProcess=compArray;
      for(i=0; i<compArray.length;i++){
        compsToProcessName.push(compArray[currentIndex].name);
      }
        
    
    }
    
    else{
       compsToProcess.push(currentComp);
     }
       
}


function loadComps(){
compsToProcessFromRadio();
  
  if(radio_firstWord.value == 1){
    currentComp=app.project.activeItem;
    var isAComp= isComp(currentComp);
    if(isAComp==true){
    compText.text = currentComp.name;
    }
    else{
      alert ("select a comp before proceeding");
    }
     
  }
  else if(radio_secondWord.value == 1){
  compText.text = compsToProcessName;
  }
  else {
  compText.text = " !!!! All Comps Have Been Selected !!!";
  }
  return compsToProcess;
}

function createListMenu(listPath, listFileFormat){
  newListArray= listPath.getFiles(listFileFormat);
  newListNameArray = [];
  for (i=0;i<newListArray.length;i++){
  var newListName= newListArray[i].displayName;
  newListName=newListName.slice(0,-4);
  newListNameArray.push(newListName);
  }
  createListArray = [newListArray,newListNameArray];
  return createListArray;
}

function makeCompArray(){
  for(i=0 ; i<compArray.length;i++){
  wordsListbox.add("item", compArray[i].name);
  }
}

// find texture file for background
function matchTexture(colorToFind,textureToFind){

  var regColor = new RegExp("^"+colorToFind,"g");
  var regTexture = new RegExp(textureToFind,"g");
  var textureFound=false;
  for (var i=1; i<=aeTextureArray.length; i++) {
    if(aeTextureArray[i].name.match(regColor) && aeTextureArray[i].name.match(regTexture)){
      textureFound=true;
      return aeTextureArray[i];
      alert("new texture is" + aeTextureArray[i]);
    }else{
      textureFound=false;
    }
  }
 if(!textureFond){
  alert("no texture found");
 }
}

function matchWord(wordToFind){

  var regWord = new RegExp("^"+wordToFind,"g");


  var wordFound=false;
  for (var i=1; i<=aeWordArray.length; i++) {
    if(aeWordArray[i].name.match(regWord)){
      wordFound=true;
      return aeWordArray[i];
      alert("new word is" + aeWordArray[i]);
    }else{
      wordFound=false;
    }
  }
 if(!wordFond){
  alert("no texture found");
 }
}



function findFolder(folderName){
  for(i=1; i<=app.project.numItems;i++){
    var curItem= app.project.item(i);
    if((curItem instanceof FolderItem) && (curItem.name==folderName)){
      return curItem;
      break;
    }
  }
}

function findComp(compName){
  for(i=1; i<=app.project.numItems;i++){
    var curItem= app.project.item(i);
    if((curItem instanceof CompItem) && (curItem.name==compName)){
      return curItem;
      break;
    }
  }
}

function findLayer(curComp,layerComment){
  for(i=1; i<=curComp.numLayers;i++){
    var curItem= curComp.layer(i);
    if(curItem.comment==layerComment){
      return curItem;
      break;
    }
  }
}

function createStructure(withName){
  

  // Create new folder with name
  prjFolder=app.project.items.addFolder(withName);
  
  // Create and add subfolders to main Folder
  renderFolder=app.project.items.addFolder("1.RenderComp");
  renderFolder.parentFolder=prjFolder;
  editFolder=app.project.items.addFolder("2.EditComps");
  editFolder.parentFolder=prjFolder;
  preFolder=app.project.items.addFolder("3.PreComps");
  preFolder.parentFolder=prjFolder;
  
  

}
