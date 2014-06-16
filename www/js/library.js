loadLibrary = function(event){
  $( "#library" ).append("Loading library...")
  console.log('Attempting to load file')
  var b = new FileManager()
  b.read_file(
    'menashelf',
    'asdf.xml',
    function(result){
      $("#library").append(result); 
      console.log('loaded file successfully')},
      console.log('something went wrong')
  );
}
