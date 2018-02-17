$(document).ready(function(){
    $(".sidebar, .prime-content").matchHeight();

    if($("select").length){
    	var initHandler = function(name) {
    		$(".selectize-input input").prop('disabled', true);
    	};
    	$("select").selectize({
    		maxItems: 1,
    		onDropdownOpen: function(a){
    			if ($(a).parents(".dropdown-position-anchor").length) {
	    			var bottomOfContainer = $(a).closest(".dropdown-position-anchor").offset().top + $(a).closest(".dropdown-position-anchor").height();
	    			var bottomOfdropdown = $(a).offset().top + $(a).height();
	    			if (bottomOfdropdown > bottomOfContainer) {
	    				$(a).addClass("dropdown-up");
	    			}
	    		}
    		},
    		onInitialize: initHandler("onInitialize")
    	});
		// selectize.on('initialize', initHandler);
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



	//---------------SCROLL-BOXES!!------------------
	$(".side-list").customScrollbar({
		onCustomScroll: function(){
			$(".side-list .vertical .thumb").addClass("visible");
		},
		fixedThumbHeight: 150,
		animationSpeed: 1000
	});
	if($(".sensors-table-wrap").hasClass("sensors-table-wrap")){
		$(".sensors-table-wrap").customScrollbar({
			fixedThumbHeight: 150,
			animationSpeed: 1000
		});
	}

	//----------------VALIDATE!!---------------
	try{
		$(".prime-form label input").not(".selectize-input input").attr("minlength", 3);
		$(".prime-form").validate();
		$(".prime-form label input").not(".selectize-input input").keyup(function () {
		    if ($(this).valid() == false ) {
		        $(this).addClass("input-not-valid");
		    }else{
		    	$(this).removeClass("input-not-valid");
		    }
		});
	}catch(e){}





	// FIX SCROLLABLE TABLE HEAD
	var tableHead = $(".sensors-table-wrap .head").clone();
	tableHead.find("th").each(function(index){
		// console.log(index);
		// console.log($(".sensors-table-wrap .head th"));
		$(this).width($(".sensors-table-wrap .head").children().eq(index).width());
	});
	var tableClone = $("<table class='fixed-head'></table>");
	tableClone.append(tableHead);
	$(".sensors-table-wrap.scrollable .viewport").append(tableClone);
	

	$('.fixed-head .checkbox-row input[type=checkbox]').change(function () {
	   	$(".settings-table th.checkbox-row input[type=checkbox]").trigger("change");
	   	$(this).prop("checked", $(".settings-table th.checkbox-row input[type=checkbox]").prop("checked"));
	});
});

