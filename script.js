let jokeContainer = document.getElementById("joke");
let btn = document.getElementById("btn");

btn.addEventListener('click',()=>{
    let url = "https://v2.jokeapi.dev/joke/Any?type=single";
    jokeContainer.classList.remove("fade");

    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            console.log(data);
            console.log(data.joke);

            jokeContainer.textContent = `${data.joke}`;
            jokeContainer.classList.add("fade");
        })
        .catch((error)=>{
            console.log("Sorry an error occured!");
        });
})
