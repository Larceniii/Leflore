
// $(function() {
  //  $('body').hide().fadeIn(1500);
// });

  function progress(timeleft, timetotal) {
      var current_percent = timeleft / timetotal * 100;
  	$('#ascii-progress-bar-1').html("");
      for (n = 0; n < 83; n++) {
      if (current_percent < (n+1)*1.2) {
      	$('#ascii-progress-bar-1').append("░"); // alt-176
      }
      else {
      	$('#ascii-progress-bar-1').append("▓"); // alt-178
      }
  	}

    if(timeleft > 0) {
          setTimeout(function() {
  					progress(timeleft - 1, timetotal);
          }, 1000);
      }
    if(timeleft < 2) {
      //  $("body").fadeOut(1500)
      }
  };

 // progress(180, 180);

function update() {
/*    $.ajax({
        url: 'viewers.php',
        dataType: 'text',
        success: function(data) {
            if (parseInt(data) == 0) {
                $("#viewers").css({ display: "none" });
            } else {
                $("#viewers").text(parseInt(data) + ' VIEWERS' );
            }
        }
    }) */
}

// update();

window.setInterval(function(){
	var statusIntervalId = window.setInterval(update(), 65000);
}, 65000);

// CLOCK

			function showTime(){
        //DAY AND DATE
        var m_names = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var d_names = ["SUN","MON", "TUE", "WED", "THU", "FRI", "SAT"];
        var myDate = new Date();
        myDate.setDate(myDate.getDate());
        var curr_date = myDate.getDate();
        var curr_month = myDate.getMonth();
        var curr_day  = myDate.getDay();
        //TIME
				var date = new Date();
				var h = date.getHours() ; // 0 - 23   (minus 6 for CST time)
				var m = date.getMinutes(); // 0 - 59
				var s = date.getSeconds(); // 0 - 59
				var session = "AM";

				if(h >= 12){
					h = h - 12;
					session = "PM";
				}

				if(h == 0){h = 12;}


				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

	document.getElementById("MyClockDisplay").innerHTML = d_names[curr_day] + ' ' + m_names[curr_month] + ' ' +  curr_date + ', 20' + new Date().getFullYear().toString().substr(-2) + '&nbsp&nbsp   &nbsp&nbsp ' + +h + '<span class="blink_me">:</span>' + m + ' ' + session;
				setTimeout(showTime, 1000);
			}

			showTime();
