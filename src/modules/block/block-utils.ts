import { Block } from "./block";
import { TProps } from "./block-types";

export function render<T extends Record<string, TProps>>(
  query: string,
  block: Block<T>
) {
  const root = document.querySelector(query);
  const node = block.getContent();

  if (node && root) {
    root.appendChild(node);
  }

  return root;
}