import React from 'react';

import './App.css';

function getImageUrl (person, size = 's') {
	return ( 'https://i.imgur.com/' + person.imageId + size + '.jpg' );
}

function Profile ({person, imageSize = 90}) {
	const imageUrl = getImageUrl(person)

	return (
		<section className='profile'>
			<h2> {person.name} </h2>
			<img className='avatar' src={imageUrl} alt={person.name} width={imageSize} height={imageSize} />
			<p> <b> Profession: </b> {person.profession} </p>
			<p> <b> Awards: </b> {person.awards.join(', ')} </p>
			<p> <b> Discovered: </b> {person.discovery} </p>
		</section>
	);
}

function Gallery () {
	return (
		<>
			<Profile person={{
				imageId: 'szV5sdG',
				name: 'Maria Skłodowska-Curie',
				profession: 'Physicist and Chemist',
				discovery: 'Polonium (Chemical Element)',
				awards: [
					'Nobel Prize in Physics',
					'Nobel Prize in Chemistry',
					'Davy Medal',
					'Matteucci Medal'
				],
			}} />
			<Profile person={{
				imageId: 'YfeOqp2',
				name: 'Katsuko Saruhashi',
				profession: 'Geochemist',
				discovery: 'A method for measuring carbon dioxide in seawater',
				awards: [
					'Miyake Prize for Geochemistry',
					'Tanaka Prize'
				],
			}}/>
		</>
	);
}

function App() {
	return (
		<>
			<h1> Nobel People </h1>
			{/* <p> who couldn't react to react (weird flex that we can?) </p> */}
			<Gallery />
		</>
	);
}

export default App;
