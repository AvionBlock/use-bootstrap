import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      name: "runtime",
      input: "src/runtime",
      outDir: "dist/runtime",
      builder: "mkdist",
      declaration: false,
      pattern: [
        "**",
        "!**/*.stories.{js,cts,mts,ts,jsx,tsx}",
        "!**/*.{spec,test}.{js,cts,mts,ts,jsx,tsx}",
      ],
    },
  ],
  declaration: false,
});
