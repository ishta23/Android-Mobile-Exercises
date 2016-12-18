		// within the code below I assume I am drawing into a 1860x990 box
		// then I can scale the group to whatever size the final canvas is
		// in this case 4140 x 2200 for the wall
		// you should pick an appropriate local size and canvas size that are easy for you to work with

		(function() {

		  var localHeight = 990;
		  var localWidth = 1860;

		  var canvas = this.__canvas = new fabric.Canvas('c');
		  canvas.backgroundColor = "#5555F5"; // background blue to help find it
		  //fabric.Object.prototype.transparentCorners = false;
		  canvas.renderAll();

		/*
		  canvas.on('mouse:over', function(e) {
		    console.log(e.target);
		    //canvas.renderAll();
		  });

		  canvas.on('mouse:out', function(e) {
		    console.log(e.target);
		    //canvas.renderAll();
		  });
		*/

		var backWall = new fabric.Rect({
			  left: 0,
			  top: 0,
			  fill: 'white',
			  stroke: 'black',
			  width: 450,
			  height: localHeight,
			  angle: 0
			});
			backWall.hasControls = backWall.hasBorders = false;
			backWall.lockMovementX = backWall.lockMovementY = true;

			var sideWall = new fabric.Rect({
			  left: 450,
			  top: 0,
			  fill: 'white',
			  stroke: 'black',
			  width: 960,
			  height: localHeight,
			  angle: 0
			});
			sideWall.hasControls = sideWall.hasBorders = false;
			sideWall.lockMovementX = sideWall.lockMovementY = true;

			var frontWall = new fabric.Rect({
			  left: 1410,
			  top: 0,
			  fill: 'white',
			  stroke: 'black',
			  width: 450,
			  height: localHeight,
			  angle: 0
			});
			frontWall.hasControls = frontWall.hasBorders = false;
			frontWall.lockMovementX = frontWall.lockMovementY = true;

			var bathSpout = new fabric.Rect({
			  left: 1635,
			  top: 950,
			  originX: 'center',
			  originY: 'center',
			  fill: 'grey',
			  stroke: 'black',
			  width: 60,
			  height: 30,
			  angle: 0
			});


			bathSpout.hasControls = bathSpout.hasBorders = false;
			bathSpout.lockMovementX = bathSpout.lockMovementY = true;

		// this lets me 'select' it but I cant keep clicking on it more than once

		//////////////TOO MUCH WATER USED FEATURE//////////////////////////////
		
		var showerHead = new fabric.Circle({
		  radius: 20, fill: 'black', left: 1635, top: 100,   originX: 'center', originY: 'center'
		});
		var showerHead2 = new fabric.Circle({
		  radius: 25, fill: 'red', left: 1635, top: 100,   originX: 'center', originY: 'center'
		});
		var waterUse = 0;
		function updateWaterUse() {
		if (waterUse > 0.5) {
		  	showerHead2.visible = true;
		  } 
		else {
		  	showerHead2.visible = false;
		}}

		updateWaterUse();

		showerHead.on('selected', function() {
		  //console.log('selected a rectangle');
		  waterUse = 1 - waterUse;
		  updateWaterUse();
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});
		/////////////////TIME, TIMER, WEATHER/////////////////////////////
		var seperator = new fabric.Rect({
			left: 1425,
			top: 535,
			fill: 'black',
			width: 195,
			height: 5,
			angle: 0,
			opacity: 0.9
		});

		var seperator2 = new fabric.Rect({
			left: 1425,
			top: 400,
			fill: 'black',
			width: 195,
			height: 5,
			angle: 0,
			opacity: 0.9
		});


				var showTimeRight = new fabric.Text('default', { left: 1520, top: 200, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
		  originY: 'center',});
			showTimeRight.text = "7:32 am";
		showTimeRight.hasControls = showTimeRight.hasBorders = false;
		showTimeRight.lockMovementX = showTimeRight.lockMovementY = true;
		showTimeRight.selectable = false
		showTimeRight.evented = false

		var imgElement = document.getElementById('weather_image');
		var imgInstance = new fabric.Image(imgElement, {
		  left: 1680,
		  top: 150,
		  angle: 0,
		  opacity: 0.9
		});
		imgInstance.scale(0.4);

		var showTimeLeft= new fabric.Text('default', { left: 100, top: 200, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
		  originY: 'center',});
			showTimeLeft.text = "7:32 am";
		showTimeLeft.hasControls = showTimeLeft.hasBorders = false;
		showTimeLeft.lockMovementX = showTimeLeft.lockMovementY = true;
		showTimeLeft.selectable = false
		showTimeLeft.evented = false

		var Timer= new fabric.Text('default', { left: 280, top: 200, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
		  originY: 'center',});
			Timer.text = "00:30";
		Timer.hasControls = Timer.hasBorders = false;
		Timer.lockMovementX = Timer.lockMovementY = true;
		Timer.selectable = false
		Timer.evented = false

		var imgTimer = document.getElementById('timer');
		var imgTimerInt = new fabric.Image(imgTimer, {
		  left: 1450,
		  top: 400,
		  angle: 0,
		  opacity: 0.9
		});
		imgTimerInt.scale(0.7);

		//////////////////////TEMPERATURE CONTROLS ////////////////////////////////////
		//tempDisplay.text 

		var temperature = 0;
		var tempDisplay= new fabric.Text('default', { left: 900, top: 920, fontFamily: 'Arial', fontSize: 30, fontWeight: 'italic', originX: 'center',
		  originY: 'center',});
		tempDisplay.text = "100'F/37'C";
		tempDisplay.hasControls = tempDisplay.hasBorders = false;
		tempDisplay.lockMovementX = tempDisplay.lockMovementY = true;
		tempDisplay.selectable = false
		tempDisplay.evented = false

		var imgUp = document.getElementById('up_arrow');
		var imgUPInt = new fabric.Image(imgUp, {
		  left: 835,
		  top: 800,
		  angle: 0,
		  opacity: 0.9
		});
		imgUPInt.scale(0.5);
		imgUPInt.evented =true;

		var imgUpBox = new fabric.Rect({
		  left: 835,
		  top: 800,
		  width: 100,
		  height: 100,
		  angle: 0,
		  opacity: 0.0
		});
		imgUpBox.lockMovementX = imgUpBox.lockMovementY = true;

		var imgDown = document.getElementById('down_arrow');
		var imgDownInt = new fabric.Image(imgDown, {
		  left: 875,
		  top: 925,
		  angle: 0,
		  opacity: 0.9
		});
		imgDownInt.scale(0.5);


		function updateTemp() {
		if (temperature > 0.5) {
		  tempDisplay.backgroundColor="#ff1a1a";
		  tempDisplay.text = "120'F/48'C";
		  turnOn.text="ON";
		  turnOn.fill="#00ff99";
		  } 
		else {
		  tempDisplay.backgroundColor="white";
		  tempDisplay.text = "100'F/48'C";
		}
		}

		updateTemp();
		imgUpBox.on('selected', function() {
		  //console.log('selected a rectangle');
		  temperature = 1 - temperature;
		  updateTemp();
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});

		// //////////////////////TV and MUSIC ////////////////////////
		//imgTVInt.opacity = 1.0; //house of cards
		//imgMediaBox.opacity= 0.9; //rect
		//imgMediaInt.opacity //media icon

		var imgTV = document.getElementById('tv');
		var imgTVInt = new fabric.Image(imgTV, {
		  left: 1450,
		  top: 650,
		  angle: 0,
		  opacity: 0.0
		});
		imgTVInt.scale(0.3);

		var imgMedia = document.getElementById('media_icon');
		var imgMediaInt = new fabric.Image(imgMedia, {
		  left: 1775,
		  top: 450,
		  angle: 0,
		  opacity: 1.0
		});
		imgMediaInt.scale(0.4);

		var mediaChooser = new fabric.Group([imgMediaInt, imgTVInt], {originX: 'center', originY: 'center'});
		
		var imgMediaBox = new fabric.Rect({
		  left: 1775,
		  top: 450,
		  width: 90,
		  height: 75,
		  fill: 'cyan', 
		  angle: 0,
		  opacity: 0.0
		});
		imgMediaBox.lockMovementX = imgMediaBox.lockMovementY = true;
		/////////////////////////////MUSIC/////////////////////////////
		//imgMusicBox.opacity=0.7; //rect 
		//imgMusicInt.opacity=0.7;	//fall out boy
		//imgMIconInt.opacity //icon 
		//
		var imgMusic = document.getElementById('music');
		var imgMusicInt = new fabric.Image(imgMusic, {
		  left: 500,
		  top: 725,
		  angle: 0,
		  opacity: 0.9
		});
		imgMusicInt.scale(0.4);

		var imgMIcon = document.getElementById('music_icon');
		var imgMIconInt = new fabric.Image(imgMIcon, {
		  left: 1700,
		  top: 450,
		  angle: 0,
		  opacity: 0.9
		});
		imgMIconInt.scale(0.15);

		var musicChooser = new fabric.Group([imgMusicInt, imgMIconInt], {originX: 'center', originY: 'center'});

		var imgMusicBox = new fabric.Rect({
		  left: 1700,
		  top: 450,
		  width: 90,
		  height: 75,
		  fill: 'cyan', 
		  angle: 0,
		  opacity: 0.9
		});
		imgMusicBox.lockMovementX = imgMusicBox.lockMovementY = true;
		
		var  media = 0;

		function updateMedia() {
		if (media > 0.5) {
		  imgTVInt.opacity = 1.0;
		  imgMediaBox.opacity= 0.9;
		  imgMusicInt.opacity=0.0;
		  imgMusicBox.opacity=0.0;
		  } 
		else {
		  imgTVInt.opacity= 0.0;
		  imgMediaBox.opacity= 0.0;
		  imgMusicInt.opacity=0.0;
		  imgMusicBox.opacity=0.0;
		}}

		updateMedia();
		imgMediaBox.on('selected', function() {
		  //console.log('selected a rectangle');
		  media = 1 - media;
		  updateMedia();
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});
		/////////////MUSIC INTERACTIVITY//////
		
		var  music = 0;

		function updateMusic(){
		if (music > 0.5) {
		  imgMusicInt.opacity = 1.0;
		  imgMusicBox.opacity= 0.9;
		  imgTVInt.opacity= 0.0;
		  imgMediaBox.opacity= 0.0;
		  } 
		else {
		  imgMusicInt.opacity=0.0;
		  imgMusicBox.opacity=0.0;
		  imgTVInt.opacity= 0.0;
		  imgMediaBox.opacity= 0.0;
		}}

		updateMusic();

		imgMusicBox.on('selected', function() {
		  //console.log('selected a rectangle');
		  music = 1 - music;
		  updateMusic();
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});	
		////////////////////BACKGROUND IMAGE /////////////////
		var imgbackgrd = document.getElementById('backgrd');
		var imgbackgrdInt = new fabric.Image(imgbackgrd, {
			left: 0,
			top: 0,
		   angle: 0,
		   opacity: 0.6
		 });
		imgbackgrdInt.scale(1.38);

		var turnBgd = new fabric.Text('default', { left: 300, top: 250, fontFamily: 'Arial', fontSize: 19, fontWeight: 'italic', originX: 'center',
				originY: 'center',});
		turnBgd.hasControls = turnBgd.hasBorders = false;
		turnBgd.lockMovementX = turnBgd.lockMovementY = false;
		turnBgd.selectable = false
		turnBgd.evented = false

		var onBgd = new fabric.Rect({
		left: 200,
		top: 225,
		fill: '#c0c0c0',
		width: 200,
		height: 50,
		angle: 0,
		opacity: 0.0
		});
		onBgd.lockMovementX = onBgd.lockMovementY = true;

		var backgrd = 0;

		function updateBgd() {
			if (backgrd > 0.5) {
					  turnBgd.text = "Waterfall";
					  imgbackgrdInt.opacity = 0.7;
					  onBgd.opacity= 0.6;

					  } 
					else {
					  	turnBgd.text = "Choose Background  V";
					   imgbackgrdInt.opacity = 0.0;
					   onBgd.opacity=0.4;

					}
					}

					updateBgd();

					onBgd.on('selected', function() {
					  //console.log('selected a rectangle');
					  backgrd = 1 - backgrd;
					  updateBgd();
					 canvas.deactivateAll(); // deselect everything - so can click again 
					});
		///////////////////LIGHTS ///////////////////////////////////
		var imgBulb = document.getElementById('light_bulb');
			var imgBulbInt = new fabric.Image(imgBulb, {
			  left: 1625,
			  top: 450,
			  angle: 0,
			  opacity: 0.9
			});
			imgBulbInt.scale(0.3);

			var imgBulbBox = new fabric.Rect({
			  left: 1625,
			  top: 450,
			  width: 73,
			  height: 75,
			  fill: 'black', 
			  angle: 0,
			  opacity: 0.6
			});
			imgBulbBox.hasBorders =true;
			imgBulbBox.lockMovementX = imgBulbBox.lockMovementY = true;

			var brightness =0;

			function updateBulb() {
			if (brightness > 0.5) {
			  imgBulbBox.fill="yellow";
			  imgBulbBox.opacity= 0.5;
			  } 
			else {
			  imgBulbBox.fill="white";
			  imgBulbBox.opacity=0.0;
			}
			}

			updateBulb();
			imgBulbBox.on('selected', function() {
			  //console.log('selected a rectangle');
			  brightness = 1 - brightness;
			  updateBulb();
			 canvas.deactivateAll(); // deselect everything - so can click again 
			});
		///////////////////TURN ON OR OFF//?????////////////////

		var turnOnOff = new fabric.Text('default', { left: 1750, top: 575, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
				  originY: 'center',});
				turnOnOff.hasControls = turnOnOff.hasBorders = false;
				turnOnOff.lockMovementX = turnOnOff.lockMovementY = false;
				turnOnOff.selectable = false
				turnOnOff.evented = false

				var turnOn = new fabric.Rect({
				  left: 1650,
				  top: 550,
				  fill: '#00ff99',
				  width: 200,
				  height: 50,
				  angle: 0
				});
				turnOn.lockMovementX = turnOn.lockMovementY = true;
				var control = 0;

				function updateTurnOn() {
				if (control > 0.5) {
				  turnOn.fill = 'red';
				  turnOnOff.text = "OFF";
				  } 
				else {
				  turnOn.fill = '#00ff99';
				  turnOnOff.text = "ON";
				}
				}

				updateTurnOn();

				turnOn.on('selected', function() {
				  //console.log('selected a rectangle');
				  control = 1 - control;
				  updateTurnOn();
				 canvas.deactivateAll(); // deselect everything - so can click again 
				});

		/////////////////////DIFFERENT SHOWERHEAD/Tub CONTROLS ////////////
		var imgLow = document.getElementById('low_tub');
		var imgLowInt = new fabric.Image(imgLow, {
		  left: 1650,
		  top: 350,
		  angle: 0,
		  opacity: 0.0
		});
		imgLowInt.scale(0.4);

		var imgLow2 = document.getElementById('low_press');
		var imgLow2Int = new fabric.Image(imgLow2, {
		  left: 1650,
		  top: 350,
		  angle: 0,
		  opacity: 0.9
		});
		imgLow2Int.scale(0.7);

		var imgLowBox = new fabric.Rect({
		  left: 1650,
		  top: 350,
		  width: 90,
		  height: 75,
		  fill: 'cyan', 
		  angle: 0,
		  opacity: 0.0
		});
		imgLowBox.lockMovementX = imgLowBox.lockMovementY = true;

		var imgHigh = document.getElementById('high_tub');
		var imgHighInt = new fabric.Image(imgHigh, {
		  left: 1750,
		  top: 350,
		  angle: 0,
		  opacity: 0.0
		});
		imgHighInt.scale(0.4);
		var imgHigh2 = document.getElementById('high_press');
		var imgHigh2Int = new fabric.Image(imgHigh2, {
		  left: 1750,
		  top: 350,
		  angle: 0,
		  opacity: 0.9
		});
		imgHigh2Int.scale(0.2);

		var imgHighBox = new fabric.Rect({
		  left: 1750,
		  top: 350,
		  width: 75,
		  height: 75,
		  fill: 'cyan', 
		  angle: 0,
		  opacity: 0.99
		});
		imgHighBox.lockMovementX = imgHighBox.lockMovementY = true;
		var pressureChooser = new fabric.Group([imgLowInt, imgLow2Int, imgHighInt, imgHigh2Int], {originX: 'center', originY: 'center'});

		//Low Pressure ////////////////
		var  press= 0;

		function updateLowPressure(){
		if (press> 0.5) {
		  imgLowBox.opacity= 0.6;
		  imgHighBox.opacity= 0.0;
		  } 
		else {
		  imgLowBox.opacity= 0.0;
		  imgHighBox.opacity= 0.0;
		}}

		updateLowPressure();

		imgLowBox.on('selected', function() {
		  //console.log('selected a rectangle');
		  press = 1 - press;
		  updateLowPressure();
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});
		////Tub///////

		var  press2 = 0;

		function updateHighPressure(){
		if (press2 > 0.5) {
		  imgHighBox.opacity= 0.6;
		  imgLowBox.opacity= 0.0;
		  } 
		else {
		  imgLowBox.opacity= 0.0;
		  imgHighBox.opacity= 0.0;
		}}

		updateHighPressure();

		imgHighBox.on('selected', function() {
		  //console.log('selected a rectangle');
		  press2 = 1 - press2;
		  updateHighPressure();
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});
		/////////////////////////////SHOWER OR TUB ////////////////
		// imgLowBox.opacity= 0.6;
		//   imgHighBox.opacity= 0.0;
		var imgShower = document.getElementById('showerChoose');
		var imgShowerInt = new fabric.Image(imgShower, {
		  left: 1650,
		  top: 250,
		  angle: 0,
		  opacity: 0.9
		});
		imgShowerInt.scale(0.3);

		var imgShowerBox = new fabric.Rect({
		  left: 1650,
		  top: 250,
		  width: 90,
		  height: 75,
		  fill: 'cyan', 
		  angle: 0,
		  opacity: 0.0
		});
		imgShowerBox.lockMovementX = imgShowerBox.lockMovementY = true;

		var imgTub = document.getElementById('tubChoose');
		var imgTubInt = new fabric.Image(imgTub, {
		  left: 1750,
		  top: 250,
		  angle: 0,
		  opacity: 0.9
		});
		imgTubInt.scale(0.3);

		var imgTubBox = new fabric.Rect({
		  left: 1750,
		  top: 250,
		  width: 105,
		  height: 50,
		  fill: 'cyan', 
		  angle: 0,
		  opacity: 0.0
		});
		imgTubBox.lockMovementX = imgTubBox.lockMovementY = true;
		
		var modeChooser = new fabric.Group([imgShowerInt, imgTubInt], {originX: 'center', originY: 'center'});

		//Shower ////////////////
		var  shower= 0;

		function updateShower(){
		if (shower > 0.5) {
		  imgShowerBox.opacity= 0.6;
		  imgTubBox.opacity= 0.0;
		  } 
		else {
		  imgShowerBox.opacity= 0.0;
		  imgTubBox.opacity= 0.0;
		}}

		updateShower();

		imgShowerBox.on('selected', function() {
		  //console.log('selected a rectangle');
		  shower = 1 - shower;
		  updateShower();
		 canvas.deactivateAll(); // deselect everything - so can click again imgLow2Int.opacity=0.0;
		 //change shower/tub pressure images 
		  imgLow2Int.opacity=0.6;
		  imgHigh2Int.opacity=0.6;
		  imgLowInt.opacity=0.0;
		  imgHighInt.opacity=0.0;
		  //Background 
		  turnBgd.left=700;
		  turnBgd.top=550;
		  onBgd.left =475;
		  onBgd.top=525;

		 

		});
		////Tub///////

		var  tub = 0;

		function updateTub(){
		if (tub > 0.5) {
		  imgTubBox.opacity= 0.6;
		  imgShowerBox.opacity= 0.0;
		  } 
		else {
		  imgShowerBox.opacity= 0.0;
		  imgTubBox.opacity= 0.0;
		}}

		updateTub();

		imgTubBox.on('selected', function() {
		  //console.log('selected a rectangle');
		  tub = 1 - tub;
		  updateTub();
		 canvas.deactivateAll(); // deselect everything - so can click again 
		 //Shower/Tub pressure images
		 imgLow2Int.opacity=0.0;
		  imgHigh2Int.opacity=0.0;
		  imgLowInt.opacity=0.6;
		  imgHighInt.opacity=0.6;

		  //Background 
		  turnBgd.left=550;
		  turnBgd.top=750;
		  onBgd.left =550;
		  onBgd.top=725;
		});


		///////////////////LANGUAGES////////////////////////////////////
		//onLangFrench.opacity=0.7;
		// showTimeLeft.text = "07:32"
		 //  showTimeRight.text ="07:32"
		 //  if (control > 0.5) {
			// turnOnOff.text = "DE";
		 //  }
		 //  else 
		 //  {
		 //  	turnOnOff.text="SUR";
		 //  }


		var imglangSelect = document.getElementById('langChoose');
		var imgLangSelInt = new fabric.Image(imglangSelect, {
		  left: 1450,
		  top: 540,
		  angle: 0,
		  opacity: 0.9
		});
		imgLangSelInt.scale(0.95);

		var onLangEnglish = new fabric.Rect({
		left: 1430,
		top: 570,
		fill: 'cyan',
		width: 175,
		height: 20,
		angle: 0,
		opacity: 0.4
		});
		onLangEnglish.lockMovementX = onLangEnglish.lockMovementY = true;
		var onLangFrench = new fabric.Rect({
		left: 1430,
		top: 590,
		fill: 'cyan',
		width: 175,
		height: 20,
		angle: 0,
		opacity: 0.4
		});
		onLangFrench.lockMovementX = onLangFrench.lockMovementY = true;

		var langSwitch= 0;

		function updateLang() {
		if (langSwitch > 0.5) {
		  onLangFrench.opacity =0.4;
		  onLangEnglish.opacity =0.0;
		  } 
		else {
		  onLangFrench.opacity = 0.0;
		  onLangEnglish.opacity=0.4;
		}
		}

		updateLang();

		onLangFrench.on('selected', function() {
		  //console.log('selected a rectangle');
		  ///add other changes here 
		  langSwitch = 1 - langSwitch;
		  updateLang();
		  //Time and on and off 
		  showTimeLeft.text = "07:32"
		  showTimeRight.text ="07:32"
		  if (control > 0.5) {
			turnOnOff.text = "DE";
		  }
		  else 
		  {
		  	turnOnOff.text="SUR";
		  }
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});

		onLangEnglish.on('selected', function() {
		  //console.log('selected a rectangle');
		  ///add other changes here 
		  langSwitch = 1 - langSwitch;
		  updateLang();
		  //Time and on and off 
		  showTimeLeft.text = "7:32 am"
		  showTimeRight.text ="7:32 am"
		  if (control > 0.5) {
			turnOnOff.text = "OFF";
		  }
		  else 
		  {
		  	turnOnOff.text="ON";
		  }
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});
		 ///////////////////////SAMPLE//////////////////
		var tempText = new fabric.Text('default', { left: 900, top: 600, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
		  originY: 'center',});
		tempText.hasControls = tempText.hasBorders = false;
		tempText.lockMovementX = tempText.lockMovementY = false;
		tempText.selectable = false
		tempText.evented = false

		var waterControl = new fabric.Rect({
		  left: 900,
		  top: 600,
		  fill: 'grey',
		  width: 50,
		  height: 50,
		  angle: 0
		});

		var waterTemp = 0;

		function updateWaterTemp() {
		if (waterTemp > 0.5) {
		  waterControl.fill = 'red';
		  tempText.text = "hot";
		  } 
		else {
		  waterControl.fill = 'aqua';
		  tempText.text = "cold";
		}
		}

		updateWaterTemp();

		waterControl.on('selected', function() {
		  //console.log('selected a rectangle');
		  waterTemp = 1 - waterTemp;
		  updateWaterTemp();
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});
		//////////////////////USER PREFERENCES///////////////////////////////

		var profileChooser = 0;
			//profile 1//////
		var pfl1 = document.getElementById('profiles');
		var profile1 = new fabric.Image(pfl1, {
		  left: 500,
		  top: 550,
		  angle: 0,
		  opacity: 0.9
		});
		profile1.scale(0.4);

		var p1txt = new fabric.Text('default', { left: 550, top: 700, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
		  originY: 'center',});
		p1txt.text ="Mike";
		p1txt.hasControls = p1txt.hasBorders = false;
		p1txt.lockMovementX = p1txt.lockMovementY = false;
		p1txt.selectable = false
		p1txt.evented = false

		var p1Sp = new fabric.Rect({
		  left: 500,
		  top: 550,
		  width: 100,
		  height: 200,
		  angle: 0,
		  opacity: 0.0
		});
		p1Sp.lockMovementX = p1Sp.lockMovementY = true;
		function updateProfile1() {
		if (profileChooser > 0.5) {
		  tempDisplay.text = "102'F/38.8'C";
		  imgLowBox.opacity = 0.7;
		  imgTubBox.opacity= 0.7;
		  imgMusicBox.opacity = 0.7;

		  }
		}
		updateProfile1();

		p1Sp.on('selected', function() {
		  //console.log('selected a rectangle');
		  profileChooser= 1 - profileChooser;
		  updateProfile1();
		 canvas.deactivateAll(); // deselect everything - so can click again 
		 profilesImg.visible=false;
		profilesTxt.visible=false;
		});
		//profile 2//////
		var pfl2 = document.getElementById('profiles');
		var profile2 = new fabric.Image(pfl1, {
		  left: 700,
		  top: 550,
		  angle: 0,
		  opacity: 0.9
		});
		profile2.scale(0.4);

		var p2txt = new fabric.Text('default', { left: 750, top: 700, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
		  originY: 'center',});
		p2txt.text ="Anne";
		p2txt.hasControls = p2txt.hasBorders = false;
		p2txt.lockMovementX = p2txt.lockMovementY = false;
		p2txt.selectable = false
		p2txt.evented = false

		var p2Sp = new fabric.Rect({
		  left: 700,
		  top: 550,
		  width: 100,
		  height: 200,
		  angle: 0,
		  opacity: 0.0
		});
		p2Sp.lockMovementX = p2Sp.lockMovementY = true;
		function updateProfile2() {
		if (profileChooser > 0.5) {
		  tempDisplay.text = "98'F/36'C";
		  imgHighBox.opacity = 0.7;
		  imgTubBox.opacity= 0.7;
		  imgMusicBox.opacity = 0.7;
		  imgMusicInt.opacity=0.7;

		  }
		}
		updateProfile2();

		p2Sp.on('selected', function() {
		  profileChooser= 1 - profileChooser;
		  updateProfile2();
		   profilesImg.visible=false;
		profilesTxt.visible=false;
		 canvas.deactivateAll(); // deselect everything - so can click again
		});

		//Profile 3 

		var profile3 = new fabric.Image(pfl1, {
		  left: 900,
		  top: 550,
		  angle: 0,
		  opacity: 0.9
		});
		profile3.scale(0.4);

		var p3txt = new fabric.Text('default', { left: 950, top: 700, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
		  originY: 'center',});
		p3txt.text ="Katie";
		p3txt.hasControls = p3txt.hasBorders = false;
		p3txt.lockMovementX = p3txt.lockMovementY = false;
		p3txt.selectable = false
		p3txt.evented = false

		var p3Sp = new fabric.Rect({
		  left: 900,
		  top: 550,
		  fill: 'grey',
		  width: 100,
		  height: 200,
		  angle: 0,
		  opacity: 0.0
		});
		p3Sp.lockMovementX = p3Sp.lockMovementY = true;
		function updateProfile3() {
		if (profileChooser > 0.5) {
		  tempDisplay.text = "102'F/38.8'C";
		  imgLowBox.opacity = 0.7;
		  imgTubBox.opacity= 0.7;
		  imgMediaBox.opacity=0.7;
		  imgTVInt.opacity=0.7;

		  }
		}
		updateProfile3();

		p3Sp.on('selected', function() {
		  profileChooser= 1 - profileChooser;
		  updateProfile3();
		   profilesImg.visible=false;
		profilesTxt.visible=false;
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});

		//Profile 4
			var profile4 = new fabric.Image(pfl1, {
			  left: 1100,
			  top: 550,
			  angle: 0,
			  opacity: 0.9
			});
			profile4.scale(0.4);

			var p4txt = new fabric.Text('default', { left: 1150, top: 700, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
			  originY: 'center',});
			p4txt.text ="Zach";
			p4txt.hasControls = p4txt.hasBorders = false;
			p4txt.lockMovementX = p4txt.lockMovementY = false;
			p4txt.selectable = false
			p4txt.evented = false

			var p4Sp = new fabric.Rect({
			  left: 1100,
			  top: 550,
			  fill: 'grey',
			  width: 100,
			  height: 200,
			  angle: 0,
			  opacity: 0.0
			});
			p4Sp.lockMovementX = p4Sp.lockMovementY = true;
			function updateProfile4() {
			if (profileChooser > 0.5) {
			  tempDisplay.text = "105'F/38.8'C";
			  imgHighBox.opacity = 0.7;
			  imgTubBox.opacity= 0.7;
			  onLangFrench.opacity=0.4;
			  onLangEnglish.opacity=0.0;
			  showTimeLeft.text = "07:32"
			  showTimeRight.text ="07:32"
			  turnOnOff.text="SUR";
			  }
			}
			updateProfile4();

			p4Sp.on('selected', function() {
			  profileChooser= 1 - profileChooser;
			  updateProfile4();
			   profilesImg.visible=false;
		profilesTxt.visible=false;
			 canvas.deactivateAll(); // deselect everything - so can click again 
			});
		//Profile 5
			var profile5 = new fabric.Image(pfl1, {
		  left: 850,
		  top: 350,
		  angle: 0,
		  opacity: 0.9
		});
		profile5.scale(0.4);

		var p5txt = new fabric.Text('default', { left: 900, top: 475, fontFamily: 'Arial', fontSize: 40, fontWeight: 'italic', originX: 'center',
		  originY: 'center',});
		p5txt.text ="Guest";
		p5txt.hasControls = p5txt.hasBorders = false;
		p5txt.lockMovementX = p5txt.lockMovementY = false;
		p5txt.selectable = false
		p5txt.evented = false

		var p5Sp = new fabric.Rect({
		  left: 850,
		  top: 350,
		  fill: 'grey',
		  width: 100,
		  height: 200,
		  angle: 0,
		  opacity: 0.0
		});
		p5Sp.lockMovementX = p5Sp.lockMovementY = true;
		function updateProfile5() {
		if (profileChooser > 0.5) {
		  	p5Sp.opacity = 0.0;
		  }
		}
		updateProfile5();
		p5Sp.on('selected', function() {
		  profileChooser= 1 - profileChooser;
		  updateProfile5();
		   profilesImg.visible=false;
			profilesTxt.visible=false;
		 canvas.deactivateAll(); // deselect everything - so can click again 
		});

		var profilesImg = new fabric.Group([profile1, profile2, profile3, profile4, profile5], {originX: 'center', originY: 'center'});
		var profilesTxt = new fabric.Group([p1txt, p2txt, p3txt, p4txt, p5txt], {originX: 'center', originY: 'center'});
		//var profilesShape = new fabric.Group([p1Sp, p2Sp, p3Sp, p4Sp, p5Sp], {originX: 'center', originY: 'center'});

		
		//canvas.clear();

		// as a quick test I could have a 'button' that changes colour when I press it
		//main canvas 
		canvas.add(backWall);
		canvas.add(sideWall);
		canvas.add(frontWall);
		canvas.add(showerHead2);
		canvas.add(showerHead);
		canvas.add(bathSpout);

		//Background Image 1
		canvas.add(imgbackgrdInt);

		//TV
		canvas.add(mediaChooser);
		canvas.add(imgMediaBox);
		
		//Music
		canvas.add(musicChooser);
		canvas.add(imgMusicBox);

		//profiles
		canvas.add(profilesImg);
		canvas.add(profilesTxt);
			//canvas.add(profilesShape);
		canvas.add(p1Sp);
		canvas.add(p2Sp);
		canvas.add(p3Sp);
		canvas.add(p4Sp);
		canvas.add(p5Sp);

	
		//canvas.add(waterControl);
		//canvas.add(tempText);


		//Time and Weather 
		canvas.add(showTimeRight);
		canvas.add(imgInstance);
		canvas.add(showTimeLeft);
		canvas.add(imgTimerInt);


		//Light
		canvas.add(imgBulbInt);
		canvas.add(imgBulbBox);

		//Low or High Shower Pressure 
		canvas.add(pressureChooser);
		canvas.add(imgLowBox);
		canvas.add(imgHighBox);

		//Turn on or off
		canvas.add(turnOn);
		canvas.add(turnOnOff);

		//Tub or Shower
		canvas.add(modeChooser);
		canvas.add(imgShowerBox);
		canvas.add(imgTubBox);
		
		//Temperature Control 
		canvas.add(imgUPInt);
		canvas.add(imgUpBox);
		canvas.add(tempDisplay);
		canvas.add(imgDownInt);

		//Timer
		canvas.add(Timer);
		canvas.add(seperator2);
		canvas.add(seperator);

		//Background Image 2
		canvas.add(onBgd);
		canvas.add(turnBgd);

		//Language Change
		//canvas.add(imgLangIconInt);
		canvas.add(imgLangSelInt);
		canvas.add(onLangEnglish);
		canvas.add(onLangFrench);
		

		
		
		

		// code adapted from http://jsfiddle.net/tornado1979/39up3jcm/
		function zoomAll(SCALE_FACTOR) {

	      var objects = canvas.getObjects();
	      for (var i in objects) {
	          var scaleX = objects[i].scaleX;
	          var scaleY = objects[i].scaleY;
	          var left = objects[i].left;
	          var top = objects[i].top;

	          var tempScaleX = scaleX * SCALE_FACTOR;
	          var tempScaleY = scaleY * SCALE_FACTOR;
	          var tempLeft = left * SCALE_FACTOR;
	          var tempTop = top * SCALE_FACTOR;

	          objects[i].scaleX = tempScaleX;
	          objects[i].scaleY = tempScaleY;
	          objects[i].left = tempLeft;
	          objects[i].top = tempTop;

	          objects[i].setCoords();
	      }
	  
	     
	      canvas.renderAll();
	  		}	


		zoomAll(canvas.height / localHeight);

		})();
