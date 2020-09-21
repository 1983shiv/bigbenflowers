/** @jsx jsx */
import { useContext, useRef, useState } from "react";
import { LocalCartContext } from "../../../../../provider/local-cart-provider";
import { Button, Box, jsx, Text } from "theme-ui";
import Logo from "../../../../logo/logo";
import Container from "../../../../container/container";
import Search from "../../../../search";
import useOnClickOutside from "../../../../../hooks/useOutsideClick";
import MainMenu from "./main-menu";
import styles from "./navbar.style";
import { AiOutlineShopping } from "react-icons/ai";
import DrawerCart from "../../../../drawer-cart/drawer-cart";
import Sidebar from "../../../secondary/sidebar/sidebar";
import Drawer from "rc-drawer";

const Navbar: React.FC<{
  fluid?: boolean;
  homeLink?: string;
  pathPrefix?: string;
}> = ({ fluid, homeLink, pathPrefix }) => {
  const [visible, setVisible] = useState(false);
  const [sidebarVisibile, setSidebarVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const searchRef = useRef(null!);
  const { products } = useContext(LocalCartContext);
  useOnClickOutside(searchRef, () => setVisible(false));

  return (
    <Box as="nav" sx={styles.navbar}>
      <Container fluid={fluid} className={visible ? "activeSearch" : ""}>
        <Logo path={homeLink} />
        <MainMenu pathPrefix={pathPrefix} />
        <Box className="rightPart" sx={styles.rightPart}>
          {visible ? (
            <Box sx={styles.search} ref={searchRef}>
              <Search />
            </Box>
          ) : (
            <Button
              title="Search"
              variant="text"
              sx={{ svg: { width: 23 } }}
              onClick={() => setVisible(true)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  d="M16.122,12.452a6.772,6.772,0,1,0-1.195,1.2l.036.038,3.592,3.592a.847.847,0,0,0,1.2-1.2L16.16,12.488ZM14.364,4.706a5.079,5.079,0,1,1-7.183,0A5.079,5.079,0,0,1,14.364,4.706Z"
                  transform="translate(-4 -1.525)"
                  fill="#292929"
                  fillRule="evenodd"
                />
              </svg>
            </Button>
          )}
          <Button
            variant="text"
            ariaLabel="Cart"
            onClick={() => setCartVisible(true)}
          >
            <AiOutlineShopping />
            <Text sx={styles.badge}>{products.length}</Text>
          </Button>
        </Box>
        <Drawer
          level={null}
          width="100%"
          open={sidebarVisibile}
          handler={false}
          placement="left"
          onClose={() => setSidebarVisible(false)}
        >
          <Sidebar onClose={() => setSidebarVisible(false)} />
        </Drawer>
        <DrawerCart
          open={cartVisible}
          onClick={() => setCartVisible(false)}
          onClose={() => setCartVisible(false)}
          products={products}
        />
      </Container>
    </Box>
  );
};

export default Navbar;
