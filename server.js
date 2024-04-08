const express = require('express');
const app = express();

const pets = [
	{name: "thumper", id: 1, owner: "paul"},
	{name: "buddy", id: 2 , owner: "ron"},
	{name: "mocha", id: 3, owner: "tino"},
	{name: "bambi" , id: 4, owner: "zoe"},
	{name: "relly", id: 5, owner: "mary"}
]




app.get('/api/v1/pets', (req, res) => {
	res.send(pets)
})


app.get('/api/v1/pets/owner', (req, res) => {
	console.log(req.query);
	const {owner} = req.query
	const foundOwner = pets.find((pet) => {
		if(owner === pet.owner){
			return pet
		}
	});
	res.send(foundOwner)
	});


app.get('/api/v1/pets/:name', (req, res) => {
	const {name} = req.params 
	const foundPet = pets.find((pet) => {
		return name === pet.name
	});
	res.send(foundPet)
});




app.listen(8080, () => {
	console.log(`listening to port 8080`)
})
