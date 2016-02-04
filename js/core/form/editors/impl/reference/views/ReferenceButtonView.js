/**
 * Developer: Stepan Burguchev
 * Date: 12/3/2014
 * Copyright: 2009-2016 Comindware®
 *       All Rights Reserved
 * Published under the MIT license
 */

"use strict";

import '../../../../../libApi';
import template from '../../reference/templates/referenceButton.hbs';

const classes = {
    EMPTY: 'pr-empty'
};

export default Marionette.ItemView.extend({
    initialize: function (options) {
        this.reqres = options.reqres;
    },

    className: 'reference-field pr-arrow-right btn-wrp',

    template: template,

    templateHelpers: function () {
        var value = this.model.get('value');
        return {
            text: (value && (value.get('text') || '#' + value.id)) || ''
        };
    },

    ui: {
        text: '.js-text',
        clearButton: '.js-clear-button'
    },

    events: {
        'click @ui.clearButton': '__clear',
        'click @ui.text': '__navigate',
        'click': '__click'
    },

    __clear: function () {
        this.reqres.request('value:clear');
        return false;
    },

    __navigate: function () {
        if (this.reqres.request('value:navigate', this.model.get('value'))) {
            return false;
        }
    },

    modelEvents: {
        'change:value': 'render',
        'change:enabled': 'updateEnabled'
    },

    __click: function () {
        this.reqres.request('panel:open');
    },


    updateEnabled: function () {
        if (this.model.get('enabled')) {
            this.ui.clearButton.show();
        } else {
            this.ui.clearButton.hide();
        }
    },

    onRender: function () {
        this.updateEnabled();
        if (!this.model.get('value')) {
            this.$el.addClass(classes.EMPTY);
        }
    }
});
