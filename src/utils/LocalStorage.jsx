const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "emp1pass",
    tasksCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare report",
        description: "Prepare monthly sales report",
        date: "2026-04-20",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client meeting",
        description: "Discuss requirements with client",
        date: "2026-04-22",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix bugs",
        description: "Resolve issues in dashboard",
        date: "2026-04-25",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Neha",
    email: "employee2@example.com",
    password: "emp2pass",
    tasksCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design homepage",
        description: "Create UI for homepage",
        date: "2026-04-18",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update logo",
        description: "Revise brand logo",
        date: "2026-04-19",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Wireframes",
        description: "Create app wireframes",
        date: "2026-04-21",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team sync",
        description: "Weekly sync meeting",
        date: "2026-04-23",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "emp3pass",
    tasksCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "API integration",
        description: "Integrate payment API",
        date: "2026-04-17",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review team code",
        date: "2026-04-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize DB",
        description: "Improve DB queries",
        date: "2026-04-22",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "emp4pass",
    tasksCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Test features",
        description: "Perform QA testing",
        date: "2026-04-20",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write test cases",
        description: "Document test scenarios",
        date: "2026-04-21",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug report",
        description: "Log bugs in system",
        date: "2026-04-23",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Regression testing",
        description: "Run regression suite",
        date: "2026-04-24",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "emp5pass",
    tasksCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Content writing",
        description: "Write blog posts",
        date: "2026-04-19",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO optimization",
        description: "Improve SEO ranking",
        date: "2026-04-20",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social media",
        description: "Post updates on socials",
        date: "2026-04-22",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Email campaign",
        description: "Launch email campaign",
        date: "2026-04-25",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
]
const admin = {
    "id": 100,
    "email": "ammar@gmail.com",
    "password": "ammar@1"
}

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}
export const getLocalStorage = () => {
    let employeeData = JSON.parse(localStorage.getItem('employees'))
    let adminData = JSON.parse(localStorage.getItem('admin'))
    return{employeeData, adminData}
}
