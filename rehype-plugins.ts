import {visit} from 'unist-util-visit'

/** @type {import('unified').Plugin<[], import('hast').Root>} */
export function headingIncrement() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (['h1', 'h2', 'h3', 'h4', 'h5'].includes(node.tagName)) {
        console.log(node)
        node.tagName = 'h' + (Number(node.tagName.charAt(1)) + 1)
      }
    })
  }
}