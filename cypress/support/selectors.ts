export const selectors = {
  login: {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    errorMessage: '.oxd-alert-content-text'
  },
  dashboard: {
    header: '.oxd-topbar-header-breadcrumb h6',
    userDropdown: '.oxd-userdropdown-tab',
    userDropdownMenu: '.oxd-dropdown-menu',
    logoutLink: 'a:contains("Logout")'
  },
  sideNav: {
    container: '.oxd-sidepanel',
    menuItem: '.oxd-main-menu-item',
    searchInput: 'input[placeholder="Search"]'
  }
} as const;
