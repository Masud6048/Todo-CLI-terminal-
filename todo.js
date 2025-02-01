import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todo =[];


const showInterface =()=>{
    console.log("\n1:add your task")
    console.log("2:view your task")
    console.log("3:Exit")
    rl.question("select an option : ", handleInput)
}

const handleInput =(option)=>{
    if (option==="1"){
      rl.question("Enter your task :", (task)=>{
         todo.push(task);
         console.log("task added" , task);
         showInterface();
      })
    }
    else if (option === "2"){
       console.log("\n your tasks :")
       todo.forEach((task , index)=>{
          console.log(`${index+1} : ${task}`)
       })
       showInterface();
    }
    else if (option === "3"){
      console.log("Goodbyeeeeee")
      rl.close()
    }
    else {
      console.log("please enter between 1 to 3");
      showInterface()
    }
  }


showInterface();