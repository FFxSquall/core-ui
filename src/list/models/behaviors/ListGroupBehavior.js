/**
 * Developer: Stepan Burguchev
 * Date: 8/7/2014
 * Copyright: 2009-2016 Comindware®
 *       All Rights Reserved
 * Published under the MIT license
 */

import CollapsibleBehavior from '../../../models/behaviors/CollapsibleBehavior';

const ListGroupBehavior = function(model) {
    Object.assign(this, new CollapsibleBehavior(model));
};

Object.assign(ListGroupBehavior.prototype, {
    deselect() {
    },

    select() {
    }
});

export default ListGroupBehavior;
