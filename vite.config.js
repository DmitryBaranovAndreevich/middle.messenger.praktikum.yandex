import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import { readdirSync } from "fs";

const allTemplateDirectories = [];

const getDirectories = (source, result) => {
  const dir = readdirSync(source, { withFileTypes: true }).filter(
    (dirent) => dirent.isDirectory()
  );

  dir.forEach((d) => {
    result.push(resolve(__dirname, source, d.name));
    getDirectories(`${source}/${d.name}`, result);
  });
};

getDirectories(resolve(__dirname, "src/partials"), allTemplateDirectories)

export default {
  plugins: [
    handlebars({
      partialDirectory: allTemplateDirectories,
    }),
  ],
};
