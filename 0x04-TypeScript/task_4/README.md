# task_4

This project demonstrates the use of TypeScript namespaces and declaration merging to manage subjects and teachers.

Key features include:

- A `Teacher` interface defined inside the `Subjects` namespace with `firstName` and `lastName`.
- A `Subject` class in the same namespace holding a `teacher` property and a setter method to assign it.
- Declaration merging to extend the `Teacher` interface with optional teaching experience properties for `Cpp`, `React`, and `Java`.
- Classes `Cpp`, `React`, and `Java` extending `Subject`, each with:
  - A `getRequirements` method returning subject-specific requirements.
  - A `getAvailableTeacher` method that returns the teacher's first name if they have relevant experience or a message indicating no available teacher.
