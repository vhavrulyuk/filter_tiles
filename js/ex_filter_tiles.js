(function ($) {
    $(function () {
        $("ul.categories a").on('click', filterTiles.filterTiles);
    });

    var filterTiles;
    filterTiles = {
        selectedGroup: "",

        filterTiles: function () {
            selectedGroup = $(this).attr("href").substr(1);
            $("ul.categories a").css("text-shadow", "");
            $(this).css("text-shadow", "2px 2px 5px blue");
            if (selectedGroup === "cat-all") {
                /*$("ul.tiles li").css("display", "inline-block");*/
                $("ul.tiles li").slideDown(800);
            } else {
                $("ul.tiles li").slideUp(600);
                $("li." + selectedGroup).slideDown(800);
                /* $("ul.tiles li").css("display", "none");
                 $("li." + selectedGroup).css("display", "inline-block");*/
            }
        }
    };
})(jQuery);


