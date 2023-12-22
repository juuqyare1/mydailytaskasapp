const mongoose=require("mongoose")

const DBconnect = ()=>{
    try {
        mongoose.connect("mongodb+srv://juuqyare57:juuqyare57@ecommerce.mr9f3md.mongodb.net/mydailytasks?retryWrites=true&w=majority")
        console.log("database connected !");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = DBconnect