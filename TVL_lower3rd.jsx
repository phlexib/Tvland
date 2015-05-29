//// TVL_lower3rd v08
//// Update to EditText Box size


//Global Variables
var tvlandAssetsFolder= (new File($.fileName)).parent;
var stringtvlandAssetsFolder= (tvlandAssetsFolder.toString())+"/tvlandAssets/";
var styleIconPath= new Folder(stringtvlandAssetsFolder+"/lowerthirdicons/");
var styleArray=["footage_styleone","footage_styletwo","footage_stylethree","paper01_handwritten","paper01_oblique","paper01_straight","shape01_handwritten","shape01_oblique","shape01_straight","shape02_handwritten","shape02_oblique","shape02_straight"];
var styleIconArray=styleIconPath.getFiles("*.jpg");
var styles=[];



for (i=0;i<styleArray.length;i++){
	var newStyle ={
		style:styleArray[i],
		styleIcon:styleIconArray[i]};
	styles.push(newStyle);

}

// global hierarchy storage
var prjFolder=Object;
var renderFolder=[];
var editFolder=[];
var preFolder=[];
var l3rdComp= Object;
var textFolder= Object
var logoComp=findComp("TVL_Logo");



//UI DEFINITIONS
UI(this)
function UI(object){

var win = (object instanceof Panel) ? object : new Window("palette","new project",[0,0,400,500],{resizeable:true,});
L3rd_prj=win.add("group",[5,5,405,65],"undefined");
prjName=L3rd_prj.add("statictext",[5,10,125,35] ,"Master Comp Name :",{multiline:true});
prjText=L3rd_prj.add("edittext",[120,5,385,30] ,"type L3rd name here",{readonly:0,noecho:0,borderless:0,multiline:0,enterKeySignalsOnChange:1});
//prj_btn=L3rd_prj.add("button",[360,5,385,30],">>");

modules_panel=win.add("panel",[5,50,390,400],"Modules");

module1_list=modules_panel.add("dropdownlist",[30,40,240,85]);
for (var i = 0; i < styleArray.length; i++)
{
module1_list.add ("item", styleArray[i]); 
module1_list.items[i].image= File(styleIconArray[i]);
}
module1_list.selection=[0];


module2_list=modules_panel.add("dropdownlist",[30,90,240,135] ,);
for (var i = 0; i < styleArray.length; i++)
{
module2_list.add ("item", styleArray[i]); 
module2_list.items[i].image= File(styleIconArray[i]);
}
module2_list.selection=0
module3_list=modules_panel.add("dropdownlist",[30,140,240,185] ,);
for (var i = 0; i < styleArray.length; i++)
{
module3_list.add ("item", styleArray[i]); 
module3_list.items[i].image= File(styleIconArray[i]);
}
module3_list.selection=0
module4_list=modules_panel.add("dropdownlist",[30,190,240,235] ,);
for (var i = 0; i < styleArray.length; i++)
{
module4_list.add ("item", styleArray[i]); 
module4_list.items[i].image= File(styleIconArray[i]);
}
module4_list.selection=0
module5_list=modules_panel.add("dropdownlist",[30,240,240,285] ,);
for (var i = 0; i < styleArray.length; i++)
{
module5_list.add ("item", styleArray[i]); 
module5_list.items[i].image= File(styleIconArray[i]);
}
module5_list.selection=0

modul1_text=modules_panel.add("edittext",[250,40,330,85] ,"",{readonly:0,noecho:0,borderless:0,multiline:1,enterKeySignalsOnChange:1});
modul2_text=modules_panel.add("edittext",[250,90,330,135] ,"",{readonly:0,noecho:0,borderless:0,multiline:1,enterKeySignalsOnChange:1});
modul3_text=modules_panel.add("edittext",[250,140,330,185] ,"",{readonly:0,noecho:0,borderless:0,multiline:1,enterKeySignalsOnChange:1});
modul4_text=modules_panel.add("edittext",[250,190,330,235] ,"",{readonly:0,noecho:0,borderless:0,multiline:1,enterKeySignalsOnChange:1});
modul5_text=modules_panel.add("edittext",[250,240,330,285] ,"",{readonly:0,noecho:0,borderless:0,multiline:1,enterKeySignalsOnChange:1});

check_1=modules_panel.add("checkbox",[10,58,80,88],"");
check_1.value=0;
check_2=modules_panel.add("checkbox",[10,108,80,128],"");
check_2.value=0;
check_3=modules_panel.add("checkbox",[10,158,80,178],"");
check_3.value=0;
check_4=modules_panel.add("checkbox",[10,208,80,228],"");
check_4.value=0;
check_5=modules_panel.add("checkbox",[10,258,80,278],"");
check_5.value=0;
check_em=modules_panel.add("checkbox",[10,295,270,308],"add editor's marks transitions");
check_em.value=1;
check_logo=modules_panel.add("checkbox",[10,315,270,328],"add end logo");
check_logo.value=1;
activeLabel=modules_panel.add("statictext",[5,15,75,35] ,"active",{multiline:true});
moduleLabel=modules_panel.add("statictext",[110,15,180,35] ,"Module Style",{multiline:true});
textLabel=modules_panel.add("statictext",[280,15,350,35] ,"Text",{multiline:true});
timeLabel=modules_panel.add("statictext",[350,15,430,35] ,"Dur",{multiline:true});
dur1_text=modules_panel.add("edittext",[345,40,375,85] ,"2",{readonly:0,noecho:0,borderless:0,multiline:0,enterKeySignalsOnChange:0});
dur2_text=modules_panel.add("edittext",[345,90,375,135] ,"2",{readonly:0,noecho:0,borderless:0,multiline:0,enterKeySignalsOnChange:0});
dur3_text=modules_panel.add("edittext",[345,140,375,185] ,"2",{readonly:0,noecho:0,borderless:0,multiline:0,enterKeySignalsOnChange:0});
dur4_text=modules_panel.add("edittext",[345,190,375,235] ,"2",{readonly:0,noecho:0,borderless:0,multiline:0,enterKeySignalsOnChange:0});
dur5_text=modules_panel.add("edittext",[345,240,375,285] ,"2",{readonly:0,noecho:0,borderless:0,multiline:0,enterKeySignalsOnChange:0});
processL3d_btn=win.add("button",[5,410,350,440],"PROCESS");
helpL3d_btn=win.add("button",[360,410,390,440],"?");

}


//UI function

//create slot object to easy access information
var slot1={	isActive:check_1.value,slotStyle:module1_list.selection,slotText:modul1_text,slotDuration:(dur1_text)};
var slot2={	isActive:check_2.value,slotStyle:module2_list.selection,slotText:modul2_text,slotDuration:(dur2_text)};
var slot3={	isActive:check_3.value,slotStyle:module3_list.selection,slotText:modul3_text,slotDuration:(dur3_text)};
var slot4={	isActive:check_4.value,slotStyle:module4_list.selection,slotText:modul4_text,slotDuration:(dur4_text)};
var slot5={	isActive:check_5.value,slotStyle:module5_list.selection,slotText:modul5_text,slotDuration:(dur5_text)};


processL3d_btn.onClick= function(){
	app.beginUndoGroup("TVLAND L3rd");
	// update slot informations
	slot1={	isActive:check_1.value,slotStyle:module1_list.selection,slotText:modul1_text.text,slotDuration:parseInt(dur1_text.text)};
	slot2={	isActive:check_2.value,slotStyle:module2_list.selection,slotText:modul2_text.text,slotDuration:parseInt(dur2_text.text)};
	slot3={	isActive:check_3.value,slotStyle:module3_list.selection,slotText:modul3_text.text,slotDuration:parseInt(dur3_text.text)};
	slot4={	isActive:check_4.value,slotStyle:module4_list.selection,slotText:modul4_text.text,slotDuration:parseInt(dur4_text.text)};
	slot5={	isActive:check_5.value,slotStyle:module5_list.selection,slotText:modul5_text.text,slotDuration:parseInt(dur5_text.text)};

  createStructure(prjText.text);
	processL3rd();
	
  app.endUndoGroup();
}

// function Make NEW LOWER THIRD
function processL3rd(){
  var found = 0;
  var w = new Window ('palette');
  w.pbar = w.add ('progressbar', undefined, 0, found.length); w.pbar.preferredSize.width = 300;
  w.show();


  var editorCheck=check_em.value;
  var emArray=makeEditorsMarksArray();
  var modules=makeModuleArray();
  var durationArray=[];
  for(d=0;d<modules.length;d++){

    durationArray.push(modules[d].slotDuration);
    var totalDuration=sumArray(durationArray);
  }

  
	for(m=0;m<modules.length;m++){
    // progress bar
    
    var w = new Window ('palette');
    w.pbar = w.add ('progressbar', undefined, 0, modules.length); w.pbar.preferredSize.width = 300;
    w.show();
    w.pbar.value = m+1;
    //$.sleep(20); 


		var moduleDuration=modules[m].slotDuration+(9/23.976);		

		if(m>0){
		var timeArray=durationArray.slice(0,m);
    var moduleStartTime= sumArray(timeArray);
    moduleStartTime-=9/23.976;
		}
		else{
		var moduleStartTime=0;
    moduleDuration=modules[m].slotDuration;
		}

    l3rdComp.duration=totalDuration;
		var checkName=matchModuleName("footage",modules[m].slotStyle.toString());

    //check if it's a box or a text //
		if(checkName ==true){
			//alert("will create footage module");
			var footageModule=createFootageModule(modules[m].slotStyle.toString(),moduleDuration,prjFolder.name);
			addCompToComp(footageModule,l3rdComp,moduleStartTime);
      // create footage box
      if(editorCheck==true){
        var emArray=shuffleArray(emArray);
        var pickEm=emArray[Math.floor(Math.random() * emArray.length)];
        addCompToComp(pickEm,l3rdComp,moduleStartTime);
        var emLayer=l3rdComp.layer(1);
        emLayer.timeRemapEnabled=true;
        emLayer.outPoint=moduleStartTime+moduleDuration;
        var trEmProperty=emLayer.property("Time Remap");
        trEmProperty.removeKey(2);
        trEmProperty.setValueAtTime(moduleStartTime,0*1/24);
        trEmProperty.setValueAtTime(moduleStartTime+(9*1/24),10*1/24);
        trEmProperty.setValueAtTime(emLayer.outPoint-(9*1/24),84*1/24);
        trEmProperty.setValueAtTime(emLayer.outPoint,93*1/24);

        // ADD COLOR EXPRESSION TO EDITOR MARKS
        var accentColorExpression = "thisComp.layer(\"accentcolor\").effect(\"main\")(\"Color\")";
        l3rdComp.layer(1).Effects.addProperty("ADBE Fill");
        l3rdComp.layer(1).Effects.property("ADBE Fill").Color.expression=accentColorExpression;
      }
		}
    // create a text box modules
		else{
			//alert("will create text module");
			var shapeSelection=modules[m].slotStyle.toString().split("_");
			var withStyleShape=shapeSelection[0];
      var withStyleText=shapeSelection[1];

      var inText=(modules[m].slotText);
      inText=inText.toUpperCase();
      var textNumberOfLines=checkNumberOfLines(inText);
      

			var shapeModule= createShapeModule(withStyleShape,moduleDuration,textNumberOfLines,prjFolder.name);
      addCompToComp(shapeModule,l3rdComp,moduleStartTime);

      // add comment shape for COLOR PALETTE
      shapeModule.layer(1).comment=("shape,1 line,2 line, 3 line");
      l3rdComp.layer(1).comment=("shape"); 


      ////////ADD TEXT COMP 
      var textModule= createTextModule(inText,withStyleText,textNumberOfLines,moduleDuration,prjFolder.name);
      addCompToComp(textModule,l3rdComp,moduleStartTime);
      
      if(withStyleText=="handwritten"){

      var marker_h=new MarkerValue("replace handwritten text inside this comp.");
      l3rdComp.layer(1).property("Marker").setValueAtTime(moduleStartTime,marker_h);
      }

      // ADD COLOR EXPRESSION TO TEXT
      var secondColorExpression = "thisComp.layer(\"secondcolor\").effect(\"main\")(\"Color\")";
      l3rdComp.layer(1).Effects.addProperty("ADBE Fill");
      l3rdComp.layer(1).Effects.property("ADBE Fill").Color.expression=secondColorExpression;
      
      
      
      

      if(editorCheck==true){
        var emArray=shuffleArray(emArray);
        var pickEm=emArray[Math.floor(Math.random() * emArray.length)];
        addCompToComp(pickEm,l3rdComp,moduleStartTime);
        var emLayer=l3rdComp.layer(1);
        emLayer.timeRemapEnabled=true;
        emLayer.outPoint=moduleStartTime+moduleDuration;
        var trEmProperty=emLayer.property("Time Remap");
        trEmProperty.removeKey(2);
        trEmProperty.setValueAtTime(moduleStartTime,0*1/24);
        trEmProperty.setValueAtTime(moduleStartTime+(9*1/24),10*1/24);
        trEmProperty.setValueAtTime(emLayer.outPoint-(9*1/24),84*1/24);
        trEmProperty.setValueAtTime(emLayer.outPoint,93*1/24);
        // ADD COLOR EXPRESSION TO EDITOR MARKS
        var accentColorExpression = "thisComp.layer(\"accentcolor\").effect(\"main\")(\"Color\")";
        l3rdComp.layer(1).Effects.addProperty("ADBE Fill");
        l3rdComp.layer(1).Effects.property("ADBE Fill").Color.expression=accentColorExpression;


       }


		}

     
	}

  if(check_logo.value==true){
    addCompToComp(logoComp,l3rdComp,l3rdComp.duration-(10*1/23.976));
    l3rdComp.duration+=1;
  }
  alert("L3RD BUILD COMPLETE !!");
}



//PROCESS FUNCTIONS


function processText(myText,myTextLayer){

	myTextLayer.sourceText.setValue(myText);
}



// UTILS FUNCTIONS

function matchModuleName(wordToFind,selectedModule){
	var regWord = new RegExp(wordToFind,"g");
    if(selectedModule.match(regWord)){
      return true;
    }else{
       return false;
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
  var regWord = new RegExp(layerComment);
  for(i=1; i<=curComp.numLayers;i++){
    var curItem= curComp.layer(i);
    if(curItem.comment.match(regWord)){
      return curItem;
      break;
    }
  }
}



function findShapeSource(inFolder,withStyle,withLines){  
 var shapeFolder=inFolder;
  for (s=1;s<=shapeFolder.numItems;s++){
            var matchStyle=findMatch(shapeFolder.item(s),withStyle,"name");
            
            var matchLines=findMatch(shapeFolder.item(s),withLines,"name");
            
            if(matchLines!=null && matchStyle!=null){
               var matchShape = shapeFolder.item(s);
                
                break;
                }
            else{
                continue;
                }
    }
    return matchShape;
}

function findShapeLayerSource(inComp,withStyle,withLines){ 

 var sComp=inComp;
 
  for (s=1;s<=sComp.numLayers;s++){
            var matchStyle=findMatch(sComp.layer(s),withStyle,"comment");
            var matchLines=findMatch(sComp.layer(s),withLines,"comment");
            
            if(matchLines!=null && matchStyle!=null){
               var matchShape = sComp.layer(s);
                
                break;
                }
            else{
                continue;
                }
    }
    return matchShape;
}

function findTextSource(withText,withLines,withStyle){
    
  for (s=1;s<=app.project.numItems;s++){
            var matchTheText=findMatch(app.project.item(s),withText,"comment");
            var matchLines=findMatch(app.project.item(s),withLines,"comment");
            var matchStyle=findMatch(app.project.item(s),withStyle,"comment");
            if(matchTheText !=null && matchLines!=null && matchStyle!=null){
               var matchText = app.project.item(s);
                
                break;
                }
            else{
                continue;
                }
    }
    return matchText;
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

function findMatch(forItem,withWord,inAttribute){
    var regWord = new RegExp(withWord);

    switch(inAttribute){
        case "comment":
            if(forItem.comment.match(regWord)){
                return forItem;
            }
            else{
                return null;
                }
            break;

        case "name":
            if(forItem.name.match(regWord)){
                return forItem;
            }
            else{
                return null;
                }
            break;

    }
  
}

function addCompToComp(addComp,toComp,atTime){
	var newLayer= toComp.layers.add(addComp);
	newLayer.startTime=atTime;
	return newLayer;	
}

function prepArrayForList(oneArray,imageArray,toList){
	for (var i = 0; i < oneArray.length; i++){
	toList.add ("item", oneArray[i]); 
	toList.items[i].image= File (imageArray[i]);
	toList.selection=[0];
	}
}

function makeModuleArray(){
	var moduleArray=[];
	var listArray=[slot1,slot2,slot3,slot4,slot5];
	
	for (a=0;a<listArray.length;a++){

		if(listArray[a].isActive==true){
			moduleArray.push(listArray[a]);
		}
		else{
			continue;
		}
	}
	return moduleArray;
}


function addCompToComp(addComp,toComp,atTime){
	var newLayer= toComp.layers.add(addComp);
	newLayer.startTime=atTime;
	return newLayer;	
}


function sumArray(myArray){
	var total =0;
	for(i=0;i<myArray.length;i++){
		total+=myArray[i];
	}
	return total;
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
    return 1
  }
}


function makeEditorsMarksArray(){
  var emArray=[]
  for(i=1;i<=app.project.numItems;i++){
    
    var curMatch=findMatch(app.project.item(i),"EditorMarks_MOD","name");
    var curFormat=findMatch(app.project.item(i),"mov","name");
    
    if((curMatch instanceof FootageItem && curFormat instanceof FootageItem) ){
      emArray.push(curMatch);
    }
    else{
      continue;
    }
  }
  return emArray;
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

//////////////////////////////////////CREATE MODULES FUNCTIONS//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////CREATE STRUCTURE///////////

function createStructure(l3rdName){
	

	// Create new folder with name
	prjFolder=app.project.items.addFolder(l3rdName);
	
	// Create and add subfolders to main Folder
	renderFolder=app.project.items.addFolder("1.RenderComp");
	renderFolder.parentFolder=prjFolder;
	editFolder=app.project.items.addFolder("2.EditComps");
	editFolder.parentFolder=prjFolder;
	preFolder=app.project.items.addFolder("3.PreComps");
	preFolder.parentFolder=prjFolder;
	

	//Copy MasterComp and Move to Folder
	l3rdComp= findComp("MASTER_L3rd");
	l3rdComp=l3rdComp.duplicate();
	l3rdComp.name=l3rdName+"_render";
	l3rdComp.parentFolder=renderFolder;
	l3rdComp.openInViewer();
	//Copy FootageComp
	var bgComp= findComp("FOOTAGE_L3rd");
	bgComp=bgComp.duplicate();
	bgComp.name=l3rdName+"_bgfootage";
	bgComp.parentFolder=editFolder;

	
	var bgLayer=addCompToComp(bgComp,l3rdComp,0);
	bgLayer.moveToEnd();

	

}


////////////////////////////CREATE FOOTAGE MODULE///////

function createFootageModule(withStyle,withDuration,withL3rdName){
    // find the right box based on style
    var footageRefComp = findComp(withStyle);
    //store current name and duration
    var curName=footageRefComp.name;
   
    //duplicate the comp
    var footageComp=footageRefComp.duplicate();
    // move the comp to folder
    footageComp.parentFolder=preFolder;
    //rename the new comp
    footageComp.name=curName+"_"+withL3rdName;
  

    //create new footage background and replace 
  	var footageBgComp= findComp("FOOTAGE_L3rd");
  	curName=footageBgComp.name;
  	footageBgComp=footageBgComp.duplicate();
  	// move the comp to folder
    footageBgComp.parentFolder=editFolder;
  	footageBgComp.name=curName+"_"+withL3rdName+"_boxfootage";
  	//footageBgComp.parentFolder=editFolder;
  	var bgLayer=findLayer(footageComp,"footageprecomp");
  	//replace fooatge with new comp in case of multiple footage box
  	bgLayer.replaceSource(footageBgComp,true);

  //processing the duration element
  if(Math.round(footageComp.duration)!=withDuration){
    var animInLayer=findLayer(footageComp,"footagein");
    var animOutLayer=findLayer(footageComp,"footageout");
    var boxLayer=findLayer(footageComp,"box");
    var matteLayer=findLayer(footageComp,"footagematte");
    var footageLayer=findLayer(footageComp,"footageprecomp");
    footageComp.duration=withDuration;
    animInLayer.startTime=0;
         footageLayer.outPoint=footageComp.duration;
         matteLayer.outPoint=footageComp.duration;
    animOutLayer.startTime=footageComp.duration-(9*footageComp.frameDuration);
         boxLayer.inPoint=0;
         boxLayer.startTime=9*footageComp.frameDuration;
    boxLayer.outPoint=footageComp.duration-(9*footageComp.frameDuration);
        var trProperty=matteLayer.property("Time Remap");
        trProperty.setValueAtTime(animOutLayer.inPoint,80*1/24);
        trProperty.setValueAtTime(footageComp.duration,90*1/24);
  } 
  return footageComp;
}



////////////////////////////CREATE SHAPE MODULE///////


function createShapeModule(withStyle,withDuration,withNumberOfLines,withL3rdName){
  
 
  var shapeLength=1;
  if (withNumberOfLines<=1){
    shapeLength="1 line";
  } else if (withNumberOfLines==2){
    shapeLength="2 line";
  }else if (withNumberOfLines>=3){
    shapeLength="3 line";
  }

 
  //find the right shape source;
  var shapeFolder=findFolder("shapeComp"); 


  // find and copy master animation
  //store current name and duration for main animation comp
  var shapeRefAnimComp = findComp("L3rd_Shape_anim");
  var curName=shapeRefAnimComp.name;
  var shapeAnimComp=shapeRefAnimComp.duplicate();
    //rename the new comp
  shapeAnimComp.name=curName+"_"+withL3rdName;
  shapeAnimComp.parentFolder=preFolder;
  
  //turn/off unwanted precomps from anim comp
  
  
  // duplicate and enable only the right Lines precomp shape
  var shapeCompLineLayer= findShapeLayerSource(shapeAnimComp,withStyle,shapeLength);
  shapeCompLineLayer.moveToBeginning();
  shapeCompLineLayer.comment="shape";

  // duplicate and replace precomp
  var shapeCompLine=shapeCompLineLayer.source.duplicate();
  shapeCompLine.name=curName+"_"+withL3rdName+"_preshape";
  shapeCompLineLayer.replaceSource(shapeCompLine,true);
  shapeCompLine.parentFolder=preFolder;
  
  for (l=2;l<=shapeAnimComp.numLayers;l++){
          shapeAnimComp.layer(l).remove();
  
  }
  shapeAnimComp.layer(1).comment="shape"
  //precompose shapeCompLine for retime
  var layerIndices= [1,1];
  var retimeComp=shapeAnimComp.layers.precompose(layerIndices,shapeCompLine.name+"_retime",true);
  var retimeShape=shapeAnimComp.layer(1);
  var numberLayers=shapeAnimComp.numLayers;
  for(r=2;r<numberLayers;r++){
    shapeAnimComp.layer(r).enable=false;
  }
  //turn on time remap
  retimeShape.timeRemapEnabled=true;
  //adjust shapeanim duration
  shapeAnimComp.duration=withDuration;

  var trProperty=retimeShape.property("Time Remap");

  trProperty.setValueAtTime(0,0*1/24);
  trProperty.setValueAtTime((9*1/24),10*1/24);
  trProperty.setValueAtTime(shapeAnimComp.duration-(9*1/24),232*1/24);
  trProperty.setValueAtTime(shapeAnimComp.duration,240*1/24);
 
  var colorShapeComp=shapeAnimComp.layer(1).source.duplicate();
  colorShapeComp.name=curName+withL3rdName+"_colorshape";
  shapeAnimComp.layer(1).replaceSource(colorShapeComp,true);
  shapeAnimComp.layer(1).comment="shape";
  for(r=1;r<numberLayers;r++){
    shapeAnimComp.layer(2).remove();
  }
  //replace the text depending on style
return shapeAnimComp ;
}


////////////////////////////////CREATE TEXT MODULE//////////
function createTextModule(withText,withStyle,withNumberOfLines,withDuration,withL3rdName){
  
  var newText=withText;
  //find the right textSource based on style and lines;
  //var textFolder=findFolder("masterText"); 
  if (withNumberOfLines<=1){
    var stringNumberOfLines="oneline";
  }
  else if (withNumberOfLines==2){
    var stringNumberOfLines="twolines";
  }
   else if (withNumberOfLines>=3){
    var stringNumberOfLines="threelines";
  }
  
  var textRefComp = findTextSource("text",stringNumberOfLines,withStyle);

  //store current name and duration
  var curName=textRefComp.name;
  var textComp=textRefComp.duplicate();
  //rename the new comp
  textComp.name=curName+"_"+withL3rdName+"_text";
  textComp.parentFolder=editFolder;
  //set duration
  textComp.duration=withDuration;
  for (l=1;l<=textComp.numLayers;l++){
    
    textComp.layer(l).startTime=0;
    textComp.layer(l).outPoint=textComp.duration;
  }
  var matteLayer=findLayer(textComp,"mattelayer");
  var textLayer= findLayer(textComp,"edittext");
  var trProperty=matteLayer.property("Time Remap");

  trProperty.setValueAtTime(0,0*1/24);
  trProperty.setValueAtTime((9*1/24),10*1/24);
  trProperty.setValueAtTime(textComp.duration-(9*1/24),85*1/24);
  trProperty.setValueAtTime(textComp.duration,93*1/24);
 
  //replace the text depending on style
  if(withStyle != "handwritten"){
    
    textLayer.sourceText.setValue(newText);
    var textVal=textLayer.sourceText.value;
    textVal.justification = ParagraphJustification.RIGHT_JUSTIFY;
    textLayer.sourceText.setValue(textVal);
    
  }
  else{
    
    alert("To Change a handwritten text, select the text comp and use TVLand textLibrary script.")
  }
return textComp;
}
