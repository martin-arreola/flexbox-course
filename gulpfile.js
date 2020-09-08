
var gulp = require ( ' tragar ' );
var browserSync = require ( ' browser-sync ' ) .create ();
var reload = browserSync.reload; 

gulp.task ( ' servir ' , function () { 
  browserSync.init ({ servidor : {
       baseDir : " ./ " 
    } 
  }); 
  gulp.watch ( " * .html " ) .on ( " cambiar " , recargar); 
});
    