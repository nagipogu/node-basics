const fs = require('fs');

fs.writeFile('./data/writingFile.txt', 'testing 1, 2, 3, 4.', function(){
    console.log('the file system written.')
})