interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};
const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

const body: HTMLTableSectionElement = document.createElement("tbody");

const header: HTMLTableSectionElement = document.createElement("thead");

const headerRow: HTMLTableRowElement = document.createElement("tr");

const firstNameHeader: HTMLTableCellElement = document.createElement("th");

const locationHeader: HTMLTableCellElement = document.createElement("th");

firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

header.appendChild(headerRow);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  body.appendChild(row);
});

table.appendChild(header);
table.appendChild(body);

document.body.appendChild(table);
