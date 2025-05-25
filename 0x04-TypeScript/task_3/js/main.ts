/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert a new row
const newRowId: RowID = CRUD.insertRow(row);

// Update the row
const updatedRow: RowElement = CRUD.updateRow(newRowId, { ...row, age: 23 });

// delete the row id = 125
CRUD.deleteRow(125);
