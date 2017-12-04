/**
 * Developer: Stepan Burguchev
 * Date: 1/26/2015
 * Copyright: 2009-2016 Comindware®
 *       All Rights Reserved
 * Published under the MIT license
 */

/*eslint-disable*/

import 'lib';
import LocalizationService from '../../services/LocalizationService';
import formRepository from '../formRepository';

formRepository.validators.required = function(config) {
    let options = _.extend({
        type: 'required',
        message: LocalizationService.get('CORE.FORM.VALIDATION.REQUIRED')
    }, config);

    return function required(value) {
        const val = _.isObject(value) && _.has(value, 'value') ? value.value : value;
        options.value = val;

        const err = {
            type: options.type,
            message: _.isFunction(options.message) ? options.message(options) : options.message
        };
        if (val === null || val === undefined || val === '') {
            return err;
        }
        if (Array.isArray(val) && val.length === 0) {
            return err;
        }
    };
};

export default formRepository.validators.required;
