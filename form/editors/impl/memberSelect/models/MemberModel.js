/**
 * Developer: Stepan Burguchev
 * Date: 1/29/2015
 * Copyright: 2009-2015 Comindware®
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF Comindware
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

/* global define, require, Backbone, Marionette, $, _ */

define([
        'core/list/listApi',
        'core/utils/utilsApi'
    ],
    function (list, utils) {
        'use strict';

        return Backbone.AssociatedModel.extend({
            initialize: function () {
                utils.helpers.applyBehavior(this, list.models.behaviors.ListItemBehavior);
            }
        });
    });
