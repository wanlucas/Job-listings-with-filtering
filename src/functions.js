const $ = (id) => document.getElementById(id);

const newElement = (elementName, classList, id) => {
  const element = document.createElement(elementName);

  if (classList) element.className = classList;
  if (id) element.id = id;

  return element;
};

export {$, newElement};
