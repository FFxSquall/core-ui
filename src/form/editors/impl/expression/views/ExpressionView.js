/**
 * Developer: Ksenia Kartvelishvili
 * Date: 22.01.2015
 * Copyright: 2009-2015 Comindware®
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF Comindware
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

import template from '../templates/expression.html';

export default Marionette.ItemView.extend({
    template: Handlebars.compile(template),

    ui: {
        expressionInput: '.js-expression-input'
    },

    className: 'pp-setting__textarea',

    getValue() {
        return this.ui.expressionInput.val();
    },

    setValue(value) {
        this.value = value;
    },

    onShow() {
        this.ui.expressionInput.val(this.value);
    }
});
