(function ($) {
    $(function () {
        $("ul.categories a").on('click', filterTiles.filterTiles);
    });

    var filterTiles;
    filterTiles = {

        filterTiles: function () {
            selectedGroup = $(this).attr("href").substr(1);
            if (selectedGroup === "cat-all") {
                $("ul.tiles li").css("display", "inline-block");
            } else {

                $("ul.tiles li").css("display", "none");
                $("li." + selectedGroup).css("display", "inline-block");
            }
            console.log('filtering...' + selectedGroup);
        }

    };
})(jQuery);


