document.addEventListener("DOMContentLoaded", () => {
  // your code here

  
    document.getElementById("create-task-form").addEventListener("submit" , function (e){
      e.preventDefault()
      addToDo(e.target.new_toDo.value)
      
    })


    function addToDo(task){
      let btn = document.createElement("button");
      let new_task = document.createElement("li")
      btn.innerHTML= "X";
      
      new_task.innerHTML = `${task} `
new_task.appendChild(btn)
      document.getElementById("tasks").appendChild(new_task);
      btn.addEventListener("click" , function(){
        new_task.remove();
      })
    }
  }
