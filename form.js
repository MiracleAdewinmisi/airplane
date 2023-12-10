     var userInput = [];
     if(localStorage.userDetails){
      userInput = JSON.parse(localStorage.getItem('userDetails'))
     }

     function submitForm(){
        // document.write('Done!');
      //   console.log('Give or take');
        var form1 = {
            firstName: fullName.value,
            phoneNumber: number.value,
            myEmail: email.value
        }

        if((firstName = fullName.value) && (phoneNumber = number.value) && (myEmail = email.value)){
         userInput.push (form1);
            fullName.value = ""
            number.value = ""
            email.value = ""
        //         allTodo.push(todoObj)
        //         todoName.value =""
        //         todoDetails.value =""
        //         console.log(allTodo);
        //         todoObj.dismissError()
        //         localStorage.setItem("todos", JSON.stringify(allTodo))
        //         window.location.href = "displayTodo.html"
        //     }
      }
      else {
         alert("Please fill the required spaces")
      }
      localStorage.setItem('userDetails', JSON.stringify(userInput));
   }