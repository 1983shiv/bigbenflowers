/** @jsx jsx */
import { useRef, useEffect } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { Box, Text, jsx } from "theme-ui";
import { IoIosArrowDown } from "react-icons/io";
import useWindowSize from "../../../../../hooks/useWindowSize";
import styles from "./navbar.style";

const menuStaticQuery = graphql`
  query {
    prismic {
      firstData: allCategorys {
        totalCount
        edges {
          cursor
          node {
            _meta {
              uid
            }
            title
            parent_category {
              ... on PRISMIC_Category {
                title
                _meta {
                  uid
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
      lastData: allCategorys(after: "YXJyYXljb25uZWN0aW9uOjE5") {
        totalCount
        edges {
          cursor
          node {
            _meta {
              uid
            }
            title
            parent_category {
              ... on PRISMIC_Category {
                title
                _meta {
                  uid
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

const getMenuData = (categories) => {
  const data = [];
  //fill up first parent
  categories.forEach((category) => {
    if (!category?.node?.parent_category) {
      const uid = category?.node?._meta.uid;
      const text = category?.node?.title[0]?.text;
      if (uid && text) {
        data.push({ path: uid, title: text });
      }
    }
  });
  //fill up child
  categories.forEach((category) => {
    if (category?.node?.parent_category) {
      const parent = category?.node?.parent_category?._meta?.uid;
      const uid = category?.node?._meta.uid;
      const text = category?.node?.title[0]?.text;
      const index = data.findIndex((item) => item.path === parent);
      if (index > -1) {
        if (data[index].submenu && data[index].submenu.length) {
          data[index].submenu.push({ path: uid, title: text });
        } else {
          data[index].submenu = [];
          data[index].submenu.push({ path: uid, title: text });
        }
      }
    }
  });
  return data;
};

const MainMenu: React.FC<{ onClick?: () => void; pathPrefix?: string }> = ({
  onClick,
  pathPrefix = "/collection",
}) => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${menuStaticQuery}`}
    render={(data) => {
      const { firstData, lastData } = data.prismic;
      const categories = [...firstData.edges, ...lastData.edges];
      const menuData = getMenuData(categories);
      const mainMenu = useRef(null);
      const windowSize = useWindowSize();
      useEffect(() => {
        if (windowSize && windowSize < 1081) {
          const menu = mainMenu.current.children;
          for (let index = 0; index < menu.length; index++) {
            const element = menu[index];
            element.addEventListener("click", function () {
              element.classList.toggle("active");
            });
          }
        }
      }, [windowSize]);

      // className={`dropdown-items-${item?.submenu.length}`}
      return (
        <Box className="mainMenu" as="ul" ref={mainMenu} sx={styles.mainMenu}>
          {menuData &&
            menuData.map((item) => (
              <Box
                as="li"
                className={`dropdown-items`}
                key={item.title}
                sx={styles.mainMenuItem}
              >
                {item?.submenu ? (
                  <Text as="span">{item.title}</Text>
                ) : (
                  <Link
                    activeClassName="active"
                    // to={item.path}
                    to={`${pathPrefix}/${item.path}`}
                    onClick={onClick}
                  >
                    {item.title}
                  </Link>
                )}

                {item?.submenu && <IoIosArrowDown />}

                {/* if menu has submenu */}
                {item?.submenu && (
                  <Box as="ul" sx={styles.submenu}>
                    {item?.submenu.map((subItem) => (
                      <Box as="li" key={`${item.title}-${subItem.title}`}>
                        <Link
                          activeClassName="active"
                          to={`${pathPrefix}/${subItem.path}`}
                          onClick={onClick}
                        >
                          {subItem.title}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
        </Box>
      );
    }}
  />
);

export default MainMenu;
