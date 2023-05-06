const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seededFruits = document.querySelectorAll(".seed");
  console.log(seededFruits);
  // 2. Get all seedless fruit elements
  // Your code here
  const seedlessFruits = document.querySelectorAll(".seedless");
  console.log(seedlessFruits);
  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedLessFruit = document.querySelector(".seedless");
  console.log(firstSeedLessFruit);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const innerSpan = document.querySelector("span");
  console.log(innerSpan);
  // 5. Get all children of element "wrapper"
  // Your code here
  const childrenOfWrapper = document.querySelector("#wrapper").childNodes;
  console.log(childrenOfWrapper);
  // 6. Get all odd number list items in the list
  // Your code here
  const oddNumberList = document.querySelectorAll("li:nth-child(odd)");
  console.log(oddNumberList);
  // 7. Get all even number list items in the list
  // Your code here
  const evenNumberList = document.querySelectorAll("li:nth-child(even)");
  console.log(evenNumberList);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const techCompaniesWithoutClass = document.querySelectorAll("a:not([class])");
  console.log(techCompaniesWithoutClass);
  // 9. Get "Amazon" list element
  // Your code here
  const amazonListElement = document.querySelector(
    "a[href='https://www.amazon.com']"
  );
  console.log(amazonListElement);
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicorn = document.querySelectorAll(".unicorn");
  console.log(unicorn);
};

window.onload = select;
