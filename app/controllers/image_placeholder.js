var args = arguments[0]||{};

var the_image = args.image || '';
var item_width = args.width || '95%';
var item_height = args.height || '95%';

if (OS_IOS){ 
	$.thumb.image = the_image;//.toImage().imageAsThumbnail(5 * 2,0,0);
}else{
	
	$.thumb.image = the_image;
	$.thumb.width = item_width;
	$.thumb.height = item_height;
}

