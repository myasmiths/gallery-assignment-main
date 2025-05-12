// Fun Fact Game Script
const facts = [
    "The oak tree was designated as the state tree of Iowa in 1961!"
    "The Green Sugarbush near Decorah, a maple syrup operation, has been in operation for over 150 years, making it one of the oldest continuous businesses in Iowa."
    "Iowa has a "big tree" list, and many of the state's champion trees are located on college campuses like Iowa State!"
    "Iowa has around 3 million acres of forest, though it ranks low among states in terms of forest cover due to extensive agriculture."
    "Iowa is one of the most developed states in the country, hence the lack of wooded areas"
    "Tree rings can provide valuable insights into past climates and help scientists understand climate change."
];
const factElement = document.getElementById('fact');
const button = document.getElementById('show-fact');

button.addEventListener('click', () => {
  // Generate a random index to pick a fact
  const randomIndex = Math.floor(Math.random() * facts.length);
  factElement.textContent = facts[randomIndex];
});
