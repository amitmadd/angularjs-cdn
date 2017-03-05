var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./config/gulp/tasks'),
    runSequence = require('run-sequence');
/* Default task */
gulp.task('default', function() {
    runSequence('build-dev', 'start-dev-server');
});