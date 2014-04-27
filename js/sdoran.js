/**
 * Created by Sar on 28/03/14.
 */
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, document, jQuery, $, alert */

var tiles = {
    common: {
        init: function () {
            "use strict";
            // application-wide code
        }
    },
    tooltips: {
        detailTile: $('#detail_tile_1'),
        init: function () {

            // controller-wide code
        },
        showDetail: function (parent) {
            var $parentText = $(parent).find('span').html(),
                $detailTile = tiles.tooltips.detailTile;
            $detailTile.html($parentText);
            $detailTile.toggleClass('on', true);
        },
        show: function () {
            $(document).ready(function () {
                $('div.tile').on('mouseover', function () {
                    tiles.tooltips.showDetail(this);
                });
                $('div.tile').on('mouseout', function () {
                    tiles.tooltips.detailTile.toggleClass('on', false);
                });
            });
        }
    }
};

var UTIL = {
    exec: function (controller, action) {
        var ns = tiles,
            action = ( action === undefined ) ? "init" : action;

        if (controller !== "" && ns[controller] && typeof ns[controller][action] == "function") {
            ns[controller][action]();
        }
    },

    init: function () {
        var body = document.body,
            controller = body.getAttribute("data-controller"),
            action = body.getAttribute("data-action");

        UTIL.exec("common");
        UTIL.exec(controller);
        UTIL.exec(controller, action);
    }
};

$(document).ready(UTIL.init);