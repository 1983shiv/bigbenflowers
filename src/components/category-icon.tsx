import React from 'react';
import {
	HoneyIcon,
	FishIcon,
	PastryIcon,
	CoffeeCup,
	DairyIcon,
	VegetablesIcon,
} from './icons';

type Props = {
	name: string;
};

const CategoryIcon: React.FC<Props> = ({ name }) => {
	let icon;
	switch (name) {
		case 'vegetables':
			icon = <VegetablesIcon />;
			break;
		case 'organic':
			icon = <HoneyIcon />;
			break;
		case 'snacks--beverages':
			icon = <CoffeeCup />;
			break;
		case 'fish--meat':
			icon = <FishIcon />;
			break;
		case 'dairy':
			icon = <DairyIcon />;
			break;
		case 'bakery--pastry':
			icon = <PastryIcon />;
			break;
		default:
			icon = null;
			break;
	}
	return <>{icon}</>;
};

export default CategoryIcon;
