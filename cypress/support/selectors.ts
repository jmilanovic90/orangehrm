export const selectors = {
  login: {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    errorMessage: '.oxd-alert-content-text',
    requiredField: '.oxd-input-field-error-message'
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
  },
  userManagement: {
    userRoleDropdown: '.oxd-select-text',
    dropdown: '.oxd-select-dropdown',
    dropdownOption: '.oxd-select-option',
    editUserButton: '.oxd-icon.bi-pencil-fill',
    deleteUserButton: '.oxd-icon.bi-trash',
    confirmDeleteButton: 'button.oxd-button--label-danger',
    dropdownAutoComplete: '.oxd-autocomplete-dropdown'
  },
  common: {
    input: '.oxd-input-group',
    tableRow: '.oxd-table-row'
  }
} as const;
