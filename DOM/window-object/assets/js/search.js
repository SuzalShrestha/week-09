export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`export 
    // Your code here
   return document.getElementById(id);
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    // Your code here
    return document.body.getElementsByTagName(tag);
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
    // Your code here
    return document.body.getElementsByClassName(cls);
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    // Your code here    
    return Array.from(document.querySelectorAll(tag));

}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    // Your code here
    return Array.from(document.querySelectorAll(`.${cls}`));
}