var testFolder = './data'; // 해당 폴더의 파일들의 이름을 배열로 가져온다
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
});
