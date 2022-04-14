document.addEventListener('DOMContentLoaded', () => {

    //const isObjectEmpty = Object.keys(object).length === 0;
    //Object.keys(nonEmpty).length === 0; // => false
    //function to replace an item
    function replace(input_id, new_p) {
        const old = document.getElementById(input_id);
        const new_element = document.createElement('h3');
        new_element.innerHTML = new_p;
        old.parentNode.replaceChild(new_element, old);
    }
    
    //function to get user input on submitting
    function addToObject(userInput) {
        userInput.preventDefault();      
        const bird = document.getElementById("current").innerHTML;   
        const key1 = document.getElementById("soundsLike").value;    
        const key2 = document.getElementById("saying").value;    
        const mainKey = document.getElementById("memkey").value;
        
        let item = {
            name: bird,
            like: key1,
            saying: key2,
            memKey: mainKey
        };   
        //insert the user input onto the page
        replace("soundsLike", key1);
        replace("saying", key2);
        replace("memkey", mainKey);
        //Remove the submit button
        var submit_button = document.getElementById("submit");
        submit_button.parentNode.removeChild(submit_button);
        //store item in localstorage
        localStorage.setItem(bird, JSON.stringify(item));
    }

    //get the object relevant to this page
    const bird = document.getElementById("current").innerHTML;
    let bird_array = localStorage.getItem(bird);
    bird_array = JSON.parse(bird_array)
    replace("soundsLike", bird_array.like);
    replace("saying", bird_array.saying);
    replace("memkey", bird_array.memKey);
    

    // Collecting user input
    const birdForm = document.getElementById("memory_form");
    birdForm.addEventListener("submit", addToObject);

    
})