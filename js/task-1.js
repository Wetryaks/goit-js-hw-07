const element = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${element.length}`);
element.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
