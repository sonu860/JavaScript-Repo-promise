// Promise
const promise = new Promise((resolve, reject) =>{ // resolve and reject are the functions   
    
        let user = false;
       if(!user){
        resolve({user: 'james'})
       }
       else{
        reject('error')
       }
  
})
// Using then and catch 
// promise.then((user) =>{
//     console.log('resolved', user)
//     return user.user
// }).then((user)=>{
//     console.log('user', user)
// }).catch((err)=>{
//     console.log('error', err)
// })

//Using the async and await keywords
// async function getUser(){
//     try {
//         let  userr = await promise;
//         console.log('user', userr)
//     } catch (error) {
//         console.log('error', error)
//     }
// }


// const result = async () => {
//     try {
//         let  userr = await promise;
//         console.log('user', userr)
//     } catch (error) {
//         console.log('error', error)
//     }
// }
// result()
