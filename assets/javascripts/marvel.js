
  (function(){

    $(function(){
      var character_id;
      let getString;
      let getLocation;



//click functionality
                 $("#find").click(function(){

                   let inputNameStartsWith = $('#search').val();
                   getString = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8e8d27528df8e1068e2773e3a7161575&hash=412852e32d04be7d8218808df40d53f1&nameStartsWith="+inputNameStartsWith;
                   console.log(getString)

                   //
                     $.get(getString, function(data){
                       let characters3 = data.data.results[0].name;
                       let character_path = data.data.results[0].thumbnail.path;
                       let character_extension = data.data.results[0].thumbnail.extension
                       let image_request = character_path + "." + character_extension;
                       console.log(characters3);
                       console.log(character_extension);
                      $("#characters").append(characters3);
                       $('#hero_img').attr('src',image_request);
                    //  character_id = data.data.results[0].id;
                      character_id = 1009351;
                      console.log(character_id);

                    })

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



                })


        })
    })()
