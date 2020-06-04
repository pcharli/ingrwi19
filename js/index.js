alert("yahoo, nous sommes jeudi")

let search_form = document.querySelector(".search_form")

search_form.addEventListener("submit", function(e) {
    e.preventDefault()
    if (confirm("Vous êtes sûr ?")) {
        this.submit()
    }
})