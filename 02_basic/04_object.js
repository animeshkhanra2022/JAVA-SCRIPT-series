

// const obj = new Object();      //  singleton object
// // console.log(obj);

// // const obj2 = {}              //  Non-singleton object
// // console.log(obj2);

// obj.id = 12385
// obj.name = "Ratul"
// obj.age = 56

// console.log(obj)

// const user_fullName = {}
const userName = {
    userId : "D22231965",
    user_fullName : {
        appUserFullName : {
            firstName : "Rabindar",
            lastName : "Rathord"
        }

    }
}

// console.log(userName.user_fullName.appUserFullName.lastName);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a' ,4: 'b'}
const obj3 = {5: 'a', 6: 'b'}

// let obj4 = {obj1, obj2, obj3}
// let obj4 = Object.assign({}, obj1, obj2, obj3)

// let obj4 = {...obj1,...obj2,...obj3}     //& 99 times we use it 
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
]

// console.log(users);
// console.log(users[1].email);


// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));          // print as an nested array


console.log(Object.hasOwnProperty('name'));          // print as an nested array
// console.log(obj);

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);


// const {courseInstructor: instr} = course
// console.log(instr);

