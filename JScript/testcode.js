//pick a random bird function
function select_random(list) {
    var random_index = Math.floor(Math.random() * list.length);
    console.log(random_index)
    if (selected_birds.includes(list[random_index]) && random_index < list.length) {
        selected_birds.push(list[random_index + 1]);
    } else if (selected_birds.includes(list[random_index]) && random_index == list.length) { 
        selected_birds.push(list[random_index - 1]);
    } else {
        selected_birds.push(list[random_index]);
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////
//work in progress

//pick a random bird and add it to a list
function select_random(times, list, push_array) {
    //repeat the prcess x times
    for (let step = 0; step < times; step++) {
        //pick a random bird
        let random_index = Math.floor(Math.random() * list.length);
        let random_bird = list[random_index];
        // if the bird is in the list (this should be a whole loop)
        while (push_array.includes(random_bird))
        if (push_array.includes(random_bird)) {
            let random_index = Math.floor(Math.random() * list.length);
            let random_bird = list[random_index];
        } else {}
            push_array.push(random_bird);
            birds.splice(random_bird, 1);
            //list.splice(random_index, 1);                           
    }       
};