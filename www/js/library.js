loadLibrary = function(event){
  $( "#library" ).append("Loading library...")
  console.log('Attempting download');
  downloadData('en/asdf.xml');
  console.log('Attempting to load file')
  loadFile();
}
