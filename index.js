const getData = async () => {
    const url = await fetch("http://localhost:3000/data")
    const json = await url.json()
    const list_group = document.querySelector(".list-group")
    json?.map((res) => {
        list_group.innerHTML += `
            <li class="list-group-item"><b>Name: </b>${res?.name} <br> ${res?.comment} </li>
        `
    })
}
getData()
const btn = document.querySelector(".postData")
btn.onclick = (e) => {
    e.preventDefault()
    postData()
}
const postData = () => {
    const inp = document.querySelector(".form-control")
    let value = inp.value
    const txarea = document.querySelector(".haa")
    let value2 = txarea.value
    if (value === "" || value2 === "") {
        inp.style.border = "2px solid red"
        txarea.style.border = "2px solid red"
        alert("To'ldiring")
    } else {
        fetch("http://localhost:3000/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: value, comment: value2 })
        }).then((msg) => alert(msg.statusText))
    }

}