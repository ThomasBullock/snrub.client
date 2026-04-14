import { type Locator, type Page } from "@playwright/test";

export class DashboardSidebar {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly teamLink: Locator;
  readonly incidentsLink: Locator;
  readonly designLink: Locator;
  readonly reportingLink: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByTestId("nav.sidebar.home-link");
    this.teamLink = page.getByTestId("nav.sidebar.employees-link");
    this.incidentsLink = page.getByTestId("nav.sidebar.incidents-link");
    this.designLink = page.getByTestId("nav.sidebar.design-link");
    this.reportingLink = page.getByTestId("nav.sidebar.reporting-link");
    this.logoutButton = page.getByTestId("nav.sidebar.logout-btn");
  }

  async navigateTo(link: Locator) {
    await link.click();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
