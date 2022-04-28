document.addEventListener('DOMContentLoaded', () => {

    //Create bird objects with required data

    const robin = {
        name: "Robin",
        large_img: "../images/robin_sq.jpg",
        small_img: "../images/robin.jpg",
        audio: "../audio/robin.mp3"
    };

    const blackbird = {
        name: "Blackbird",
        large_img: "../images/blackbird_sq.jpg",
        small_img: "../images/blackbird.jpg",
        audio: "../audio/blackbird.mp3"
    };

    const chaffinch = {
        name: "Chaffinch",
        large_img: "../images/chaffin_sq.jpg",
        small_img: "../images/chaffin.jpg",
        audio: "../audio/chaffinch.mp3"
    };

    const goldfinch = {
        name: "Goldfinch",
        large_img: "../images/goldfinch_sq.jpg",
        small_img: "../images/goldfinch.jpg",
        audio: "../audio/goldfinch.mp3"
    };

    const great_tit = {
        name: "Great Tit",
        large_img: "../images/great_tit_sq.jpg",
        small_img: "../images/great_tit.jpg",
        audio: "../audio/great_tit.mp3"
    };

    const long_tailed_tit = {
        name: "Long-tailed Tit",
        large_img: "../images/long_tailed_tit_sq.jpg",
        small_img: "../images/long_tailed_tit.jpg",
        audio: "../audio/long_tailed_tit.mp3"
    };

    const magpie = {
        name: "Magpie",
        large_img: "../images/magpie_sq.jpg",
        small_img: "../images/magpie.jpg",  
        audio: "../audio/magpie.mp3"
    };

    const sparrow = {
        name: "House Sparrow",
        large_img: "../images/house_sparrow_sq.jpg",
        small_img: "../images/house_sparrow.jpg",
        audio: "../audio/sparrow.mp3"
    };

    const starling = {
        name: "Starling",
        large_img: "../images/starling_sq.jpg",
        small_img: "../images/starling.jpg",
        audio: "../audio/starling.mp3"
    };

    const wood_pigeon = {
        name: "Wood Pigeon",
        large_img: "../images/wood_pigeon_sq.jpg",
        small_img: "../images/wood_pigeon.jpg",
        audio: "../audio/wood_pigeon.mp3"
    };


    //3 lists one unchanging to retrieve objects 

    const origin = [
        robin,
        blackbird,
        chaffinch,
        goldfinch,
        great_tit,
        long_tailed_tit,
        magpie,
        sparrow,
        starling,
        wood_pigeon,
    ];
    // initialize a score counter
    let score = 0;
    // one to populate uniquely populate elected birds
    let birds = [...origin];
    // one for the main birds
    let main_birds = [...origin];
    // one to track all birds on the page birds
    let elected_birds = [];
    //Detemine main bird
    let main_bird = get_random_bird_from(main_birds);
    console.log(main_bird)
    //add main bird to elected birds
    elected_birds.push(main_bird);
    //remove from main_bird from main_birds and from 
    main_birds.splice(main_birds.indexOf(main_bird), 1);
    birds.splice(birds.indexOf(main_bird), 1);

    //load the main bird audio file to the page
    let bird_song = document.getElementById("quiz_audio"); 
    bird_song.src = main_bird.audio;
    console.log(bird_song) 

    //Get the difficlty and elect birds for the page
    const difficulty = document.querySelector("#selected_difficulty").innerHTML;
    set_difficulty(difficulty, birds, elected_birds);

    //Populate the page with elected birds
    populate_grid(elected_birds);

    //Get the hint button
    let hint_button = document.getElementById("get-a-hint");
    //Get a hint for main bird from local storage
    hint_button.addEventListener('click', function get_hint() {         
        let hint_bird = main_bird.name;      
        let bird_array = localStorage.getItem(hint_bird);
        bird_array = JSON.parse(bird_array);
        let hint = bird_array.memKey; 
        alert("This is your memory key for this bidsong: " + hint);
    });
    

    //add a 'click' event listener to listen for the users choice
    let select_birds = document.getElementsByClassName("bird");
    for (const bird of select_birds) {
        bird.addEventListener('click', function check_selection(clicked_bird) {
            const img_id = document.getElementById(clicked_bird.target.id).id;
            // check if user choice is correct.
            if (img_id == main_bird.name) {
                //Replace the instuction container with the main_bird image
                let parent_node = document.getElementById("parent");
                let old_node = document.getElementById("instruction");
                let new_node = document.createElement('img');
                new_node.setAttribute('src', main_bird.large_img);
                new_node.setAttribute('id', "learn-bird");
                new_node.setAttribute('alt', main_bird.name);
                parent_node.replaceChild(new_node, old_node);
                // Position the main_bird image
                new_node.style.display = "flex";
                new_node.style.marginLeft = "auto";
                new_node.style.marginRight = "auto";
                new_node.style.marginTop = "20px";
                new_node.style.marginBottom = "20px";
                //Congratulate user and increment score 
                alert("Well Done! You got it right. Try another one.");
                score += 1;

                setTimeout(change_back, 2000);
                function change_back() {
                    //Replace the main_bird image with the instuction container  
                    parent_node = document.getElementById("parent");
                    old_node = document.getElementById("learn-bird");
                    new_node = document.createElement("div");
                    new_node.setAttribute("class", "interact-container");
                    new_node.setAttribute("id", "instruction");
                    parent_node.replaceChild(new_node, old_node);

                    //create a text node in the indtruction div
                    const node = document.createElement("p");
                    const textnode = document.createTextNode("Click on the audio player to listen to a birdsong. Then select the bird from the list below that matches the birdsong. If you get stuck click on the \"Get a Hint \" button.");
                    node.setAttribute('id', "instruct-text");
                    node.appendChild(textnode);
                    document.getElementById("instruction").appendChild(node);
                }
                //When the main_birds list is empty report the score
                if (main_birds.length > 0) {
                    //repopulate birds
                    birds = [...origin];
                    main_bird = get_random_bird_from(main_birds);
                    elected_birds.push(main_bird);
                    main_birds.splice(main_birds.indexOf(main_bird), 1);
                    birds.splice(birds.indexOf(main_bird), 1);
                    //repopulate according to difficulty

                    //load the main bird audio file to the page
                    let bird_song = document.getElementById("quiz_audio"); 
                    bird_song.src = main_bird.audio; 

                    set_difficulty(difficulty, birds, elected_birds);
                    populate_grid(elected_birds); 

                } else {
                    //report the score
                    if (difficulty == "Easy") {
                        if (score == 10) {
                            alert("WELL DONE! You have completed this QUIZ with FLYING STARS. Your score is " + score + " out of 10. Try doing the quiz on MEDIUM difficulty");
                            window.location.reload();
                        
                        }else if (score >= 5) {
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. You are doing well. Try this quiz again");
                            window.location.reload();

                        }else{
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. Try going back to the learn section to improve your skills");
                            window.location.reload();
                        }

                    }else if (difficulty == "Medium") {
                        if (score == 10) {
                            alert("WELL DONE! You have completed this QUIZ with FLYING STARS. Your score is " + score + " out of 10. Try doing the quiz on HARD");
                            window.location.reload();
   
                        }else if (score >= 5) {
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. You are doing well. Try this quiz again");
                            window.location.reload();

                        }else{
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. Try doing the quiz on EASY to improve your skills");
                            window.location.reload();
                        }
                    }else{
                        if (score == 10) {
                            alert("WELL DONE! You have completed this QUIZ with FLYING STARS. Your score is " + score + " out of 10. You are a BOSS!!. Go outside and sing to the birds!!");
                            window.location.reload();
                        
                        }else if (score >= 5) {
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. You are doing well. Try this quiz again");
                            window.location.reload();

                        }else{
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. Try doing the quiz on MEDIUM to improve your skills");
                            window.location.reload();

                        }
                    }
                }
                
            }else if (!(img_id == main_bird.name)) {

                alert("Thats not the one. Try the next");

                if (main_birds.length > 0) {
                    //repopulate birds
                    birds = [...origin];
                    main_bird = get_random_bird_from(main_birds);
                    elected_birds.push(main_bird);
                    main_birds.splice(main_birds.indexOf(main_bird), 1);
                    birds.splice(birds.indexOf(main_bird), 1);
                    //repopulate according to difficulty

                    //load the main bird audio file to the page
                    let bird_song = document.getElementById("quiz_audio"); 
                    bird_song.src = main_bird.audio; 

                    set_difficulty(difficulty, birds, elected_birds);
                    populate_grid(elected_birds); 

                } else {
                    //report the score
                    if (difficulty == "Easy") {
                        if (score == 10) {
                            alert("WELL DONE! You have completed this QUIZ with FLYING STARS. Your score is " + score + " out of 10. Try doing the quiz on MEDIUM difficulty");
                            window.location.reload();
                        
                        }else if (score >= 5) {
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. You are doing well. Try this quiz again");
                            window.location.reload();

                        }else{
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. Try going back to the learn section to improve your skills");
                            window.location.reload();
                        }

                    }else if (difficulty == "Medium") {
                        if (score == 10) {
                            alert("WELL DONE! You have completed this QUIZ with FLYING STARS. Your score is " + score + " out of 10. Try doing the quiz on HARD");
                            window.location.reload();
                      
                        }else if (score >= 5) {
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. You are doing well. Try this quiz again");
                            window.location.reload();

                        }else{
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. Try doing the quiz on EASY to improve your skills");
                            window.location.reload();

                        }
                    }else{
                        if (score == 10) {
                            alert("WELL DONE! You have completed this QUIZ with FLYING STARS. Your score is " + score + " out of 10. You are a BOSS!!. Go outside and sing to the birds!!")
                            window.location.reload()
                        
                        }else if (score >= 5) {
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. You are doing well. Try this quiz again");
                            window.location.reload();

                        }else{
                            alert("WELL DONE! You have completed this QUIZ. Your score is " + score + " out of 10. Try doing the quiz on MEDIUM to improve your skills");
                            window.location.reload();

                        }
                    }
                }
     
            }
           
        });
    }
//------------------------------------------------------------------------------->
//-----------------------------FUNCTIONS------------------------------------------>
//--------------------------------------------------------------------------------->
    // function to randomly select a bird from a list and return it. 
    function get_random_bird_from(array) {
        // get a random index
        let random_index = Math.floor(Math.random() * array.length);
        // return the item at that index from a list
        let random_bird = array[random_index];
        return random_bird;         
    }

    // Function to select a random bird from a list, push it to another list and remove it from old.
    // as many times as you want
    function get_unique_birds(times, source_array, push_array) {

        for (let step = 0; step < times; step++) {
            let bird = get_random_bird_from(birds);
            //add bird to elected birds
            push_array.push(bird);
            //remove from origional list
            source_array.splice(source_array.indexOf(bird), 1);  
        }
    }

    function set_difficulty(difficulty, from_array, to_array) {
        if (difficulty == "Easy") {
            get_unique_birds(2, from_array, to_array);
        } else if (difficulty == "Medium") {
            get_unique_birds(5, from_array, to_array);
        } else {
            get_unique_birds(8, from_array, to_array); 
        }
    }

   

    // populate the grid  birds for the user to choose from the elected birds
    function populate_grid(array) {
        // get the grid bird image elements from the page
        let grid_birds = document.getElementsByClassName("bird");
        // array to set bird names
        const bird_name_array = [];

        // iterate through the grid birds and change attributes 
        for (const bird of grid_birds) {         
            // Pick a bird from the elected birds to add to the page
            var random_index = Math.floor(Math.random() * array.length);
            var random_bird = array[random_index];
            // remove bird from to_array
            array.splice(random_index, 1);
            // change the id to the name of the random_bird
            bird.setAttribute('id', random_bird.name); 
            //change the element image to the random_bird image
            bird.setAttribute('src', random_bird.small_img);
            bird.setAttribute('alt', main_bird.name);
            //collect the bird names in an array.
            bird_name_array.push(random_bird.name);        
        } 

        // get the grid bird name elements from the page and set them to the names of the birds.
        let index = 0;
        let bird_names = document.getElementsByClassName("name");

        for (let name of bird_names) { 
            name.textContent = bird_name_array[index];
            index += 1;
        }
    }    
})