
    
    if(JSON.parse(localStorage.getItem("user-token")) != null){
        // const userBemVindo = document.querySelector("#userWelcome");
       
        let usuario = JSON.parse(localStorage.getItem("user-validado"));
       
        

        const figcaption = document.querySelector("#figure-img figcaption")
        const img = document.querySelector("#img-avatar")

        img.src = usuario.avatarUsuario
        img.alt = usuario.nomeCompleto
        figcaption.textContent = usuario.nomeCompleto + " - " + usuario.nomeUsario


        userBemVindo.innerHTML = usuario.nomeCompleto;
        userFoto.innerHTML = usuario.userFoto
        const botaoLogout = document.querySelector("#btnLogout");
        
        botaoLogout.addEventListener("click", ()=>{
            localStorage.removeItem("user-token");
            window.location.href = "./login.html";
        });
    }else{
        
        window.location.href = "./login.html";
    }
