// Helpers

function process(string) {
  const div = document.createElement('div');
  div.innerHTML = string.trim();
  return format(div, 0).innerHTML;
}

function format(node, level) {
  let indentBefore = new Array(level++ + 1).join('  '),
    indentAfter = new Array(level - 1).join('  '),
    textNode;
  for (let i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode('\n' + indentBefore);
    node.insertBefore(textNode, node.children[i]);
    format(node.children[i], level);
    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode('\n' + indentAfter);
      node.appendChild(textNode);
    }
  }
  return node;
}

// Directive

const directive = {
  inserted: function(el) {
    const div = document.createElement('div');
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.appendChild(document.createTextNode(process(el.outerHTML).trim()));
    pre.appendChild(code);
    div.appendChild(pre);
    div.classList.add('vue-sauce');
    el.parentNode.insertBefore(div, el.nextSibling);
  }
};

export default directive;
