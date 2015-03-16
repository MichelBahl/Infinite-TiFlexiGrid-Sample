//INITIALIZE TIFLEXIGRID
$.fg.init({
	columns:3,
	space:5,
	gridBackgroundColor:'#fff',
	itemHeightDelta: -29,
	itemBackgroundColor:'#eee',
	itemBorderColor:'transparent',
	itemBorderWidth:0,
	itemBorderRadius:0,
	onItemClick: showGridItemInfo
});


//Init loading when scrolling reaches en of tableview
$.infiniteScroll.init($.buttonGridScrollView);

//Datasource:
//You can even use your model
var imageArray = ["IMG_0001.jpg","IMG_0002.jpg","IMG_0003.jpg","IMG_0004.jpg","IMG_0005.jpg","IMG_0006.jpg","IMG_0007.jpg","IMG_0008.jpg","IMG_0009.jpg","IMG_0010.jpg"];


//Append images to tableview
function appenImages(){
	var imageData 	= [];
	var items	 	= [];


	for(var i = 0; i <= 20;i++){
		
		
		imageData.push({	
			image: 			"images/" + imageArray[i % 8],
		});
	}
	
	for (var x=0;x<imageData.length;x++){
	
		//CREATES A VIEW WITH OUR CUSTOM LAYOUT
		var view = Alloy.createController('image_placeholder',{
			image:imageData[x].image,
			width:$.fg.getItemWidth() + "dp",
			height:$.fg.getItemHeight() + "dp"
		}).getView();
		
		
		//THIS IS THE DATA THAT WE WANT AVAILABLE FOR THIS ITEM WHEN onItemClick OCCURS
		var values = {
			image:	imageData[x].image,
			index: x
		};
		
		items.push({
			view: view,
			data: values
		});
	};

	$.fg.addGridItems(items);
}


//Event handler


/******************************
 * 	HERE YOU CAN UPDATE THE DATASOURCE
 *  UPDATE imageArray AND THEN CALL dynamicLoader
 * 
 ******************************/
function dynamicLoader(e){
	
	appenImages();

	e.success();
}


function showGridItemInfo(e) {
	
	alert("Index: " +e.index);
}

function doOpenWindow(e){

	appenImages();
}

//
$.index.open();