// 1..What is the name of the recipe?
const recipeName = document.querySelector("#recipe-name");
console.log(recipeName.innerText);
// 2..What HTML tag is used to display the Recipe name?
const htmlTag = recipeName.tagName;
console.log (htmlTag);
  //3.. What is the font size of the paragraph tag with the class "description".

 const description = document.querySelector('.description');
const computedStyle = window.getComputedStyle(description);
const PFontSize = computedStyle.fontSize;
 console.log(PFontSize);

 // 4..What is the value of the alt atrribute on the image?

 const image =document.querySelector(".image-container>img");
 const altContent = image.getAttribute("alt");
 console.log(altContent);

 // 5 ... What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
//{   url: string  height: number,width: number,}
const imageUrl = image.getAttribute("src");
const imageComputedStyles = window.getComputedStyle(image);
let imageURLAndDimensions ={
    url: imageUrl,
    height: imageComputedStyles.height,
    width: imageComputedStyles.width
};
console.log(imageURLAndDimensions);

//......1..How many ingredients has the paste?
const ingredientsListPasteItems = document.querySelectorAll('.ingredients-list-paste>li');
console.log(ingredientsListPasteItems.length);


//....2...Which is the forth element in the list containing the ingredients for the paste?
const forthElemt = ingredientsListPasteItems[3];
console.log(forthElemt.innerText);



//....3.. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
//{  order: number; text: instruction;}

const instructionsListItems = document.querySelectorAll(".instructions-list>li");
const instructionItems = [];
instructionsListItems.forEach((item, index) => {
  let instructionItem = {
    order: index + 1,
    text: item.innerText,
  };
  instructionItems.push(instructionItem);
});
console.log(instructionItems);

