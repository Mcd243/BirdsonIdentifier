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
    audio: "../audio/starling.mp3"
};

const wood_pigeon = {
    name: "Wood Pigeon",
    large_img: "../images/wood_pigeon_sq.jpg",
    small_img: "../images/wood_pigeon.jpg",
    audio: "../audio/wood_pigeon.mp3"
};

let birds = [
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
let main_birds = [...birds];
let elected_birds = [];



document.addEventListener('DOMContentLoaded', () => {

    //Detemine main bird
    const main_bird = get_random_bird_from(main_birds);
    //add main bird to elected birds
    elected_birds.push(main_bird);
    //remove from main birds
    main_birds.splice(main_birds.indexOf(main_bird), 1);
    birds.splice(birds.indexOf(main_bird), 1);

    //load the main bird audio file to the page
    //document.getElementById('audio_src').src=main_bird.audio;
    console.log(main_bird.audio)
    
    

    //Get the difficulty of the page
    const difficulty = document.getElementById("selected_difficulty").innerHTML;
    if (difficulty == "Easy") {
        get_unique_birds(3, birds, elected_birds);
        populate_grid(elected_birds, "img_1", "name_1")
        populate_grid(elected_birds, "img_2", "name_2")
        populate_grid(elected_birds, "img_3", "name_3")
    } else if (difficulty == "Medium") {
        get_unique_birds(5, birds, elected_birds); 
        populate_grid(elected_birds, "img_1", "name_1");
        populate_grid(elected_birds, "img_2", "name_2");
        populate_grid(elected_birds, "img_3", "name_3");
        populate_grid(elected_birds, "img_4", "name_4");
        populate_grid(elected_birds, "img_5", "name_5");
        populate_grid(elected_birds, "img_6", "name_6");
        
    } else {
        get_unique_birds(8, birds, elected_birds);
        populate_grid(elected_birds, "img_1", "name_1");
        populate_grid(elected_birds, "img_2", "name_2");
        populate_grid(elected_birds, "img_3", "name_3");
        populate_grid(elected_birds, "img_4", "name_4");
        populate_grid(elected_birds, "img_5", "name_5");
        populate_grid(elected_birds, "img_6", "name_6");
        populate_grid(elected_birds, "img_7", "name_7");
        populate_grid(elected_birds, "img_8", "name_8");
        populate_grid(elected_birds, "img_9", "name_9");
    }


    const select_birds = document.getElementsByClassName("bird");

    for (const bird of select_birds) {
        bird.addEventListener('click', function check_selection(clicked_bird) {
            const img_id = document.getElementById(clicked_bird.target.id).id
            console.log(main_bird.name)
            console.log(img_id)
            if (img_id == main_bird.name) {
                const parent_node = document.getElementById("parent")
                const old_node = document.getElementById("instruction")
                const new_node = document.createElement('img')
                new_node.setAttribute('src', main_bird.large_img)
                new_node.setAttribute('id', "learn-bird")
                parent_node.replaceChild(new_node, old_node)
                new_node.style.display = "flex"
                new_node.style.marginLeft = "auto"
                new_node.style.marginRight = "auto"
                new_node.style.marginTop = "20px"
                new_node.style.marginBottom = "20px"
                alert("Well Done! You got it right. Try another one.")
            } else {
                alert("Thats not the one. Try the next one.")
            }
            
          
        });
      }

      

    
    
    function get_random_bird_from(array) {
        let random_index = Math.floor(Math.random() * array.length);
        let random_bird = array[random_index];
        return random_bird;         
    }

    function get_unique_birds(times, array, push_array) {
        for (let step = 0; step < times; step++) {
            let bird = get_random_bird_from(birds);
            //add bird to elected birds
            push_array.push(bird);
            //remove from birds
            array.splice(array.indexOf(bird), 1);  
        }
    }

    function populate_grid(list, img_id, name_id) {
        let random_index = Math.floor(Math.random() * list.length);
        let random_bird = list[random_index];
        //set the bird image
        let bird_img = document.getElementById(img_id);
        bird_img.setAttribute('src', random_bird.small_img);
        bird_img.setAttribute('id', random_bird.name);
        //document.getElementById("demo").id = "newid";
        //set the bird name     
        let bird_name = document.getElementById(name_id);
        bird_name.textContent = random_bird.name;
        //console.log(bird_name.textContent)
        list.splice(random_index, 1);    
    }

})    