/**
 * Developer: Stepan Burguchev
 * Date: 2/27/2017
 * Copyright: 2009-2017 Stepan Burguchev®
 *       All Rights Reserved
 * Published under the MIT license
 */

import FormFieldAnchor from './form/FormFieldAnchor';
import FormEditorAnchor from './form/FormEditorAnchor';

export function createEditorAnchor (key) {
    return new FormEditorAnchor({
        key
    });
}

export function createFieldAnchor (key) {
    return new FormFieldAnchor({
        key
    });
}
