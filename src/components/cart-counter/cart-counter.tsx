/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import styles from "./cart-counter.style";

type PropsType = {
  hasItems?: any;
  quantity?: any;
  onClick?: () => void;
};

const CartCounter: React.FC<PropsType> = ({ onClick, hasItems, quantity }) => {
  return (
    <Box sx={styles.wrapper}>
      <button onClick={onClick} title="Go to cart">
        {hasItems && quantity && (
          <Box as="span" sx={styles.counter}>
            {quantity}
          </Box>
        )}
        <svg width="13.904" height="16" viewBox="0 0 13.904 16">
          <path
            d="M834.459,526.8a.674.674,0,0,1-.659-.727l1.188-11.3a.658.658,0,0,1,.657-.591h2.035v-.313a3.069,3.069,0,1,1,6.138,0v.313h2.034a.659.659,0,0,1,.657.592l1.186,11.3,0,0a.673.673,0,0,1-.656.725Zm11.848-1.319-1.048-9.979h-1.441v.828a.66.66,0,1,1-1.319,0V515.5H839v.828a.659.659,0,1,1-1.319,0V515.5H836.24l-1.053,9.979Zm-3.808-11.3v-.313a1.747,1.747,0,0,0-1.71-1.706l-.04-.2v.2a1.759,1.759,0,0,0-1.749,1.71v.309Z"
            transform="translate(-833.797 -510.8)"
          />
        </svg>
      </button>
    </Box>
  );
};

export default CartCounter;
