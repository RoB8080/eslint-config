import path from 'path'
import gulp from 'gulp'
import replace from 'gulp-replace'

interface ReplaceOptions {
    dist: string, // relative dist path
    suffix: string, // remove see also part, @package = '@rob8080/eslint-config' + suffix
}

const replaceOptions: ReplaceOptions[] = [
    { dist: 'full', suffix: '' },
    { dist: 'base', suffix: 'base' },
    { dist: 'ts', suffix: 'ts' },
    { dist: 'vue', suffix: 'vue' },
]

function replaceMarkdown(sourcePath: string, distPath: string, options: ReplaceOptions) {
    const packageName = '@rob8080/eslint-config' + (options.suffix ? '-' + options.suffix : '')
    return gulp.src(sourcePath)
        .pipe(replace(new RegExp('[*]\\s\\[' + packageName + '\\][^\\s]+[\\s]+'), ''))
        .pipe(replace('@package', packageName))
        .pipe(gulp.dest(path.join(distPath, options.dist)))
}

export default function(cb: () => void){
    const sourcePath = path.join(process.cwd(), 'src/README.md')
    const distPath = path.join(process.cwd(), 'dist')

    let count = 0
    let limit = replaceOptions.length
    replaceOptions.forEach((options) => {
        const t: NodeJS.ReadWriteStream = replaceMarkdown(sourcePath, distPath, options)
        t.on('finish', () => {
            count++
            if (count === limit) { cb() }
        })
    })
}
