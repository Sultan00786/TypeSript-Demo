
interface User {
    name: string
    lastName: string
    age: number
}

const user: User = {
    name: "Sultan",
    lastName: "Ali",
    age: 10,
}

const isLegal = (user: User): boolean => {
    if(user.age >= 18) return true;
    else return false;
}

console.log(isLegal(user))

