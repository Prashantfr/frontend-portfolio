//defining the structural blueprint
interface UserProfile {
    readonly id:number ; //readonly means it can't be changed after creation
    name:string;
    bio?: string; // the '?' means this property is completely optional
}

//create an object using the interface blueprint
let user1: UserProfile = {
    id: 1,
    name:"Prashant",
    bio: "Writing code with typescript",
}

//user1.id=2; //error you cant overwrite a readonly property.