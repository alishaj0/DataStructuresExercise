// DATA STRUCTURES EXERCISE

//1a)
const jedi = [];
    console.log(jedi);

//1b)
jedi[jedi.length] = "Luke";
    console.log(jedi);

// 1c)
jedi.push("Obi-Wan Kenobi");
    console.log(jedi);

//1d)
jedi.unshift("Yoda");
    console.log(jedi);
            // .unshift adds new item to start of array

//1e)
    console.log(jedi[1]);

//1f)
// jedi.splice(2);
jedi.pop();
    // .pop removes last item in array
    console.log(jedi);

//1g)
jedi.shift();
    // .shift removes first item in array 
    console.log(jedi);

//2a)
const sithLords = [
    "Darth Vader", 
    "Darth Sidious", 
    "Dark Maul"
];
    console.log(sithLords);

//2b)
const imperialOfficers = [
    "Grand Moff Tarkin", 
    "Orson Krennic"
];
    console.log(imperialOfficers);

//2c)
const starWarsVillians = sithLords.concat(imperialOfficers);
    console.log(starWarsVillians);

//2d)
    console.log(starWarsVillians.slice(0, 2));

//3a)
const droids = {
    astromech: "R2-D2",
    protocol: "C-3P0",
    assassin: "IG-88"
};
    console.log(droids);

//3b)
    console.log(droids["astromech"]);

//3c)
    console.log(droids.protocol);

//3d)
droids["assassin"] = "IG-11";
    console.log(droids);



// BONUS

//4)
    console.log(starWarsVillians[0][6]);

//5)
    console.log(sithLords.slice(-2, -1));

//6a)
const starWarsMovies = {
    firstObject: [{
        episodeOne: "The Phantom Menace",
        epidsodeTwo: "Attack of the Clones",
        episodeThree: "Revenge of the Sith"
    },  
        "Solo",
        "Rogue One"
    ],
    secondObject: {
        episodeFour: "A New Hope",
        episodeFive: "The Empire Strikes Back",
        episodeSix: "Return of the Jedi"
    }, 
    thirdObject: {
        episodeSeven:"The Force Awakens",
        episodeEight: "The Last Jedi",
        episodeNine: "The Rise of Skywalker"
    }
};

    console.log(starWarsMovies);