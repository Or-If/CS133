const book = {
    //member data
    title: "False Gods",
    author: "Graham McNeill",
    copyright: "2022",
}

const author = {
    //member data
    name: "Graham McNeill",
    birthdate: 1971,
}

//getters
function getTitle() { return book.title; }
function getAuthor() { return author.name; }

//setters
function setBirthdate(year) { author.birthdate = year;}

//other functions
function cookForOneMinute(){
    microwave.time = 60;
    return microwave.cook();
}

function listValues(){
    let output = "";

    for (key in cdPlayer) { output += cdPlayer[key] + " "; }

    return output;
}