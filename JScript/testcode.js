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