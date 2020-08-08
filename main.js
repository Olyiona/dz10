
// Об’єкт має містити такі властивості:
// • balance (по замовчуванням 100)
// • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
// карти)
// • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
// данної карти)
// • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
// функції. Кожна карта повинна мати унікальний key)



// function userCard(number){
// let balance =100
// let transactionLimit = 100
// let historyLogs = []
// let key = number <=3
// ? number
// : 'Key not right'

// function getCardOptions(){
//     return{
//         key,
//         balance,
//         transactionLimit,
//         historyLogs
//     }
// }

// function addHistory(operationType,credits,operationTyme){
//     historyLogs.push(operationType,credits,operationTyme)
// }

// function putCredits(credit){
//     let now =  new Date()
//     let date = now.toLocaleDateString()
//     let time = now.toLocaleTimeString()
//     if(credit>0){
//         balance+=credit
//         addHistory('putCredits',credit,date+''+time)
//     }
// }

// function takeCredits(credit,typeOperation){
//     let now = new Date()
//     let date = now.toLocaleDateString()
//     let time = now.toLocaleTimeString()
//     if(credit<=transactionLimit&&credit<=balance){
//         balance = +(balance -credit).toFixed(2)
//         ? addHistory(typeOperation,credit,date+''+time) 
//         : addHistory('takeCredits',)
//         return true
//     }else{console.log('Error takeCredits',credit,date+''+time)
//     }
//     return false
// }

// function setTransactionLimit(number){
//     let now = new Date()
//     let date = now.toLocaleDateString()
//     let time = now.toLocaleTimeString()
//     if(number>0){
//         transactionLimit = number
//         addHistory('setTransactionLimit',number,date+''+time)
    
//     }
// }


// function transfercredits(sum,card){
 
// let credit = +(sum+1.005).toFixed(2)
// console.log(credit)
// console.log(credit)
//     let chek = takeCredits(credit,'transfercredits')
//     chek
//     ?card.putCredits(sum)
//     :0
// } 




// function getKey(){
//     return key
// }


// return {
//     getCardOptions,
//     putCredits,
//     takeCredits,
//     setTransactionLimit,
//     transfercredits,
//     getKey
// }}

// let userCard1 = new userCard(1)
// userCard1.putCredits(110)
// userCard1.setTransactionLimit(180)
// userCard1.takeCredits(100)
// userCard1.transfercredits(500)
// console.log(userCard1.getCardOptions())




// class UserAccount{
//     constructor(name){
//         this.name = name
//         this.cards= []

//     }
// }

// UserAccount.prototype.addCard=function(){
//     if(this.cards.length<3){
//         this.cards.push(new userCard(this.cards.length+1))
//     }else{console.log('cadrd limit finish')}
// }




// UserAccount.prototype.getCardByKey=function(number){
//    return this.cards.find(value=>value.getCardOptions().key===number)
// }


// let user1= new UserAccount("Taya")
// let user2= new UserAccount("Vasya")

// user2.addCard()
// user2.addCard()

// user1.addCard()
// user1.addCard()
// user1.addCard()

// let user1Card1=user1.getCardByKey(2)
// let user2Card1=user2.getCardByKey(2)

// user1Card1.putCredits(1500)
// user1Card1.setTransactionLimit(1000)
// user1Card1.transfercredits(500,user2Card1)
// console.log(user2Card1.getCardOptions())

