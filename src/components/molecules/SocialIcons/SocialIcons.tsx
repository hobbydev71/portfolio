import { FC } from 'react';
import { StyledSocialIcons } from './styles';

import { Icon } from 'Atoms/Icon';

const SocialIcons: FC = () => {
	return (
		<StyledSocialIcons>
			<li>
				<a
					href="https://github.com/hobbydev71"
					target="_blank"
					rel="noopener noreferrer"
					title="Github"
				>
					<Icon icon="GITHUB" />
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/daniel-lin-21a513121"
					target="_blank"
					rel="noopener noreferrer"
					title="LinkedIn"
				>
					<Icon icon="LINKEDIN" />
				</a>
			</li>
		</StyledSocialIcons>
	);
};

export { SocialIcons };
