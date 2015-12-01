/**
 * Developer: Stepan Burguchev
 * Date: 3/20/2015
 * Copyright: 2009-2015 Comindware®
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF Comindware
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

/* global define, require, Handlebars, Backbone, Marionette, $, _ */

define(['./BaseReferenceEditorController',
        'module/lib',
        'core/services/RoutingService',
        'core/services/ModuleService'
    ],
    function (BaseReferenceEditorController, lib, RoutingService, ModuleService) {
        'use strict';

        return BaseReferenceEditorController.extend({
            navigate: function (model) {
                Ajax.ObjectRecords.ResolveObjectRecordType(model.get('id')).bind(this).then(function (data) {
                    var recordTypeId = this.toInt(data.recordTypeId),
                        url = ModuleService.getModuleUrlByName('record', ModuleService.modules.PROCESS_RECORDTYPES_RECORDS, {
                            recordTypeId: recordTypeId,
                            recordId: model.get('id')
                        });

                    RoutingService.navigateToUrl(url);
                });
            },

            toInt: function (stringId) {
                return stringId.replace(/[^0-9]/gi, "");
            }
        });
    });
