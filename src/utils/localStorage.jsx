const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "user@gmail.com",
    password: "12",
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create a modern homepage UI for the project.",
        taskDate: "2025-03-15",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsive issues in the navbar.",
        taskDate: "2025-03-18",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Color Scheme",
        taskDescription: "Revise the color scheme for better contrast.",
        taskDate: "2025-03-20",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: { active: 2, failed: 0, completed: 1, newTask: 1 }
  },
  {
    id: 2,
    firstName: "Rajesh",
    email: "user2@gmail.com",
    password: "12",
    tasks: [
      {
        taskTitle: "Database Optimization",
        taskDescription: "Improve query efficiency in the database.",
        taskDate: "2025-03-17",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create API Documentation",
        taskDescription: "Write detailed API docs for developers.",
        taskDate: "2025-03-22",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Implement JWT Authentication",
        taskDescription: "Add JWT-based auth for the app.",
        taskDate: "2025-03-25",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: { active: 2, failed: 1, completed: 1, newTask: 1 }
  },
  {
    id: 3,
    firstName: "Suresh",
    email: "user3@gmail.com",
    password: "12",
    tasks: [
      {
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription: "Automate deployment using GitHub Actions.",
        taskDate: "2025-03-19",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Login Issue",
        taskDescription: "Resolve bug causing failed login attempts.",
        taskDate: "2025-03-23",
        category: "Bug Fixing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: { active: 2, failed: 0, completed: 0, newTask: 1 }
  },
  {
    id: 4,
    firstName: "Pooja",
    email: "pooja@gmail.com",
    password: "12",
    tasks: [
      {
        taskTitle: "Write Test Cases",
        taskDescription: "Create unit and integration test cases.",
        taskDate: "2025-03-25",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: { active: 1, failed: 0, completed: 0, newTask: 1 }
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "vikram@gmail.com",
    password: "12",
    tasks: [
      {
        taskTitle: "Implement Redux Store",
        taskDescription: "Integrate Redux for global state management.",
        taskDate: "2025-03-20",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: { active: 1, failed: 0, completed: 0, newTask: 0 }
  },
  {
    id: 6,
    firstName: "Neha",
    email: "neha@gmail.com",
    password: "12",
    tasks: [
      {
        taskTitle: "Migrate Database",
        taskDescription: "Shift database from MySQL to PostgreSQL.",
        taskDate: "2025-03-22",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create Data Models",
        taskDescription: "Define database schemas and relationships.",
        taskDate: "2025-03-24",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: { active: 1, failed: 0, completed: 1, newTask: 1 }
  },
  {
    id: 7,
    firstName: "Rohit",
    email: "rohit@gmail.com",
    password: "12",
    tasks: [
      {
        taskTitle: "Deploy Application",
        taskDescription: "Host application on AWS EC2.",
        taskDate: "2025-03-30",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: { active: 0, failed: 0, completed: 1, newTask: 0 }
  }
];

const admin = [
  {
    id: 1,
    firstName: "Anil",
    email: "admin@example.com",
    password: "12"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
