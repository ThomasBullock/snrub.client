import { type Locator, type Page } from "@playwright/test";
import { DashboardSidebar } from "../components/DashboardSidebar.js";

export class EmployeesPage {
  readonly page: Page;
  readonly sidebar: DashboardSidebar;
  readonly heading: Locator;
  readonly addEmployeeButton: Locator;
  readonly employeesTable: Locator;
  readonly deleteConfirmDialog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebar = new DashboardSidebar(page);
    this.heading = page.getByRole("heading", { name: "Employees", level: 1 });
    this.addEmployeeButton = page.getByTestId("add-employee-btn");
    this.employeesTable = page.getByTestId("employees-table");
    this.deleteConfirmDialog = page.getByRole("dialog");
  }

  async goto() {
    await this.page.goto("/dashboard/employees");
  }

  getDeleteButton(rowIndex: number) {
    return this.employeesTable.getByTestId("delete-employee-btn").nth(rowIndex);
  }

  getViewButton(rowIndex: number) {
    return this.employeesTable.getByTestId("view-employee-btn").nth(rowIndex);
  }
}
