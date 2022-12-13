
    
	var creatId =0;
	var inputEl=document.getElementById("todoInput");
	var inputMsgEl=document.getElementById("todoInput-msg");
	var todo_container = document.getElementById("todo-container");
	var divId;
	//on Add data function	
	function todolist(){
		
		// Create elements
		var div = document.createElement("div");
		div.setAttribute("id",`main-box-${creatId}` );
		var head=document.createElement("h3");
		var para=document.createElement("p");
		var deleteEl = document.createElement("button");
		var editEl = document.createElement("button");
		
		//create class names
		head.className="head";
		para.className = "para";
		deleteEl.className ="delete-icon";
		editEl.className ="edit-icon";
		
		//Load text
		deleteEl.textContent="Delete";
		editEl.textContent="edit";
		head.innerText=inputEl.value;
		para.innerText=inputMsgEl.value;
		
		//load child elements in container
		div.append(head,para,editEl,deleteEl);
		todo_container.appendChild(div);
		
		//increament ID
		creatId++;
		
		//clear inputs
		inputEl.value = "";
		inputMsgEl.value = "";
		
		
		//Add event handler
		deleteBtn = document.getElementsByClassName("delete-icon")
		editbtn = document.getElementsByClassName("edit-icon") 
		
		//delete box
		for(let i = 0; i < deleteBtn.length; i++){
			deleteBtn[i].addEventListener("click", delt)
		}
		
		//Edit box
		var editBtn=document.getElementsByClassName("edit-icon")
		for(let i=0; i<editBtn.length; i++){
			editBtn[i].addEventListener('click',editButton);	
		}
	};
	
		//Delete function
		function delt(){
			this.parentElement.remove();
		}

		//Edit function
		function editButton(a){
			let parentDm = this.parentNode;
			let title = parentDm.getElementsByClassName("head")[0];
			let paraContent = parentDm.getElementsByClassName("para")[0];
			inputEl.value = title.innerText;
			divId = parentDm.id;
			inputMsgEl.value = paraContent.innerText;
			
		}
			
		// update function
				
		function update(){
			let main = document.getElementById(divId);
			let head = main.getElementsByClassName("head")[0];
			let para = main.getElementsByClassName("para")[0];
			head.innerText = inputEl.value;
			para.innerText = inputMsgEl.value;
			
		}


