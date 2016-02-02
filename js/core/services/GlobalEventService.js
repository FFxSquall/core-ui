/**
 * Developer: Stepan Burguchev
 * Date: 7/17/2015
 * Copyright: 2009-2016 Comindware®
 *       All Rights Reserved
 * Published under the MIT license
 */

"use strict";

import '../libApi';

var $window = $(window);

var GlobalEventsService = Marionette.Object.extend({
    initialize: function () {
        _.bindAll(this, '__onResize');

        $window.resize(this.__onResize);
    },

    onDestroy: function () {
        $window.off('resize');
    },

    __onResize: function (e) {
        this.trigger('resize', e);
    }
});

export default new GlobalEventsService();
