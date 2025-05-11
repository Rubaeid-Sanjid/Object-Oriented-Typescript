{
    //  Type Guard
    // using typeof

    const add = (num1 : string | number, num2 : string | number) : string | number=>{
        if(typeof num1 === "number" && typeof num2 === "number"){
            return num1+num2;
        }else{
            return parseFloat(num1.toString()) + parseFloat(num2.toString());
        }
    }
    const result = add("12", "10");
    console.log(result);

    // in Guard
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role : string;
    }

    const getUser = (user : NormalUser | AdminUser)=>{
        if("role" in user){
            console.log(`My name is ${user.name} and My role is ${user.role}`);
        }
        else{
            console.log(`My name is ${user.name} and I am a normal user.`);
        }
    }

    const user : NormalUser = {
        name : "Sanjid"
    }
    const admin : AdminUser = {
        name: "Rubaeid",
        role: "Admin"
    }

    getUser(user);
    getUser(admin);
}