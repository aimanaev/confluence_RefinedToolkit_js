/*
  Сворачивает все открытые узлы не относящиеся к текущему как предок
*/
AJS.toInit (
	function(){
		$('.rwui_expandable_item').on('click',
			function(){
				if(typeof $expandableItem == 'undefined' || $expandableItem.length == 0){
					$(this).removeClass("rw_open");
				}
				else{
					curExpanded = $.merge($expandableItem,$expandableItem.parents("div.rwui_expandable_item"));
					$('div.rwui_expandable_item.rw_open').each(function(){
						if($.inArray(this, curExpanded)==-1){
							$(this).removeClass("rw_open");
						}
					});
				}
			}
		);
	}
);