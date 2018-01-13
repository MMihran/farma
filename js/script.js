$(document).ready(function(){
    $(".sidebar, .prime-content").matchHeight();

    if($("select").length){
    	$("select").selectize();
    }


    

    function rangeInit($range, min, max, from, to){
	   	if (!$range.length) {return;}
	   	$range.ionRangeSlider({
		    type: "double",
		    min: min,
		    postfix: "",
		    max: max,
		    from: from,
		    to: to,
		    onStart: function (data) {
		    }
		});
    }
	
	rangeInit($("#warning-1"), -15, 20, -10, 0);
	rangeInit($("#warning-2"), -15, 20, -10, 5);





	$("[data-toggle=modal]").click(function () {
		var modal = $(this).attr("data-target");
		$(modal).fadeIn();

		$(modal).find(".cancel").click(function(){
			$(modal).fadeOut();
		});
	});


	$(".settings-table th.checkbox-row input[type=checkbox]").on('change',function(e){
		var table = $(this).closest(".settings-table");
		var checkbox = table.find("td.checkbox-row input[type=checkbox]");
		var checked = table.find("td.checkbox-row input[type=checkbox]:checked");
		console.log(checkbox)
		console.log(checkbox.length)
		console.log(checked)
		console.log(checked.length)
		if(checkbox.length == checked.length){
			checkbox.prop("checked", false);
			$(this).prop("checked", false);
		}else{
			checkbox.prop("checked", true);
			$(this).prop("checked", true);
		}
	});


	// var t = setInterval(function(){

	// 	if ($(".highcharts-container").hasClass("highcharts-container")) {
	// 		clearInterval(t);
	// 		var width = 0;
	// 		var m = 0;
	// 		$(".highcharts-button").each(function(){
	// 			var w = $(this).width();
	// 			width += w;
	// 			$(this).find("text").attr("x", 0);
	// 			if ((width - w) >= 0) {
	// 				$(this).attr("transform", "translate(" + (width-w + 75 + m*10) + ", 0)");
	// 				m++;
	// 			}
	// 		});
	// 		$(".highcharts-button").fadeIn();
	// 	}
	// }, 1000);
	

});