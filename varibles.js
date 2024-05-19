var a = ["asad", "ali", "qamar"]
let b = ["fatima", "bano", "amina"];
const c = 3;
let func = () =>{
    a.push("qwerty");
    a.toString();
    console.log(a);
    console.log(b);
    let d = a.concat(b);
    console.log(d);
}
func()