var people = [{name: 'Dude', age:45, gender: 'male'},
	{name:'Dudette', age:23, gender: 'female'},
	{name:'Bruh', age:12, gender: 'male'},
	{name:'Sis', age:68, gender: 'female'},
	];

var oldMen = []

var oldMenFilter = people.filter(function(person) {
	oldMen.push(people.age > 40 && people.gender === 'male')
	}
);
console.log(oldMen);
