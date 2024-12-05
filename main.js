// لديك مصفوفة تحتوي على أرقام من 1 إلى 20. المطلوب طباعة الأرقام الفردية فقط

console.log("#".repeat(15), "challenge1", "#".repeat(15))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i])
    }
}

console.log("#".repeat(15), "challenge2", "#".repeat(15))

// لديك مصفوفة مختلطة تحتوي على نصوص وأرقام.المطلوب إنشاء مصفوفتين جديدتين، واحدة للأرقام والأخرى للنصوص.

let mixedArray = [10, "Apple", 20, "Orange", 30, "Banana"];
let strings = [];
let numbers2 = [];
for (i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "string") {
        strings.push(mixedArray[i])
    }
    else if (typeof mixedArray[i] === "number") {
        numbers2.push(mixedArray[i])
    }
}
console.log(strings)
console.log(numbers2)

console.log("#".repeat(15), "challenge3", "#".repeat(15))

//  لديك مصفوفة تحتوي على أرقام.المطلوب طباعة الأرقام من النهاية إلى البداية.
let arr = [1, 2, 3, 4, 5];

for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}


// لديك مصفوفة تحتوي على أرقام.المطلوب حساب مجموع جميع الأرقام داخل المصفوفة.
console.log("#".repeat(15), "challenge4", "#".repeat(15))
let nums = [10, 20, 30, 40, 50];
let sum = 0
for (i = 0; i < nums.length; i++) {
    sum += nums[i]
}
console.log(sum)

console.log("#".repeat(15), "challenge5", "#".repeat(15))

//  لديك مصفوفة تحتوي على أسماء فواكه.المطلوب البحث عن اسم معين وإخبارنا إذا كان موجودًا أم لا.
let items = ["Apple", "Banana", "Orange"];
let search = "Banana";
for (i = 0; i < items.length; i++) {
    if (items[i] === search) {
        console.log("found")
    }

}

// لديك مصفوفة تحتوي على أرقام.المطلوب مضاعفة كل رقم وطباعة النتيجة.
console.log("#".repeat(15), "challenge6", "#".repeat(15))

let nums2 = [1, 2, 3, 4, 5];
for (i = 0; i < nums2.length; i++) {
    console.log(nums2[i] * 2)
}



// لديك مصفوفة أرقام.المطلوب إيجاد أكبر رقم فيها وطباعة النتيجة.
console.log("#".repeat(15), "challenge7", "#".repeat(15))
let numbers3 = [10, 20, 45, 67, 89, 5];
for (i = 0; i < numbers.length; i++) {
    if (Math.max(...numbers3) === numbers3[i]) {
        console.log(`max num => ${numbers3[i]}`)
    }
}


// لديك مصفوفة تحتوي على أرقام ونصوص.المطلوب إنشاء مصفوفة جديدة تحتوي فقط على الأرقام.
console.log("#".repeat(15), "challenge8", "#".repeat(15))
let mixedArray2 = [10, "Apple", 20, "Orange", 30, "Banana"];
let filteredArray = [];

for (i = 0; i < mixedArray2.length; i++) {
    if (typeof mixedArray2[i] === "number") {
        filteredArray.push(mixedArray2[i])
    }
}
console.log(filteredArray)


//  المطلوب إنشاء عد تنازلي من 10 إلى 1.
console.log("#".repeat(15), "challenge 9", "#".repeat(15))
for (i = 10; i >= 1; i--)
    console.log(i)


