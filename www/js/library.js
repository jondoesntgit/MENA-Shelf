loadLibrary = function(event){
  $( "#library" ).append("Loading library...")
  //console.log('Attempting download');
  //downloadData('en/asdf.xml');
  console.log('Attempting to load file')
  var b = new FileManager()
  b.download_file('http://menashelf.menaulit.org','menashelf','asdf.xml',console.log('finished downloading'));
  b.read_file('menashelf','asdf.xml',function(result){$("#library").append(result); console.log('loaded file successfully')},console.log('something went wrong'));
}
