import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const positions = [
		{
			company: 'Focus Market',
			website: 'https://focus.market/',
			jobTitle: 'Software Development Engineer',
			startDate: '2020-01-03',
			endDate: null,
			place: 'London, United Kingdom',
			description: `* Joined Focus Market as a senior software engineer, first with front-end expertise in the fulfilment squad.
* Developed the Smartcontract using Solidity.
* Tech lead developing a custom-built customer services portal based on React and Next.js using TypeScript and Redux, retiring a third-party solution, saving a 6-digit sum in licence fees
* Increased non-existent test-coverage to 90+%
* Introduced e2e tests using Cypress`,
			technologies: [
				'TypeScript',
				'React',
				'Next.js',
				'Web3 JS',
				'Redux',
				'Solidity',
				'SmartContract',
				'GraphQL',
				'REST API',
				'Jest',
			],
		},
		{
			company: 'Accenture',
			website: 'https://www.accenture.com/us-en',
			jobTitle: 'Senior Full Stack Engineer',
			startDate: '2020-05-05',
			endDate: '2020-12-24',
			place: 'Michigan, United States',
			description: `* Developed web applications using React, JavaScript (ES6), GraphQL and Sass
* Tech lead for the rebuild of site applications, liaising between engineering and product teams
* Optimised performance and accessibility of React applications
* Contributed to advanced error and bug tracking strategy to increase application reliability
* Improved test coverage by writing unit and integration tests with Jest and Enzyme
* Implemented platform-wide ad injection logic to work within the SSR React application and AMP pages
* Mentored more junior engineers through pair programming, code reviews and 1-on-1s`,
			technologies: [
				'JavaScript',
				'React',
				'ES6',
				'GraphQL',
				'Sass',
				'Webpack',
				'Node.js',
				'Express',
				'Apollo',
			],
		},
		{
			company: 'Finxflo',
			website: 'https://www.finxflo.com/',
			jobTitle: 'Front-End Web Developer',
			startDate: '2019-01-15',
			endDate: '2020-04-30',
			place: 'Singapore,  Singapore',
			description: `* Joined as first JavaScript developer to lead the move away from WordPress-based monolithic architectures to more robust and modern React-based systems
* Developed React web applications using TypeScript, Next.js, Gatsby, GraphQL and Styled-Components with global state management through Context API
* Worked with WordPress as a headless CMS using GraphQL and REST APIs
* Developed B2B web applications for several Fortune 500 clients using vanilla JavaScript (ES6) and React
* Worked on legacy projects using ES5 JavaScript syntax with Gulp as a task runner
* Lead the redevelopment effort of a new website for Raconteur Agency
* Tech lead for several internal platform optimisations and new development projects using React and Gatsby`,
			technologies: [
				'TypeScript',
				'React',
				'Gatsby',
				'Next.js',
				'Web3 JS',
				'GraphQL',
				'REST API',
				'Styled-Components',
			],
		},
		{
			company: 'Wraith & CO',
			website: 'https://fba.support/',
			jobTitle: 'Senior FullStack Developer',
			startDate: '2014-05-04',
			endDate: '2018-12-31',
			place: 'New York, United States',
			description: `* Tech lead in design and development of new website following brand guidelines based on WordPress, PHP, HTML5, CSS and JavaScript
* Orchestrating web development work between London and Atlanta offices
* Collaborating with teams in Beijing, Dublin, New York and Bonn offices to develop custom experiences for clients across the world
* Development of a web application for a contender energy provider in collaboration with TSW Creative for critical campaign launch under time pressure
* DevOps tasks monitoring and maintaining Apache server infrastructure and DNS
* Development of PWA (React) for an event with 250+ attendees
* Collaborated with internal creative agency to deliver assets for pitches`,
			technologies: [
				'React JS',
				'Ruby on Rails',
				'jQuery',
				'React',
				'Sass',
				'WordPress',
				'REST API',
			],
		},
		{
			company: 'Oasis Web Asia',
			jobTitle: 'FullStack Developer',
			startDate: '2011-11-03',
			endDate: '2014-03-31',
			place: 'Singapore, Singapore',
			description: `* Development of web applications for small and medium-sized businesses using JavaScript, React, PHP, Sass, HTML5, WordPress, Drupal and different e-commerce solutions
* Specialised in bespoke client solutions for London-based startups
* Design of digital assets and print products
* Management of freelance and contract engineers for international projects
* Search engine optimisation and search engine marketing`,
			technologies: [
				'JavaScript',
				'PHP',
				'Sass',
				'HTML',
				'React',
				'Angular',
				'WordPress',
				'Drupal',
				'Shopify',
				'Magento',
			],
		},
	];

	res.status(200).json({ positions });
};
