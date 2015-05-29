/// TVL_Endtag v05

// GLOBAL VARIABLES
var tvlandAssetsFolder= (new File($.fileName)).parent;



var infoText="TYPE YOUR TEXT\nINSIDE\nTHIS BOX"
var endTag ="endtag Adress";
var timeText="10p";
var selectedStyle="selected style";
var styleArray= ["TVL_EP-1","TVL_EP-2","TVL_EP-3","TVL_EP-4","TVL_EP-5","TVL_EP-6"];
var selectedComp= new Object;

var stringtvlandAssetsFolder= (tvlandAssetsFolder.toString())+"/tvlandAssets";
var wordsPath=new Folder(stringtvlandAssetsFolder+"/endtagswords/");
var imagePath= stringtvlandAssetsFolder+"/icons/";

var styleImages = ["endpage_icon_1.jpg", "endpage_icon_2.jpg","endpage_icon_3.jpg","endpage_icon_4.jpg","endpage_icon_5.jpg","endpage_icon_6.jpg"];
var styleIndex=0;
var endtagFormat="*.png";
var endtagSourceArray = createListMenu(wordsPath,"*.png");
var endtagArray = endtagSourceArray[0];
var endtagNameArray = endtagSourceArray[1];
var endtagThumbArraySource = createListMenu(wordsPath,"*.jpg");
var endtagThumbArray =endtagThumbArraySource[0];
var infoPositionArray= [[240,442.3,0],[240,344.3,0],[240,234.3,0]];
var timePosiotnArray= [[248,756,0],[248,769,0],[248,765,0]];
var endTagPosiotnArray= [[162,663,0],[162,677,0],[162,675,0]];
var ripEndpage2PositionArray=[[850,482,0],[850,432,0],[928,366,0]];
var gepInfoPositionArray=[[-42.5,51.3,0],[-5,513.1,0],[-46.6,64.1,0]];
var gepTimePositionArray=[[353.1,518,0],[397.7,463.6,0],[368.6,370.4,0]];
var gepEndtagPositionArray=[[-42.5,51.3,0],[-46.6,64.1,0],[-46.6,64.1,0]];


var alertText="";
// UI  DEFINITION

UI(this)

function UI(object){
var win = (object instanceof Panel) ? object : new Window("palette","TVL_Endpage",[0,0,380,360],{resizeable:true,});

//STYLE GROUP DROPDOWNMENU
styleGrp=win.add("group",[5,5,705,505],"EndPage Style");
styleList=styleGrp.add("dropdownlist",[5,5,220,60],[]);
for (var i = 0; i < styleArray.length; i++)
{
styleList.add ("item", styleArray[i]); 
styleList.items[i].image = File (imagePath+styleImages[i]); 
styleList.items[i].text.alignment="center";
}


// PRESELECT FIRST STYLE
styleList.selection=[0];
styleIndex=styleList.selection.index;
assignStyle(styleArray[styleIndex]);

// INFO GROUP
infoGrp=win.add("group",[5,70,485,270],"undefined");
staticInfo=infoGrp.add("statictext",[5,5,75,25] ,"TYPE INFO",{multiline:true});
editInfo=infoGrp.add("edittext",[5,25,135,75] ,infoText,{readonly:0,noecho:0,borderless:0,multiline:1,enterKeySignalsOnChange:0});

//TIME
staticTime=infoGrp.add("statictext",[135,5,240,25] ,"TIME",{multiline:true});
editTime=infoGrp.add("edittext",[135,25,185,75] ,timeText,{readonly:0,noecho:0,borderless:0,multiline:0,enterKeySignalsOnChange:0});


//ENDTAG BOX
endtagList=styleGrp.add("dropdownlist",[225,5,440,60],[]);
for (var i = 0; i < endtagNameArray.length; i++)
{
endtagList.add ("item", endtagNameArray[i]); 
endtagList.items[i].image = File (endtagThumbArray[i]); 
endtagList.items[i].text.alignment="center";
}

endtagList.selection=[0];


// PROCESS BUTTON
process_btn=win.add("button",[5,150,335,180],"PROCESS");
alertText_btn =win.add("statictext",[5,190,335,210],alertText);

//folder_btn=win.add("button",[345,150,445,180],"Assets Folder");


//List functions
styleList.onChange = function () {
	styleIndex=styleList.selection.index;
	assignStyle(styleArray[styleIndex]);
	selectedComp.openInViewer;
}

}


//UI FUNCTION

/*folder_btn.onClick = function(){
	tvlandAssetsFolder=Folder.selectDialog("Select your TVland Assets Folder");
	alert(tvlandAssetsFolder);
}
*/
process_btn.onClick = function(){
	app.beginUndoGroup("ENDPAGE");
	
	

	infoText=editInfo.text;
	var infoArray=infoText.split("\n");
	for(var j=0 ; j<infoArray.length;j++){
		if(infoArray[j].length>=15){
		alert("Be Careful!! Text of Line "+ (j+1)+ "might be too long");
		}

	};
	
	timeText=editTime.text
  	
  	// NUMBER OF LINES RELATED PROCESS
  	var numOfLines = checkNumberOfLines(infoText);
  	var currentComp=selectedComp;
	var timeT=timeText.slice(0,timeText.length-1);
	var pcText=timeText.slice(timeText.length-1,timeText.length);
	pcText=pcText.toUpperCase();// force C/P to be upperCase
  	//var numOfLines = howLongIstext; //check how many lines in text and
  	
  	if(isComp(currentComp)==true){

  		
  		// CHANGE THE TEXT SOURCE OF TEXT LAYERS
		processText(infoText,currentComp.layer("infoText")); // replace text
		processText(timeText,currentComp.layer("timeText"));
		//processText(pcText,currentComp.layer("timeInfo"));

		// REPLACE THE SOURCE FILE OF THE ENDTAG
		assignEndtag(endtagList.selection,currentComp);

		// Position Adjustments dependig on number of lines
	
		changePosition((currentComp.layer("positionText")),numOfLines,infoPositionArray);
		changePosition((currentComp.layer("positionTime")),numOfLines,timePosiotnArray);
		changePosition((currentComp.layer("handwritten")),numOfLines,endTagPosiotnArray);
		

		
		if(styleList.selection.index===1){
			
			changePosition((currentComp.layer("repoRip")),numOfLines,ripEndpage2PositionArray);	
			if(numOfLines==3){
				currentComp.layer("repoRip").property("Scale").setValue([102,102,100]);
			}
			else{
				currentComp.layer("repoRip").property("Scale").setValue([92,92,100]);
			}
		}

		else if(styleList.selection.index===2 ||styleList.selection.index===5){
		
		// turn on/off the appropriate container
		var compContainerArray=findContainer(currentComp); // create array of container layers
		
		switchContainer(compContainerArray,numOfLines); 
		}
	}
	else{
	alert ("select a comp before proceeding");
	}
	app.endUndoGroup("ENDPAGE");
}

// ACTION FUNCTION
function processText(myText,myTextLayer){

	myTextLayer.sourceText.setValue(myText);
}


function assignStyle(selectedStyle){
	for(i=1; i<app.project.numItems;i++){

		if(app.project.item(i) instanceof CompItem && app.project.item(i).name==selectedStyle){
		selectedComp=app.project.item(i);
		
		}
		
	}
	
}

function assignEndtag(selectedEndtag, inComp){
	var endtagLayer=inComp.layer("handwritten");
  	var newEndtagPath=endtagArray[selectedEndtag.index];
  	var newFileEndatg= new File (newEndtagPath);
  	endtagLayer.source.replace(newFileEndatg);
}


	//var endtagLayer=inComp.layer("endtag");
  	
  	//endtagLayer.source.replace(newFileEndatg);


function changePosition(whatLayer,numberOfline,positionArray){
	if(numberOfline==3) {
        whatLayer.property("Position").setValue(positionArray[2]);
    }
    else if(numberOfline==2) {
        whatLayer.property("Position").setValue(positionArray[1]);
    }
    else{
    	whatLayer.property("Position").setValue(positionArray[0]);
    }
}

// checkFunction

function checkBoxSize(theBox,atTime){
	var theBoxWidth = theBox.sourceRectAtTime(atTime,false).width;
	var theBoxHeight = theBox.sourceRectAtTime(atTime,false).height;
	var theBoxeSize = [theBoxWidth,theBoxHeight];
	return theBoxeSize;
}

function isComp(theComp){
  if(theComp instanceof CompItem){
    return true;
  }
  else{
    return false;
  }
}

function checkNumberOfLines(theText){
	theText.text;
	textArray= theText.split("\n");
	if (textArray.length>=3){
		return 3
	}
	else if (textArray.length==2){
		return 2
	}
	else if (textArray.length<=1){
		return 1
	}
	else{
		return 0
	}
}

// UTILS FUNCTIONS

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


function findContainer(theComp){

	var containerArray=new Array();
	for(i=1;i<=theComp.numLayers;i++){
		if(theComp.layer(i).comment.match(/line$/)){
			containerArray.push(theComp.layer(i));
		}
		else{
			continue;
		}
	}

	return containerArray;
}

function switchContainer(array,containerSize){
	if(containerSize==3){
		array[2].enabled=true;
		array[1].enabled=false;
		array[0].enabled=false;
	}
	else if(containerSize==2){
		array[1].enabled=true;
		array[0].enabled=false;
		array[2].enabled=false;
	}
	else{
		array[0].enabled=true;
		array[1].enabled=false;
		array[2].enabled=false;
	}
}






