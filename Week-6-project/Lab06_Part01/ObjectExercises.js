
const book = {
  title: "Ancillary Justice",
  author: "Ann Leckie",
  copyright: "06/19/2015"
}

const author = {
  name: "Ann Leckie",
  birthdate: "03/02/1966"
}

function getTitle () {
  return book.title;
}

function getAuthor () {
  return author.name;
}

function setBirthdate (year) {
 author.birthdate = year
}

function cookForOneMinute () {
  microwave.time = 60;
  return microwave.cook();
}

cdPlayer.volume = 35;
cdPlayer.album = "No Dogs Allowed";
cdPlayer.skip = function () { cdPlayer.track++; }
delete cdPlayer.power;

function listValues () {
   Object.values(cdPlayer);
}