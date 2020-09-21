import React from 'react';
import {
	FaFacebookSquare,
	FaTwitter,
	FaYoutube,
	FaGithub,
	FaInstagram,
	FaLinkedin,
} from 'react-icons/fa';

type PropsType = {
	item: {
		type: string;
		link: string;
	};
};

const SocialLink: React.FC<PropsType> = ({ item }) => {
	const type = item.type.toLowerCase();
	const title = item.type.charAt(0).toUpperCase() + item.type.slice(1);

	const LinkItem = () => {
		switch (type) {
			case 'facebook':
				return (
					<>
						<a
							className={type}
							href={item.link}
							data-tip={title}
							title={title}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookSquare />
						</a>
					</>
				);
			case 'twitter':
				return (
					<>
						<a
							className={type}
							href={item.link}
							data-tip={title}
							title={title}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter />
						</a>
					</>
				);
			case 'youtube':
				return (
					<>
						<a
							className={type}
							href={item.link}
							data-tip={title}
							title={title}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaYoutube />
						</a>
					</>
				);
			case 'github':
				return (
					<>
						<a
							className={type}
							href={item.link}
							data-tip={title}
							title={title}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
					</>
				);
			case 'instagram':
				return (
					<>
						<a
							className={type}
							href={item.link}
							data-tip={title}
							title={title}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram />
						</a>
					</>
				);
			case 'linkedin':
				return (
					<>
						<a
							className={type}
							href={item.link}
							data-tip={title}
							title={title}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
					</>
				);

			default:
				return null;
		}
	};

	return (
		<>
			<LinkItem />
		</>
	);
};

export default SocialLink;
