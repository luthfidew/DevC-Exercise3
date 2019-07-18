$(document).ready(function(){
	jQuery.expr[':'].contains = function(a, i, m) {
		return jQuery(a).text().toUpperCase()
			.indexOf(m[3].toUpperCase()) >= 0;
	};
 
	var all_content = $("#table_paper").parent().html();
	// Detect events
	$("#search").keyup(function(){
		filter(all_content);
	});
	$('#category').change(function(){
		filter(all_content);
	});
});
 
// Search Function
function filter(all_content){
	$("#table_paper").parent().html(all_content);
	var s = $("#search").val();
	var kat = $("#category").val();
	$("#table_paper tbody tr:not(:contains('" + s + "'))").hide();
	$("#table_paper tbody tr:not([class~='" + kat + "']) ").each(function(){
		$(this).hide();
	});
}