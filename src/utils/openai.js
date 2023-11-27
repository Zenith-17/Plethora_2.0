
const axios=require("axios");
require("dotenv").config();

const apiKey=process.env.OPENAI_API_KEY;

const client=axios.create({
  headers:{
    Authorization:"Bearer"+apiKey,
  },
});

const params={
  prompt:"generate a single youtube comment about ",
  model:"text-davinci-003",
  max_tokens:10,
  temperature:0,
};

export function generateRandomString(reply){
    return reply;
}
let arr=[]; 
client
.post("https://api.openai.com/v1/completions",params)
.then((result)=>{
  
  console.log(result.data.choices[0].text);
  generateRandomString(result.data.choices[0].text);

})
.catch(err=>console.log(err)); 