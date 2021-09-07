import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'RESTful APIs',
	];
	const frameworks = ['React', 'Vue.js', 'Next.js', 'Gatsby', 'Svelte'];
	const databases = ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL'];
	const blockchain = ['Solidity', 'Rust', 'SmartContract', 'Web3 JS', 'Ether JS', 'Solana'];
	const various = ['Scrum', 'Agile', 'Jira', 'Confluence'];
	const design = [
		'Adobe Photoshop',
		'Adobe XD',
		'Sketch',
		'Figma',
	];
	const softSkills = [
		'Strong communicator',
		'Leadership',
		'Problem solving',
		'Creative thinking',
		'Flexible and adaptive',
		'Team player',
		'Always on time',
	];
	const languages = [
		{
			language: 'English',
			level: 'bilingual',
			icon: 'us',
		},
		{
			language: 'Mandarian',
			level: 'bilingual',
			icon: 'zh',
		},
	];

	res.status(200).json({
		technologies,
		frameworks,
		databases,
		blockchain,
		various,
		design,
		softSkills,
		languages,
	});
};
