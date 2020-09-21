/** @jsx jsx */
import { Link } from 'gatsby';
import { Box, jsx } from 'theme-ui';

type Props = {
	items: {
		title: string;
		path: string;
	}[];
};

const Menu: React.FC<Props> = ({ items }) => {
	return (
		<Box className="menu" as="ul">
			{items.map((item, index) => (
				<Box as="li" key={`${item.title}-${index}`}>
					<Link to={item.path}>{item.title}</Link>
				</Box>
			))}
		</Box>
	);
};

export default Menu;
