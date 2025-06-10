import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Sii",
    positions: [
      {
        title: "Python Developer",
        year: "10.2022 - 03.2025",
        description: `
- ➲ Led daily stand-ups and client meetings to align on requirements.
- ➲ Designed and developed Python / (TypeScript with Electron) for Redfish API integration.
- ➲ Architected a scalable, reliable orchestrator system for multi-platform management.
- ➲ Refactored the application by isolating core functionalities into a modular library
(internal PyPi).
- ➲ Managed end-to-end development of the core library from design to deployment.
- ➲ Translated technical requirements into pseudo-code and production-ready solutions.
- ➲ Adopted Domain-Driven Design (DDD) to enhance extensibility and maintainability.
- ➲ Transformed a CLI application into a user-friendly web interface.
- ➲ Implemented best coding practices for simplicity, functionality, and extensibility.
- ➲ Oversaw deployment and updates across multiple server environments.
- ➲ Created clear graphical presentations of technical solutions for stakeholders.
            `,
        skills: [
          "Python",
          "Pytest",
          "TypeScript",
          "React",
          "Electron",
        ]
      },
      {
        title: "TEST & ANALYSIS ENGINEER",
        year: "01.2017 - 10.2022",
        description: `
- ➲ Plan and execute automated tests.
- ➲ Maintenance and configuration of the operating system.
- ➲ Design and document comprehensive testing scenarios.
- ➲ Implement new functionality using C#.
- ➲ Conduct thorough code and defect reviews.
- ➲ Report and track progress via HSDS and JIRA.
- ➲ Identify, document, and monitor software defects.
- ➲ Provide accurate task estimates.
- ➲ Ensure high standards of test quality assurance.
- ➲ Collaborate closely with the development team.
            `,
        skills: [
          "C#",
          "JIRA",
          "Github",
          "HSDS",
        ],
      },
    ],
  },
];
