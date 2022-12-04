let save_btn = document.getElementById("save_btn")
let input_err_name = document.querySelector(".input_err.name")
let input_err_author_name = document.querySelector(".input_err.author_name")
save_btn.addEventListener("click", function(event){
    input_err_name.setAttribute("style", "display: none")
    input_err_author_name.setAttribute("style", "display: none")
    let name = document.getElementById("name").value
    let author_name = document.getElementById("author_name").value
    if(name == ""){
        input_err_name.setAttribute("style", "display: block")
        event.preventDefault()
    }
    if(author_name == ""){
        input_err_author_name.setAttribute("style", "display: block")
        event.preventDefault()
    }
})