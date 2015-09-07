// Various jquery workings
$(document).ready(function(){
	// deal with header search bar label
	$("#edit-search-theme-form-1-wrapper label").addClass("visible");
	$("#edit-search-theme-form-1").each(function (type) {
		$(this).focus(function () {
			$(this).prev("#edit-search-theme-form-1-wrapper label").addClass("focus");
		});
		$(this).keypress(function () {
			$(this).prev("#edit-search-theme-form-1-wrapper label").addClass("has-text").removeClass("focus");
		});
		$(this).blur(function () {
			if($(this).val() == "") {
				$(this).prev("#edit-search-theme-form-1-wrapper label").removeClass("has-text").removeClass("focus");
			}
		});
	});
	/* clients page menu */
	$("#block-nice_menus-1 ul.nice-menu").jcarousel({
      vertical: true,
      scroll: 10
  });
  $("#block-nice_menus-1, .nav-pn").hover(
    function () {
      $(".section-clients #block-nice_menus-1").addClass("element-visible");
    },
    function () {
      $(".section-clients #block-nice_menus-1").removeClass("element-visible");
    });
});