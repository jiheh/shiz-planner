var map = initializeMap();

$(".pull-right").click(function() {
	// Add to itinerary
	var type = $(this).parent().find("select").data("type");
	var name = ($(this).parent().find("select option:selected").val());

	// if (type === 'hotel') {
		console.log($('ul:contains("hotel-group")').find('div'));
	// } else if (type === 'restaurant') {

	// } else if (type === 'activity') {

	// }


	// Add to map
	var location = $(this).parent().find("select option:selected").data("location").split(",");

	map.setCenter({
		lat: +location[0],
		lng: +location[1]
	});
	map.setZoom(16);
	drawMarker(map, type, location);
});


// Select and set the hotel
// Select and add a restaurant
// Select and add an activity
// Remove the hotel
// Remove a restaurant
// Remove an activity
// Add a day
// Remove a day
// Switch days
