// create a function that reverses a string
function reverse(str){
    // check to see if input is a string
    if (typeof(str) !== "string" || str.length < 2) {
        console.log('please enter a string with more than one character as your input');
    }
    // initialize an empty array
    let newArray = [];
    // convert string to array, starting at last index
    for (let i = str.length-1; i >= 0; i--) {
        newArray.push(str[i]);
    }
    // convert the array back to a string using the join method

    return newArray.join('');
}

reverse("76908");
