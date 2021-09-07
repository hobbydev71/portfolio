import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const education = [
		{
			institute: 'Help University',
			website: 'https://help.edu.my/',
			course: 'Bachelor degree',
			endDate: '2011-03-30',
			place: 'Kuala Lumpur, Malaysia',
			technologies: [
				'Computer Science',
				'Artificial Intelligence',
				'Software Engineering',
			],
		},
	];

	res.status(200).json({ education });
};
