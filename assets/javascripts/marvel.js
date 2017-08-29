
  (function(){

    $(function(){
      var character_id;
      let getStringPageLoad;
      let getString;
      let getLocation;

      //variables at load
      let loadCharactersName;
      let loadCharactersPath
      let loadCharactersExtension

      //variables at search
      let searchCharactersName;
      let searchCharactersPath
      let searchCharactersExtension

      getStringPageLoad = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8e8d27528df8e1068e2773e3a7161575&hash=412852e32d04be7d8218808df40d53f1";

      function initialLoadCharacters(){
        $("#charactersTable").html("");
        $.get(getStringPageLoad, function(data){

           for(let i=0; i<100; i++){
           loadCharactersName = data.data.results[i].name;
           loadCharactersPath = data.data.results[i].thumbnail.path;
           loadCharactersExtension = data.data.results[i].thumbnail.extension
           let image_request = loadCharactersPath + "." + loadCharactersExtension;
           console.log(loadCharactersName);
           console.log(loadCharactersPath);
           console.log(image_request)

           $("#charactersTable").append("<tr><td>" + loadCharactersName + "</td></tr>" );
           $("#charactersTable").append("<tr><td><img src=\"" + image_request + "\" height=\"100px\"></img></td></tr>");
            }

          })

      }

      initialLoadCharacters()

      function singleCharacters(){

      let inputNameStartsWith = $('#search').val();
        console.log("input:" + inputNameStartsWith);
            getString = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8e8d27528df8e1068e2773e3a7161575&hash=412852e32d04be7d8218808df40d53f1&nameStartsWith="+inputNameStartsWith;
      $("#charactersTable").html("");
        $.get(getString, function(data2){

           for(let i=0; i<20; i++){
           searchCharactersName = data2.data.results[i].name;
           searchCharactersPath = data2.data.results[i].thumbnail.path;
           searchCharactersExtension = data2.data.results[i].thumbnail.extension
           let search_image_request = searchCharactersPath + "." + searchCharactersExtension;
           console.log(searchCharactersName);
           console.log(searchCharactersPath);
           console.log(search_image_request);

           $("#charactersTable").append("<tr><td>" + searchCharactersName + "</td></tr>" );
           $("#charactersTable").append("<tr><td><img src=\"" + search_image_request + "\" height=\"100px\"></img></td></tr>");
          }

      })

      }

      //click functionality
      $("#find").click(function(){
        let inputNameStartsWith2 = $('#search').val();
          if (inputNameStartsWith2 != ""){
          singleCharacters();
          }
          else
          {

          initialLoadCharacters();
          }

        })

  })
})()

    /*
                        //get events
                      //  character_id = 1009351;
                        getEventsString1 = "http://gateway.marvel.com/v1/public/characters/"
                        getEventsString2 = "/events?ts=1&apikey=8e8d27528df8e1068e2773e3a7161575&hash=412852e32d04be7d8218808df40d53f1"
                        getEventsStringFinal = getEventsString1 + character_id + getEventsString2;
                        console.log("outside" + character_id);
                        console.log(getEventsStringFinal);
                        $.get(getEventsStringFinal, function(data){

                          let events;
                          let eventsDescription;
                          for(let i = 0; i < 5; i++){
                          eventsName = data.data.results[i].title;
                          eventsDescription = data.data.results[i].description;


                          $("#events_title").append("Name: " + eventsName)
                          $("#events_description").append("Description: " + eventsDescription);

                        }


                       })

                        //end
    */
