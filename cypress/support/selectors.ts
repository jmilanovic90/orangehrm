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
    logoutLink: 'a:contains("Logout")',
    dashboardWidget: '.orangehrm-dashboard-widget'
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
  myInfo: {
    description: 'textarea[placeholder="Type comment here"]',
    downloadButton: '.oxd-icon.bi-download',
    deleteButton: '.oxd-icon.bi-trash',
    confirmDeleteButton: 'button.oxd-button--label-danger'
  },
  recruitment: {
    jobTitleDropdown: '.oxd-grid-item:nth-child(1) .oxd-select-text',
    vacancyDropdown: '.oxd-grid-item:nth-child(2) .oxd-select-text',
    hiringManagerDropdown: '.oxd-grid-item:nth-child(3) .oxd-select-text',
    statusDropdown: '.oxd-grid-item:nth-child(4) .oxd-select-text',
    dropdownOption: '.oxd-select-option',
    searchButton: 'button[type="submit"]',
    resultRows: '.oxd-table-card',
    resetButton: 'button[type="button"].oxd-button--ghost'
  },
  common: {
    input: '.oxd-input-group',
    tableRow: '.oxd-table-row',
    fileInput: 'input[type="file"]'
  }
} as const;
