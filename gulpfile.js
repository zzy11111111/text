let {src,dest,watch} = require('gulp')
let htmlmin = require('gulp-htmlmin')
let cssnano = require('gulp-cssnano')
let uglify = require('gulp-uglify')
let sass = require('gulp-sass')(require('sass'))
let concat = require('gulp-concat')
let rename = require('gulp-rename')
let babel = require('gulp-babel')
let imagemin = require('gulp-imagemin')

function fnDate(){
    return src('./src/data/**/*')
    .pipe(dest('./dist/data'))
}
function fnIndex (){
    return src('./src/index.html')
    .pipe(dest('./dist'))
}
function fnHtml(){
    return src('./src/html/**/*.html')
    .pipe(htmlmin())
    .pipe(dest('./dist/html'))
}
function fnImg(){
    return src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'))
}
function fnJs(){
    return src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix : '.min'}))
    .pipe(dest('./dist/js'))
}
function fnCss(){
    return src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename( { suffix : '.min'}))
    .pipe(dest('./dist/css'))
}
function fnWatch(){
    watch('./src/data/**/*' , fnDate);
    watch('./src/html/**/*.html' , fnHtml)
    watch('./src/img/**/*' , fnImg)
    watch('./src/js/**/*.js' , fnJs)
    watch('./src/sass/**/*.scss' , fnCss)
    watch('./src/index.html' , fnIndex)
}
exports.data = fnDate
exports.index1 = fnIndex
exports.css = fnCss
exports.img = fnImg
exports.js = fnJs
exports.html = fnHtml
exports.default = fnWatch

