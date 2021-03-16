import jsonEditor from 'gulp-json-editor'
import gulp from 'gulp'
import path from 'path'
import peerDeps from '../src/peer-deps'

export default function() {
    const cwd = process.cwd()
    const source = path.join(cwd, 'package.json')
    const dist = path.join(cwd, 'dist')
    const { base, ts, vue } = peerDeps
    let rawName = ''
    return gulp.src(source)
        .pipe(jsonEditor(function(json: any) { // append base peer deps
            rawName = json.name
            json.name = rawName + '-base'
            json.peerDependencies = Object.assign({}, base)
            return json
        }))
        .pipe(gulp.dest(path.join(dist, 'base')))
        .pipe(jsonEditor(function(json: any) {
            json.name = rawName + '-ts'
            json.peerDependencies = Object.assign({}, ts, base)
            return json
        }))
        .pipe(gulp.dest("./dist/ts"))
        .pipe(jsonEditor(function(json: any) {
            json.name = rawName + '-vue'
            json.peerDependencies = Object.assign({}, vue, base)
            return json
        }))
        .pipe(gulp.dest("./dist/vue"))
        
        .pipe(jsonEditor(function(json: any) {
            json.name = rawName + ''
            json.peerDependencies = Object.assign({}, vue, ts, base)
            return json
        }))
        .pipe(gulp.dest("./dist/full"))
}