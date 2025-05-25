# task_2

This project demonstrates TypeScript features including interfaces, classes, type predicates, and string literal types with a focus on employee management.

Key features:

- Defines two interfaces `DirectorInterface` and `TeacherInterface`, each with methods for working from home, coffee breaks, and task execution.
- Implements `Director` and `Teacher` classes conforming to their respective interfaces, with distinct method behaviors.
- A `createEmployee` function that returns either a `Director` or `Teacher` instance based on salary input (number or string).
- A type predicate function `isDirector` to distinguish Director instances at runtime.
- An `executeWork` function that calls the appropriate task method depending on employee type.
- Defines a string literal type `Subjects` restricted to `"Math"` or `"History"`.
- A `teachClass` function that returns specific teaching strings based on the subject.

The setup includes configuration files for building the project with TypeScript and webpack.
