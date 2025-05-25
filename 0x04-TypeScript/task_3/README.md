# task_3

This project sets up a TypeScript environment to work with a simple CRUD library and demonstrates strong typing with interfaces and types.

Main features include:

- Defining a `RowID` type and a `RowElement` interface with optional and required fields in `interface.ts`.
- Using a third-party `crud.js` library to perform insert, update, and delete operations on rows.
- Creating an ambient declaration file `crud.d.ts` for type declarations of the CRUD functions, importing types from `interface.ts`.
- A `main.ts` file that:
  - Uses triple-slash directives to include type declarations,
  - Imports types and CRUD functions,
  - Creates and updates row objects typed with `RowElement`,
  - Calls CRUD functions with proper TypeScript type safety.
- All configurations are set up with `package.json`, `tsconfig.json`, and `webpack.config.js` for a smooth build process with no TypeScript errors.
