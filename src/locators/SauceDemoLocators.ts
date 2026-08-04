export const SauceDemoLocators = {
  LOGIN: {
    USERNAME_INPUT: "#user-name",
    PASSWORD_INPUT: "#password",
    LOGIN_BUTTON: "#login-button",
    ERROR_MESSAGE: "h3[data-test=\"error\"]"
  },
  PRODUCTS: {
    INVENTORY_CONTAINER: ".inventory_container",
    PAGE_TITLE: ".title",
    PRODUCT_ITEM: ".inventory_item",
    ADD_TO_CART_BUTTON_PREFIX: "button[data-test^=\"add-to-cart\"]",
    CART_BADGE: ".shopping_cart_badge"
  },
  HEADER: {
    MENU_BUTTON: "#react-burger-menu-btn",
    LOGOUT_LINK: "#logout_sidebar_link"
  }
};
