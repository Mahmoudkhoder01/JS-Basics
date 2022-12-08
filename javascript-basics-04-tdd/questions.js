
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("E", " ");
}
const concatString = (text1, text2) => {
    return `${text1}${text2}`;
}
const showChar5 = (text) => {
    return text.split(" ")[1].substring(0,1);
}
const showChar9 = (text) => {
    return text.slice(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof text == "string";
}

const getExtension = (text) => {
    return text.split(".")[1];
}
const countSpaces = (text) => {
    return text.split(" ").length -1;
}
const InverseString = (text) => {
    return text.split("").reverse().join("")
}

const power = (x, y) => {  
    return Math.pow(x,y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return  Math.ceil(Math.PI * Math.pow(radius,2));
}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(Math.pow(ab,2) + Math.pow(ac,2))
}
const BMI = (weight, height) => {
    return Number((weight/(Math.pow(height,2))).toFixed(2));
}

const createLanguagesArray = () => {
     const array=["Html","CSS","Java","PHP"];
     return array;
}

const createNumbersArray = () => {
    const array=[0,1,2,3,4,5];
     return array;
}

const replaceElement = (languages) => {
     languages[2] = "Javascript";
     return languages;
}

const addElement = (languages) => {
    languages.push("Ruby", "Python");
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2,-1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(",")
}

const convertArrToStr = (languages) => {
    return languages.join(",")
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();;
}