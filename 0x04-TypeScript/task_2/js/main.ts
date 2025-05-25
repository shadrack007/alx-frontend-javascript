/**
 * 5: ADVANCED TYPES PART 1
 */

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Director class implements DirectorInterface
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/**
//  Teacher class implements TeacherInterface
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

/**
 *
 * @param salary
 * @returns
 */
const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

console.log(createEmployee(200));

/**
 * 6: CREATING FUNCTIONS SPECIFIC TO EMPLOYEES
 */
/**
 *
 * @param employee
 * @returns
 */
const isDirector = (employee: Director | Teacher): employee is Director => {
  return (employee as Director).workDirectorTasks !== undefined;
};

/**
 *
 * @param employee
 */
const executeWork = (employee: Director | Teacher) => {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
};

/**
 * 7: STRING LITERAL TYPE
 */
type Subjects = "Math" | "History";

/**
 *
 * @param todayClass
 * @returns
 */
const teachClass = (todayClass: Subjects): string => {
  switch (todayClass) {
    case "Math":
      return "Teaching Math";
    case "History":
      return "Teaching History";
  }
};
