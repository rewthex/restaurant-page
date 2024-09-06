import './home.style.css';

const about = 'Founded in 1944, Ringside Steakhouse has been a cherished institution in Portland, Oregon, for over seven decades. This iconic steakhouse began as a humble family-owned establishment, born out of a deep passion for exceptional food and genuine hospitality. Located in the heart of Portland, Ringside quickly became known for its warm, inviting atmosphere and its dedication to serving the finest cuts of beef.'
const hours = [
	'Monday: 10am - 8pm',
	'Tuesday: 10am - 8pm',
	'Wednesday: 10am - 8pm',
	'Thursday: 10am - 8pm',
	'Friday: 10am - 10pm',
	'Saturday: 10am - 10pm',
	'Sunday: 10am - 8pm',
];

const location = [
	'Ringside Steakhouse',
	'1234 NW Luxor Street',
	'Portland, OR 97209',
];

export default (() => {
	const homeDiv = document.createElement('div');
	homeDiv.classList.add('home-container');

	const aboutDiv = document.createElement('div');
	aboutDiv.classList.add('about');
    aboutDiv.innerText = about;

	homeDiv.appendChild(aboutDiv);

	const hoursDiv = document.createElement('div');
	hoursDiv.classList.add('hours');

	const hoursList = document.createElement('ul');
	hoursList.classList.add('hours-list');
	hours.forEach((day) => {
		const listItem = document.createElement('li');
		listItem.innerText = day;
		hoursList.appendChild(listItem);
	});
	hoursDiv.appendChild(hoursList);
	homeDiv.appendChild(hoursDiv);

	const locationDiv = document.createElement('div');
	locationDiv.classList.add('location');

	const locationList = document.createElement('ul');
	locationList.classList.add('location-list');
	location.forEach((line) => {
		const listItem = document.createElement('li');
		listItem.innerText = line;
		locationList.appendChild(listItem);
	});
	locationDiv.appendChild(locationList);
	homeDiv.appendChild(locationDiv);

	return homeDiv;
});
