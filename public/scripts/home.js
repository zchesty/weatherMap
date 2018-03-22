var mapObj = {
	map: null,
	initMap: function() {
		this.map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 44, lng: -120},
		zoom: 7
		});
	}
}

$("#divot").click(function() {
	hideTaskBar();
});

function hideTaskBar() {
	var t = $("#taskBar")
	//t.removeClass("taskBarShow");
	t.addClass("taskBarHide")
	$("#map").css("height", "100%");
}