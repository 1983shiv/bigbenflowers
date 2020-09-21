import React, { useContext } from "react";
import { Flex, Box, Text, Button } from "theme-ui";
import { IoIosAdd, IoIosRemove, IoIosCloseCircle } from "react-icons/io";
import Img from "gatsby-image";
import styles from "./line-item.style";
import { LocalCartContext } from "../../../provider/local-cart-provider";

const LineItem = (props: any) => {
	const { item } = props;
	const lineItemQuantity = item ? item.quantity : 0;
	const { update } = useContext(LocalCartContext);
	const handleQuantityChange = (quantity: number) => {
		update(item.variantId, quantity);
	};
	const handleRemove = () => {
		update(item.variantId, 0);
	};
	const getPrice = (price: any) =>
		Intl.NumberFormat(undefined, {
			currency: item.currency,
			minimumFractionDigits: 2,
			style: "currency",
		}).format(parseFloat(price ? price : 0));

	return (
		<>
			{lineItemQuantity > 0 ? (
				<Flex sx={styles.wrapper}>
					<Box sx={styles.imageWrapper}>
						{item.thumbnail ? (
							<Img fluid={item.thumbnail} alt={item.title} />
						) : null}
						{/* {variantImage} */}
						<Button variant="text" title="Delete" onClick={handleRemove}>
							<IoIosCloseCircle />
						</Button>
					</Box>
					<Box sx={styles.contentWrapper}>
						<Box>
							<Text sx={styles.title}>{item.title}</Text>
							<Text sx={styles.unitPrice}>
								Unit Price {getPrice(item.price)}
							</Text>
						</Box>
						<Box sx={styles.counterWrapper}>
							<Box sx={styles.cartCounter}>
								<Button
									title="Decrement"
									onClick={() => handleQuantityChange(item.quantity - 1)}
								>
									<IoIosRemove />
								</Button>
								<Box>{item.quantity}</Box>
								<Button
									title="Increment"
									onClick={() => handleQuantityChange(item.quantity + 1)}
								>
									<IoIosAdd />
								</Button>
							</Box>
							<Text sx={styles.totalPrice}>
								{getPrice((item.price * item.quantity).toFixed(2))}
							</Text>
						</Box>
					</Box>
				</Flex>
			) : null}
		</>
	);
};

export default LineItem;
