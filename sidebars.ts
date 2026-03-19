import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  mainSidebar: [
    "getting-started",
    "language-tour",
    "examples",
    "releases",
    "roadmap",
    {
      type: "category",
      label: "Standard Library",
      collapsed: true,
      items: [
        "core",
        "error",
        "io",
        "sys",
        "fs",
        "math",
        "string",
        "array",
        "tuple",
        "set",
        "tables",
        "vectors",
        "matrix",
        "complex",
        "buffer",
        "range",
        "random",
        "time",
      ],
    },
  ],
};

export default sidebars;
