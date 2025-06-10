import {
  Docker,
  Git,
  NextJs,
  Python,
  React,
  ReactQuery,
  Redis,
  Redux,
  TailwindCSS,
  TypeScript,
  Astro,
  FastAPI,
  OpenAI,
  HuggingFace,
} from "developer-icons";

import Ollama from "@/components/ui/icons/ollama.astro";
import Langchain from "@/components/ui/icons/langchain.astro";
import Langgraph from "@/components/ui/icons/langgraph.astro";

export const TECH_STACK = [
  // Programming Languages
  {
    title: "Python",
    href: "https://www.python.org/",
    icon: Python,
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: TypeScript,
  },

  // AI Stack
  {
    title: "Langchain",
    href: "https://www.langchain.com/",
    icon: Langchain,
  },
  {
    title: "Langgraph",
    href: "https://www.langchain.com/langgraph",
    icon: Langgraph,
  },
  {
    title: "Ollama",
    href: "https://ollama.com/",
    icon: Ollama,
  },
  {
    title: "OpenAI",
    href: "https://openai.com/",
    icon: OpenAI,
  },
  {
    title: "HuggingFace",
    href: "https://huggingface.co/",
    icon: HuggingFace,
  },


  // Frontend Technologies
  {
    title: "React",
    href: "https://react.dev/",
    icon: React,
  },
  {
    title: "Next.js",
    href: "https://nextjs.org/",
    icon: NextJs,
  },
  {
    title: "Astro.js",
    href: "https://astro.build/",
    icon: Astro,
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: TailwindCSS,
  },
  {
    title: "Redux",
    href: "https://redux.js.org/",
    icon: Redux,
  },
  {
    title: "React Query",
    href: "https://tanstack.com/query/latest",
    icon: ReactQuery,
  },


  // Backend Technologies
  {
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    icon: FastAPI
  },

  // Databases & Caching
  {
    title: "Redis",
    href: "https://redis.io/",
    icon: Redis,
  },

  // DevOps & Development Tools
  {
    title: "Docker",
    href: "https://www.docker.com/",
    icon: Docker,
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    icon: Git,
  },

  // Miscellaneous
];

