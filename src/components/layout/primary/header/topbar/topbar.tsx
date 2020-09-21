/** @jsx jsx */
import { useRef, useState, useEffect, Fragment, useContext } from "react";
import { Grid, Box, Flex, Heading, Button, jsx, Text } from "theme-ui";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";
import Logo from "../../../../logo/logo";
import Container from "../../../../container/container";
import Search from "../../../../search";
import MainMenu from "../navbar/main-menu";
import Footer from "../../footer/footer";
import useOnClickOutside from "../../../../../hooks/useOutsideClick";
import useWindowSize from "../../../../../hooks/useWindowSize";
import { AiOutlineShopping } from "react-icons/ai";
import { LocalCartContext } from "../../../../../provider/local-cart-provider";
import DrawerCart from "../../../../drawer-cart/drawer-cart";
import Sidebar from "../../../secondary/sidebar/sidebar";
import styles from "./topbar.style";

const Topbar: React.FC<{ fluid?: boolean; homeLink?: string }> = ({
  fluid,
  homeLink,
}) => {
  const windowSize = useWindowSize();
  const [visible, setVisible] = useState(false);
  const [sidebarVisibile, setSidebarVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const mobileSearchRef = useRef(null!);
  const { products } = useContext(LocalCartContext);
  useOnClickOutside(mobileSearchRef, () => setMobileSearch(false));
  useEffect(() => {
    if (windowSize && windowSize > 1080) {
      setVisible(false);
    }
  }, [windowSize]);

  return (
    <Fragment>
      <Box sx={styles.topbar}>
        <Container fluid={fluid}>
          {mobileSearch ? (
            <Box ref={mobileSearchRef}>
              <Search />
            </Box>
          ) : (
            <Grid className="grid" sx={styles.grid}>
              <Flex className="logo-area">
                <Button
                  variant="text"
                  sx={styles.hamburgBtn}
                  onClick={() => setVisible(true)}
                  ariaLabel="Hamburg menu"
                >
                  <IoIosMenu />
                </Button>

                <Logo path={homeLink} />
              </Flex>

              <Box className="topbar-search">
                <Button
                  variant="text"
                  sx={styles.searchBtn}
                  onClick={() => setMobileSearch(true)}
                  ariaLabel="Search"
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

                <Search />
              </Box>

              <Box className="topbar-links" sx={styles.rightPart}>
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
            </Grid>
          )}
        </Container>

        <Drawer
          level={null}
          width="100%"
          open={visible}
          handler={false}
          placement="left"
          onClose={() => setVisible(false)}
        >
          <Flex sx={styles.drawerTitle}>
            <Heading as="h2">Categories</Heading>
            <Button
              variant="text"
              onClick={() => setVisible(false)}
              ariaLabel="Close menu"
            >
              <IoIosClose />
            </Button>
          </Flex>
          <MainMenu onClick={() => setVisible(false)} />
          <Footer />
        </Drawer>
      </Box>
    </Fragment>
  );
};

export default Topbar;
