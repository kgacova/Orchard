/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/*
 * jQuery File Upload Validation Plugin 1.1.2
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, window */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            './jquery.fileupload-process'
        ], factory);
    } else {
        // Browser globals:
        factory(
            window.jQuery
        );
    }
}(function ($) {
    'use strict';

    // Append to the default processQueue:
    $.blueimp.fileupload.prototype.options.processQueue.push(
        {
            action: 'validate',
            // Always trigger this action,
            // even if the previous action was rejected: 
            always: true,
            // Options taken from the global options map:
            acceptFileTypes: '@',
            maxFileSize: '@',
            minFileSize: '@',
            maxNumberOfFiles: '@',
            disabled: '@disableValidation'
        }
    );

    // The File Upload Validation plugin extends the fileupload widget
    // with file validation functionality:
    $.widget('blueimp.fileupload', $.blueimp.fileupload, {

        options: {
            /*
            // The regular expression for allowed file types, matches
            // against either file type or file name:
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            // The maximum allowed file size in bytes:
            maxFileSize: 10000000, // 10 MB
            // The minimum allowed file size in bytes:
            minFileSize: undefined, // No minimal file size
            // The limit of files to be uploaded:
            maxNumberOfFiles: 10,
            */

            // Function returning the current number of files,
            // has to be overriden for maxNumberOfFiles validation:
            getNumberOfFiles: $.noop,

            // Error and info messages:
            messages: {
                maxNumberOfFiles: 'Maximum number of files exceeded',
                acceptFileTypes: 'File type not allowed',
                maxFileSize: 'File is too large',
                minFileSize: 'File is too small'
            }
        },

        processActions: {

            validate: function (data, options) {
                if (options.disabled) {
                    return data;
                }
                var dfd = $.Deferred(),
                    settings = this.options,
                    file = data.files[data.index],
                    fileSize;
                if (options.minFileSize || options.maxFileSize) {
                    fileSize = file.size;
                }
                if ($.type(options.maxNumberOfFiles) === 'number' &&
                        (settings.getNumberOfFiles() || 0) + data.files.length >
                            options.maxNumberOfFiles) {
                    file.error = settings.i18n('maxNumberOfFiles');
                } else if (options.acceptFileTypes &&
                        !(options.acceptFileTypes.test(file.type) ||
                        options.acceptFileTypes.test(file.name))) {
                    file.error = settings.i18n('acceptFileTypes');
                } else if (fileSize > options.maxFileSize) {
                    file.error = settings.i18n('maxFileSize');
                } else if ($.type(fileSize) === 'number' &&
                        fileSize < options.minFileSize) {
                    file.error = settings.i18n('minFileSize');
                } else {
                    delete file.error;
                }
                if (file.error || data.files.error) {
                    data.files.error = true;
                    dfd.rejectWith(this, [data]);
                } else {
                    dfd.resolveWith(this, [data]);
                }
                return dfd.promise();
            }

        }

    });

}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5maWxldXBsb2FkLXZhbGlkYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcXVlcnkuZmlsZXVwbG9hZC12YWxpZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIGpRdWVyeSBGaWxlIFVwbG9hZCBWYWxpZGF0aW9uIFBsdWdpbiAxLjEuMlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9qUXVlcnktRmlsZS1VcGxvYWRcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTMsIFNlYmFzdGlhbiBUc2NoYW5cclxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XHJcbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiAqL1xyXG5cclxuLyogZ2xvYmFsIGRlZmluZSwgd2luZG93ICovXHJcblxyXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICAvLyBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgQU1EIG1vZHVsZTpcclxuICAgICAgICBkZWZpbmUoW1xyXG4gICAgICAgICAgICAnanF1ZXJ5JyxcclxuICAgICAgICAgICAgJy4vanF1ZXJ5LmZpbGV1cGxvYWQtcHJvY2VzcydcclxuICAgICAgICBdLCBmYWN0b3J5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzOlxyXG4gICAgICAgIGZhY3RvcnkoXHJcbiAgICAgICAgICAgIHdpbmRvdy5qUXVlcnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgLy8gQXBwZW5kIHRvIHRoZSBkZWZhdWx0IHByb2Nlc3NRdWV1ZTpcclxuICAgICQuYmx1ZWltcC5maWxldXBsb2FkLnByb3RvdHlwZS5vcHRpb25zLnByb2Nlc3NRdWV1ZS5wdXNoKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAndmFsaWRhdGUnLFxyXG4gICAgICAgICAgICAvLyBBbHdheXMgdHJpZ2dlciB0aGlzIGFjdGlvbixcclxuICAgICAgICAgICAgLy8gZXZlbiBpZiB0aGUgcHJldmlvdXMgYWN0aW9uIHdhcyByZWplY3RlZDogXHJcbiAgICAgICAgICAgIGFsd2F5czogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gT3B0aW9ucyB0YWtlbiBmcm9tIHRoZSBnbG9iYWwgb3B0aW9ucyBtYXA6XHJcbiAgICAgICAgICAgIGFjY2VwdEZpbGVUeXBlczogJ0AnLFxyXG4gICAgICAgICAgICBtYXhGaWxlU2l6ZTogJ0AnLFxyXG4gICAgICAgICAgICBtaW5GaWxlU2l6ZTogJ0AnLFxyXG4gICAgICAgICAgICBtYXhOdW1iZXJPZkZpbGVzOiAnQCcsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiAnQGRpc2FibGVWYWxpZGF0aW9uJ1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gVGhlIEZpbGUgVXBsb2FkIFZhbGlkYXRpb24gcGx1Z2luIGV4dGVuZHMgdGhlIGZpbGV1cGxvYWQgd2lkZ2V0XHJcbiAgICAvLyB3aXRoIGZpbGUgdmFsaWRhdGlvbiBmdW5jdGlvbmFsaXR5OlxyXG4gICAgJC53aWRnZXQoJ2JsdWVpbXAuZmlsZXVwbG9hZCcsICQuYmx1ZWltcC5maWxldXBsb2FkLCB7XHJcblxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgLy8gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgYWxsb3dlZCBmaWxlIHR5cGVzLCBtYXRjaGVzXHJcbiAgICAgICAgICAgIC8vIGFnYWluc3QgZWl0aGVyIGZpbGUgdHlwZSBvciBmaWxlIG5hbWU6XHJcbiAgICAgICAgICAgIGFjY2VwdEZpbGVUeXBlczogLyhcXC58XFwvKShnaWZ8anBlP2d8cG5nKSQvaSxcclxuICAgICAgICAgICAgLy8gVGhlIG1heGltdW0gYWxsb3dlZCBmaWxlIHNpemUgaW4gYnl0ZXM6XHJcbiAgICAgICAgICAgIG1heEZpbGVTaXplOiAxMDAwMDAwMCwgLy8gMTAgTUJcclxuICAgICAgICAgICAgLy8gVGhlIG1pbmltdW0gYWxsb3dlZCBmaWxlIHNpemUgaW4gYnl0ZXM6XHJcbiAgICAgICAgICAgIG1pbkZpbGVTaXplOiB1bmRlZmluZWQsIC8vIE5vIG1pbmltYWwgZmlsZSBzaXplXHJcbiAgICAgICAgICAgIC8vIFRoZSBsaW1pdCBvZiBmaWxlcyB0byBiZSB1cGxvYWRlZDpcclxuICAgICAgICAgICAgbWF4TnVtYmVyT2ZGaWxlczogMTAsXHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvLyBGdW5jdGlvbiByZXR1cm5pbmcgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIGZpbGVzLFxyXG4gICAgICAgICAgICAvLyBoYXMgdG8gYmUgb3ZlcnJpZGVuIGZvciBtYXhOdW1iZXJPZkZpbGVzIHZhbGlkYXRpb246XHJcbiAgICAgICAgICAgIGdldE51bWJlck9mRmlsZXM6ICQubm9vcCxcclxuXHJcbiAgICAgICAgICAgIC8vIEVycm9yIGFuZCBpbmZvIG1lc3NhZ2VzOlxyXG4gICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgbWF4TnVtYmVyT2ZGaWxlczogJ01heGltdW0gbnVtYmVyIG9mIGZpbGVzIGV4Y2VlZGVkJyxcclxuICAgICAgICAgICAgICAgIGFjY2VwdEZpbGVUeXBlczogJ0ZpbGUgdHlwZSBub3QgYWxsb3dlZCcsXHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlU2l6ZTogJ0ZpbGUgaXMgdG9vIGxhcmdlJyxcclxuICAgICAgICAgICAgICAgIG1pbkZpbGVTaXplOiAnRmlsZSBpcyB0b28gc21hbGwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwcm9jZXNzQWN0aW9uczoge1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChkYXRhLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGRmZCA9ICQuRGVmZXJyZWQoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyA9IHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlID0gZGF0YS5maWxlc1tkYXRhLmluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1pbkZpbGVTaXplIHx8IG9wdGlvbnMubWF4RmlsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgkLnR5cGUob3B0aW9ucy5tYXhOdW1iZXJPZkZpbGVzKSA9PT0gJ251bWJlcicgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNldHRpbmdzLmdldE51bWJlck9mRmlsZXMoKSB8fCAwKSArIGRhdGEuZmlsZXMubGVuZ3RoID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubWF4TnVtYmVyT2ZGaWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGUuZXJyb3IgPSBzZXR0aW5ncy5pMThuKCdtYXhOdW1iZXJPZkZpbGVzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYWNjZXB0RmlsZVR5cGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICEob3B0aW9ucy5hY2NlcHRGaWxlVHlwZXMudGVzdChmaWxlLnR5cGUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYWNjZXB0RmlsZVR5cGVzLnRlc3QoZmlsZS5uYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlLmVycm9yID0gc2V0dGluZ3MuaTE4bignYWNjZXB0RmlsZVR5cGVzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVTaXplID4gb3B0aW9ucy5tYXhGaWxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGUuZXJyb3IgPSBzZXR0aW5ncy5pMThuKCdtYXhGaWxlU2l6ZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkLnR5cGUoZmlsZVNpemUpID09PSAnbnVtYmVyJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlU2l6ZSA8IG9wdGlvbnMubWluRmlsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlLmVycm9yID0gc2V0dGluZ3MuaTE4bignbWluRmlsZVNpemUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZpbGUuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5lcnJvciB8fCBkYXRhLmZpbGVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maWxlcy5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGZkLnJlamVjdFdpdGgodGhpcywgW2RhdGFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGZkLnJlc29sdmVXaXRoKHRoaXMsIFtkYXRhXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGZkLnByb21pc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
