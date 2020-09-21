/** @jsx jsx */
import { useContext } from 'react';
import { Box, Flex, Heading, Text, Button, jsx } from 'theme-ui';
import { IoIosClose } from 'react-icons/io';
import { CartContext } from '../../provider/cart-provider';
import styles from './cart.style';
import { LocalCartContext } from '../../provider/local-cart-provider';

const Cart: React.FunctionComponent<{ onClick?: () => void }> = ({
	onClick,
	children,
}: any) => {
	const { products, totalPrice, currency, clearCart } = useContext(
		LocalCartContext
	);
	const { store, addToCartAndCheckout } = useContext(CartContext);
	const { checkout, updating } = store;
	const handleCheckout = () => {
		addToCartAndCheckout();
		clearCart();
		onClick();
	};
	const getPrice = (price: any) =>
		Intl.NumberFormat(undefined, {
			currency: currency,
			minimumFractionDigits: 2,
			style: 'currency',
		}).format(parseFloat(price ? price : 0));

	return (
		<Box sx={styles.wrapper}>
			<Heading as="h2" sx={styles.title}>
				Cart
				<Button title="Close" variant="text" onClick={onClick}>
					<IoIosClose />
				</Button>
			</Heading>

			<Flex sx={styles.totalPrice}>
				<Box>
					<Text>Total Amount:</Text>
					<Heading as="h4">{getPrice(totalPrice)}</Heading>
				</Box>
			</Flex>

			<Box sx={styles.cartItems}>{children}</Box>

			<Box sx={styles.buttonStyle}>
				{products.length === 0 ? (
					<Button onClick={onClick}>
						<svg width="15.394" height="10" viewBox="0 0 15.394 10">
							<path
								id="arrow-left"
								d="M8.3,6.343,9.551,7.6,6.66,10.473l12.025.012,0,1.768L6.691,12.241,9.533,15.1,8.28,16.343,3.292,11.332Z"
								transform="translate(-3.292 -6.343)"
								fill="#fff"
							/>
						</svg>
						Back to shop
					</Button>
				) : (
					<Button onClick={handleCheckout}>
						{updating ? 'Loading ...' : 'Proceed to checkout'}
					</Button>
				)}
			</Box>
		</Box>
	);
};

export default Cart;
