(function ($) {
    var FilterTiles = {
        onReady: function () {
            $("ul.categories a").on('click', FilterTiles.filterTiles);
        },

        filterTiles: function () {
            selectedGroup = $(this).attr("href").substr(1);
            $("ul.categories a.hilite").toggleClass("hilite");
            $(this).toggleClass("hilite");
            if (selectedGroup === "cat-all") {
                $("ul.tiles li").slideDown(1000);
            } else {
                $("ul.tiles li").slideUp(1000);
                $("li." + selectedGroup).slideDown(1000);
            }
        }
    };

    $(FilterTiles.onReady);
})(jQuery);


