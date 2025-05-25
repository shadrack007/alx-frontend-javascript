# task_1

This project covers TypeScript features such as interfaces, classes, optional properties, and index signatures.

Key features:

- Defines a `Teacher` interface with:
  - `firstName` and `lastName` (readonly on initialization),
  - `fullTimeEmployee` (required boolean),
  - optional `yearsOfExperience` (number),
  - required `location` (string),
  - and allows additional arbitrary properties via an index signature.
- Defines a `Directors` interface that extends `Teacher` by adding a required `numberOfReports` property.
- Implements a `printTeacher` function returning a formatted string combining the first initial and full last name.
- Defines interfaces for the `printTeacher` function signature.
- Implements a `StudentClass` class with constructor properties for first and last names, and methods `workOnHomework` and `displayName`.
- Uses interfaces to describe the class constructor and instance structure.

Configuration files included:

- `package.json`
- `tsconfig.json`
- `webpack.config.js`
