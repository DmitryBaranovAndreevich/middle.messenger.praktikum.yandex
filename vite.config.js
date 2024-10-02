import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "src/partials/components"),
        resolve(__dirname, "src/partials/pages"),
        resolve(__dirname, "src/partials/layouts"),
      ],
    }),
  ],
};
