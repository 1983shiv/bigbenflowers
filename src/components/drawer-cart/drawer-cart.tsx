/** @jsx jsx */
import React from 'react';
import { Box, Text, Image, jsx } from 'theme-ui';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import Cart from '../cart/cart';
import LineItem from '../cart/line-item/line-item';
import styles from './drawer-cart.style';
// img
import emptyCartSVG from '../../images/empty-cart.svg';

type Props = {
	open: boolean;
	onClick: () => void;
	onClose: () => void;
	placement?: 'bottom' | 'left' | 'right' | 'top' | undefined;
	products: any;
};

const DrawerCart: React.FC<Props> = ({
	open,
	onClick,
	onClose,
	placement = 'right',
	products,
}) => {
	return (
		<Drawer
			level={null}
			width="100%"
			open={open}
			handler={false}
			placement={placement}
			onClose={onClose}
		>
			<Cart onClick={onClick}>
				<Box>
					{products.length > 0 ? (
						products.map((item) => (
							<LineItem key={`product-cart-${item.variantId}`} item={item} />
						))
					) : (
						<Box sx={styles.notFound}>
							<Image src={emptyCartSVG} alt="empty cart" />
							<Text as="h3">Your cart is empty!</Text>
							<Text as="p">Looks like you haven't made your menu yet.</Text>
						</Box>
					)}
				</Box>
			</Cart>
		</Drawer>
	);
};

export default DrawerCart;
