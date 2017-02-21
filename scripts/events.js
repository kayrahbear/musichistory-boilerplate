"use strict";

function deleteButtonListener(){
	$(".deleteButton").click(function(){
		$(this).closest('article').remove();
		console.log("you clicked the deleteButton");
	});
}

module.exports = deleteButtonListener;
