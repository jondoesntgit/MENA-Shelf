// Library = all languages
// Cataloge = stuff for one specific language
// Book = a specific instance


var lang = "en";
var library;
var url="http://menashelf.menaulit.org/";

function getDefaultLang() { return lang;
}

/**
 * Takes a JSON argument and displays download links for the selected language
 */

function loadContent(language) {
  console.log("Loading language");
  // Grab the catalogue object based on language
  var catalog;
  switch (language)
  {
    // Arabic
    case "ar":
    catalog = library.ar
    break;
 
    // English (Default)
    default:
    case "en":
    catalog = library.en
    break;
 
    // Farsi
    case "fa":
    catalog = library.fa
    break;
 
    // French
    case "fr":
    catalog = library.fr
    break;
 
    // Turkish
    case "tr":
    catalog = library.tu
  }
 
  // Generate code to display in main container
  var storeHTML = "";
  
  if (typeof(catalog) == "undefined") // If there is no such language in the JSON object
  {
    storeHTML = "That language is not supported yet."
  }
  else if (catalog.length >=1) //If there is at least one book
  {
  storeHTML += '<ul data-role="listview" data-inset="true">'
    for(var i = 0; i < catalog.length; i++) 
    {
        var book = catalog[i];
        storeHTML += "<li><a href='" + url + book.url + "'>" +  book.title + "</a>";
    }
  storeHTML += "</ul>"
  } 
  else if (catalog.length == 0) { //If there is no books in this language
    storeHTML = "Sorry, there are no books available in this language."
  }
  else {
    storeHTML = "An error occured. Please contact the developer." 
  }
  $( "#store-results-list" ).html(storeHTML);
};


$( document ).ready(function()
{
   console.log('Attempting to load file')
   var b = new FileManager()
   b.download_file('http://menashelf.menaulit.org','menashelf','asdf.xml',console.log('finished downloading'));
   $.getJSON(url + "store/index.php",function(result)
   {
     library = result;
   });

});

function loadStore() {
  $( "#store-results-list" ).append("It works");
}

function updateLanguage() 
{
  lang=$( "#language-selector").val()
  loadContent(lang)
}
