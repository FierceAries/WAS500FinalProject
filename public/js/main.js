let delBtn = document.getElementsByClassName("delete")
for(let i = 0; i < delBtn.length; i++){
    let btn = delBtn[i]
    btn.addEventListener("click", function(){
        let confirmTxt = "Are you sure?"
        if(confirm(confirmTxt) == true){
             location.href = "/delete/" + btn.getAttribute("data-id")
        }
    })
}