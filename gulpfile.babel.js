'use strict'

import gulp from 'gulp'
import server from 'gulp-server-livereload'
import sass from 'gulp-sass'

const config = {
    port: 4200 || process.env.PORT
}

gulp.task('sass', () => {
    return gulp.src('./scss/**/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
})

gulp.task('sass:watch', () => {
    gulp.watch('./scss/**/style.scss', ['sass'])
})

gulp.task('live-reload', () => {
    gulp.src('').pipe(server({
        defaultFile: 'index.html',
        livereload: false,
        directoryListing: false,
        open: true    
    }))
})

gulp.task(
    'default',
    ['sass:watch', 'live-reload']
)