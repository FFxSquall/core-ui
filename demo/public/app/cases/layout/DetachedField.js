/**
 * Developer: Stepan Burguchev
 * Date: 2/27/2017
 * Copyright: 2009-2017 Stepan Burguchev®
 *       All Rights Reserved
 * Published under the MIT license
 */

define(
    [
        'comindware/core',
        'demoPage/views/CanvasView'
    ],
    function(core, CanvasView) {
        'use strict';

        return function() {
            return new CanvasView({
                view: new core.layout.VerticalLayout({
                    rows: [
                        new core.form.Field({
                            schema: {
                                title: 'Title',
                                type: 'Text'
                            },
                            value: 'foo'
                        }),
                        new core.layout.HorizontalLayout({
                            columns: [
                                new core.form.Field({
                                    schema: {
                                        title: 'Ideal Days',
                                        type: 'Number'
                                    },
                                    value: 12
                                }),
                                new core.form.Field({
                                    schema: {
                                        title: 'Due Date',
                                        type: 'DateTime'
                                    },
                                    value: '2015-07-20T10:46:37Z'
                                })
                            ]
                        }),
                        new core.form.Field({
                            schema: {
                                title: 'Description',
                                type: 'TextArea'
                            },
                            value: 'bar\nbaz'
                        }),
                        new core.form.editors.BooleanEditor({
                            value: true,
                            displayText: 'Blocked by another task'
                        })
                    ]
                }),
                canvas: {
                    height: '500px'
                }
            });
        };
    }
);
