
/*
            //
            //CREATE A DIRECTORY RECURSIVELY
            var a = new DirManager(); // Initialize a Folder manager
            a.create_r('folder_a/folder_b',Log('created successfully'));

            //LIST A DIRECTORY 
            a.list('cosa', Log('List'));

            //REMOVE A DIRECTORY RECURSIVELY
            a.remove('folder_a/folder_b',Log('complete delte'), Log('delete fail'));

            //
            //FILES MANAGEMENT:
            //
            var b = new FileManager();
            // create an empty  FILE (simialr unix touch command), directory will be created RECURSIVELY if it doesnt exist
            b.load_file('dira/dirb/dirc','demofile.txt',Log('file created'),Log('something went wrong'));

            // WRITE TO A FILE
            b.write_file('dira/dirb/dirc/dird','demofile_2.txt','this is demo content',Log('wrote sucessful!'));

            // READ A FILE
            b.read_file('dira/dirb/dirc/dird','demofile_2.txt',Log('file contents: '),Log('something went wrong'));

            // download a file from a remote location and store it localy
            b.download_file('http://www.greylock.com/teams/42-Josh-Elman','filder_a/dwonloads_folder/','target_name.html',Log('downloaded sucess'));
*/

function downloadData(string){
  console.log('Downloading data');
  var b= new FileManager();
  //touch the file
  b.load_file('menashelf/','asdf.xml',Log('file created'),Log('something went wrong'));
  b.download_file('http://menashelf.menaulit.org/res/'+string,'menashelf/','asdf.xml',Log('error downloading ' + string));
}

function readFile() {
  var b = new FileManager()
  b.read_file('sharing-solutions/','asdf.xml',function(result){alert('file contents: ' + result)},alert('something went wrong'));
}

function loadFile() {
  console.log('loadFile is being executed');
  var b = new FileManager()
  b.read_file('menashelf/','asdf.xml',function(result){document.getElementById("content-container").innerHTML=result},console.log('something went wrong'));
}
