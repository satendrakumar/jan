/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually
  featuresSidebar: [
    "platform/platform",
    {
      type: "category",
      label: "Products",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "products/products" },
      items: ["products/desktop", "products/mobile", "products/server"],
    },
    {
      type: "category",
      label: "Features",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "features/features" },
      items: [
        "features/ai-models",
        "features/control",
        "features/acceleration",
        "features/extensions",
      ],
    },
  ],

  // Note: Tab name is "Use Cases"
  solutionsSidebar: [
    "solutions/solutions",
    {
      type: "category",
      label: "Use cases",
      collapsible: true,
      collapsed: false,
      items: ["solutions/personal-ai", "solutions/self-hosted"],
    },
    {
      type: "category",
      label: "Industries",
      collapsible: true,
      collapsed: false,
      items: [
        "solutions/industries/software",
        "solutions/industries/education",
        "solutions/industries/law",
        "solutions/industries/public-sector",
        "solutions/industries/finance",
        "solutions/industries/healthcare",
      ],
    },
  ],

  docsSidebar: [
    { type: "doc", label: "Getting Started", id: "docs/docs" },
    {
      type: "category",
      label: "Install",
      collapsible: true,
      collapsed: false,
      items: [
        { type: "doc", label: "Windows", id: "docs/install/windows" },
        { type: "doc", label: "Mac", id: "docs/install/mac" },
        { type: "doc", label: "Linux", id: "docs/install/linux" },
      ],
    },
  ],

  hardwareSidebar: [
    {
      type: "category",
      label: "Overview",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "hardware/hardware" },
      items: [
        {
          type: "doc",
          label: "Cloud vs. Buy",
          id: "hardware/overview/cloud-vs-buy",
        },
        {
          type: "doc",
          label: "CPUs vs. GPUs",
          id: "hardware/overview/cpu-vs-gpu",
        },
      ],
    },
    {
      type: "category",
      label: "Recommendations",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "By Hardware",
          id: "hardware/recommendations/by-hardware",
        },
        {
          type: "doc",
          label: "By Budget",
          id: "hardware/recommendations/by-budget",
        },
        {
          type: "doc",
          label: "By Model",
          id: "hardware/recommendations/by-model",
        },
        {
          type: "doc",
          label: "By Use Case",
          id: "hardware/recommendations/by-usecase",
        },
      ],
    },
    {
      type: "category",
      label: "Anatomy of a Thinking Machine",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "hardware/concepts/concepts" },
      items: [
        {
          type: "doc",
          label: "Chassis",
          id: "hardware/concepts/chassis",
        },
        {
          type: "doc",
          label: "Motherboard",
          id: "hardware/concepts/motherboard",
        },
        {
          type: "doc",
          label: "CPU and RAM",
          id: "hardware/concepts/cpu-and-ram",
        },
        {
          type: "doc",
          label: "GPU and VRAM",
          id: "hardware/concepts/gpu-and-vram",
        },
        {
          type: "doc",
          label: "Storage",
          id: "hardware/concepts/storage",
        },
        {
          type: "doc",
          label: "Network",
          id: "hardware/concepts/network",
        },

        {
          type: "doc",
          label: "Power Supply",
          id: "hardware/concepts/power",
        },
      ],
    },
    {
      type: "category",
      label: "Community Examples",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "hardware/community" },
      items: [
        {
          type: "autogenerated",
          dirName: "hardware/examples",
        },
      ],
    },
  ],
  companySidebar: [
    {
      type: "category",
      label: "About Jan",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "about/about" },
      items: [
        "about/roadmap",
        {
          type: "link",
          label: "Careers",
          href: "https://janai.bamboohr.com/careers",
        },
        "about/brand-assets",
      ],
    },
    {
      type: "category",
      label: "Company Handbook",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "handbook/handbook" },
      items: ["handbook/remote-work"],
    },
  ],
};

module.exports = sidebars;
