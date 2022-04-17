//Create bird objects with required data

const robin = {
    name: "Robbin",
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
    small_img: "../images/goldfingch.jpg",
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
    name: "Sparrow",
    large_img: "../images/house_sparrow_sq.jpg",
    small_img: "../images/house_sparrow.jpg",
    audio: "../audio/sparrow.mp3"
};

const starling = {
    name: "Starling",
    large_img: "../images/starling_sq.jpg",
    small_img: "../images/starling.jpg",
    audio: "../audio/wood_starling.mp3"
};

const wood_pigeon = {
    name: "Wood Pigeon",
    large_img: "../images/wood_pigeon_sq.jpg",
    small_img: "../images/wood_pigeon.jpg",
    audio: "../audio/wood_pigeon.mp3"
};

const birds = [
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
]

let main_birds = [...birds]

let populate_birds = []

document.addEventListener('DOMContentLoaded', () => {

    const difficulty = document.getElementById("selected_difficulty").innerHTML;


    if (difficulty == "Easy") {
        // get main bird
        select_random(1,birds, populate_birds)
        const main_bird = populate_birds[0];
        // remove from main birds
        main_birds.splice(main_bird, 1); 
        select_random(2, birds, populate_birds);
        
        
        //randomize the selection
        populate_grid(populate_birds, "img_1", "name_1")
        populate_grid(populate_birds, "img_2", "name_2")
        populate_grid(populate_birds, "img_3", "name_3")
        


    }else if (difficulty == "Medium") {
        select_random(1,birds, populate_birds)
        const main_bird = populate_birds[0];
        // remove from main birds
        main_birds.splice(main_bird, 1); 
        select_random(5, birds, populate_birds);
        //randomize the selection
        populate_grid(populate_birds, "img_1", "name_1");
        populate_grid(populate_birds, "img_2", "name_2");
        populate_grid(populate_birds, "img_3", "name_3");
        populate_grid(populate_birds, "img_4", "name_4");
        populate_grid(populate_birds, "img_5", "name_5");
        populate_grid(populate_birds, "img_6", "name_6");

    }else {
        select_random(1,birds, populate_birds)
        const main_bird = populate_birds[0];
        // remove from main birds
        main_birds.splice(main_bird, 1); 
        select_random(8, birds, populate_birds);
        //randomize the selection
        populate_grid(populate_birds, "img_1", "name_1");
        populate_grid(populate_birds, "img_2", "name_2");
        populate_grid(populate_birds, "img_3", "name_3");
        populate_grid(populate_birds, "img_4", "name_4");
        populate_grid(populate_birds, "img_5", "name_5");
        populate_grid(populate_birds, "img_6", "name_6");
        populate_grid(populate_birds, "img_7", "name_7");
        populate_grid(populate_birds, "img_8", "name_8");
        populate_grid(populate_birds, "img_9", "name_9");
    }
      
    //pick a random bird and add it to a list
    function select_random(times, array, push_array) {
        //repeat the prcess x times
        for (let step = 0; step < times; step++) {
            //pick a random bird
            let random_index = Math.floor(Math.random() * array.length);
            let random_bird = array[random_index];
            if (!(push_array.includes(random_bird))) {
                // if the bird is in the list add the bird to push array 
                push_array.push(random_bird);
                console.log(push_array)
                //remove the bird from birds array
                birds.splice(random_bird, 1);       
            /*}else{    
                let random_index = Math.floor(Math.random() * array.length);
                let random_bird = array[random_index];  
                // if the bird is in the list add the bird to push array 
                push_array.push(random_bird);
                console.log(push_array, "else")
                //remove the bird from birds array
                birds.splice(random_bird, 1);*/
            }                 
        }       
    };


    //randomly put on the page/////////
    function populate_grid(list, img_id, name_id) {
        for (let step = 0; step < list.length; step++) {
            //console.log(list)
            //pick a random bird
            let random_index = Math.floor(Math.random() * list.length);
            //console.log(random_index);
            let random_bird = list[random_index];
            //console.log(random_bird);
            //set the bird image
            let bird_img = document.getElementById(img_id);
            bird_img.setAttribute('src', random_bird.small_img);
            //console.log(bird_img)
            //set the bird name     
            let bird_name = document.getElementById(name_id);
            bird_name.textContent = random_bird.name;
            //console.log(bird_name.textContent)
            list.splice(random_index, 1);    
        }
        
        
    }


   


    //get a random bird from birds
        //add audio file to page
        //get memkey from storage
        

    //remove bird from list

    // if easy pick 2 birds add to list
        //add 3 birds to grid 
        //event listener click

    // if easy pick 5 birds add to list
        //add 6 birds to grid
        //event listener click

    // if easy pick 8 birds add to list
        //add 9 birds to grid
        //event listener click

    //if get hint button pressed 
        ////add memkey to page 

    //if chosen bird == selected bird
        //display popup "correct"
        //add one to counter

    //else 
        //display popup "wrong "

    //if page is medium birdlist is empty 
        //display correct counter out of 10
        //if correct counter <= 3
            //keep trying
        //elif correct counter >3  
            //very good try hard
            

    //if page is hard birdlist is empty 
        //display correct counter out of 10
        //if correct counter <= 5
            //keep trying or try medium
        //elif correct counter >5  
            //very good keep going
        //els
        



    


    



})    