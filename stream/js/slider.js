var my_fader = $(".image_fader");

function make_image_fader(element,int_time, fade_time) {
	if (!int_time) {
		int_time = 3000;
	}
	if (!fade_time) {
		fade_time = 1000;
	}
	var items = $(element).find("li");
	var from_index = 0;
	var to_index = 1;
	var max_index = items.length -1;
	items.not(":first").css({ display: "none"});
	setInterval(function() {
//		console.log(from_index + " - " + to_index);
		transiton(items.eq(from_index), items.eq(to_index), fade_time);
		from_index++;
		to_index++;
		if (from_index == max_index) {
		 to_index = 0;
		}
		if (from_index > max_index){
			from_index = 0;
		}

	}, int_time);
}

function transiton(from, to, fade_time){
	if (!fade_time){
		fade_time = 1000;
	}
	$(from).fadeOut(fade_time, function(){
		$(to).fadeIn(fade_time);
	});
}

make_image_fader(my_fader,4000, 1000);
