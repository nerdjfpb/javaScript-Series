var value = 31
undefined
if(value % 5 === 0) {
    if(value % 7 === 0) {
    console.log("value is divisible by 5 and 7")
    }
} else {
    console.log("Not divisible")
}
VM2484:6 Not divisible
undefined

if(value % 5 === 0 && value % 7 === 0) {
    console.log("value is divisible by 5 and 7")
} else {
    console.log("Not divisible")
}
Not divisible
undefined

name = "todoroki"
"todoroki"
if(name === "todoroki" || name === "midoriya") {
    console.log("This is coming from BHNA anime")
} else {
    console.log("We do not know")
}
VM2894:2 This is coming from BHNA anime
undefined
