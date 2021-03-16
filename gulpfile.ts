import gulp from 'gulp'

import clean from './gulp/clean'
import buildConfig from './gulp/build-config'
import buildPkgJson from './gulp/build-pkg-json'
import markdownReplace from './gulp/markdown-replace'

gulp.task('clean', clean)
gulp.task('build-pkg-json', buildPkgJson)
gulp.task('build-config', buildConfig)
gulp.task('markdown-replace', markdownReplace)

gulp.task('build', gulp.series('clean', 'build-pkg-json', 'build-config', 'markdown-replace'))