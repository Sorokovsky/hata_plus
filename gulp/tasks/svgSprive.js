import svgSprite from 'gulp-svg-sprite';
export const svgSprive = () => {
    return app.gulp.src(`${app.gulp.src.svgicons}`, {})
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    example: true
                }
            }
        }))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}