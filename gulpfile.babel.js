import gulp from 'gulp';

//** PLUGINS
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import imageMin from 'gulp-imagemin';

//** VARS
const SRC_DIR = './src';
const PUBLIC_DIR = './public';
const CSS_DIR = SRC_DIR + '/stylesheets';
const JS_DIR = SRC_DIR + '/scripts';

gulp.task('js', () => {
	return gulp.src(JS_DIR + '/**/**/*.js')
		.pipe(concat('common.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(SRC_DIR + '/comp_js'));
});

gulp.task('full-js', ['js'], () => {
	return gulp.src([
			SRC_DIR + '/libs/jquery-3.3.1.min.js',
			JS_DIR + '/common.min.js'
		])
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(SRC_DIR + '/comp_js'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: SRC_DIR
		},
		notify: false
	});
});

gulp.task('sass', () => {
	return gulp.src(CSS_DIR + '/core.sass')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(concat('styles.min.css'))
		.pipe(autoprefixer('last 10 version'))
		.pipe(cleanCSS())
		.pipe(gulp.dest(SRC_DIR + '/comp_css'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('dev', ['sass', 'full-js', 'browser-sync'], () => {
	gulp.watch([CSS_DIR + '/core.sass', CSS_DIR + '/**/**/*.sass', CSS_DIR + '/**/**/**/*.sass'], ['sass']);
	gulp.watch([JS_DIR + '/**/*.js', JS_DIR + '/**/**/*.js'], ['full-js']);
	gulp.watch(SRC_DIR + '/*.html', browserSync.reload);
});

gulp.task('imagemin', () => {
	return gulp.src(SRC_DIR + '/img/**/*')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest(PUBLIC_DIR + '/img')); 
});

gulp.task('default', ['dev']);