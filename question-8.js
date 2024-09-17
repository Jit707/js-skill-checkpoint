
let getUserInfo = () => {return fetch (`https://jsonplaceholder.typicode.com/users`)}
const onSuccess = (data) => { return data.json()}
const dataInfo = (data) => {
    let list =[]
   for (let i=0; i<data.length; i++){
   
    let info = (data[i]["name"]);
    list.push(info)
    
    
    
   }console.log(list);
   
    
}

(getUserInfo().then(onSuccess)).then(dataInfo)
  


 
 
