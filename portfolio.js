
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        let form=this;
        fetch(form.action, {
            method: "POST",
            body: new FormData(form)
        }).then(response =>{
            if(response.ok){
                showPopup("message sent successfully");
                form.reset();
            } else {
                showPopup("failed to send");
            }
        }).catch(error => {
            showPopup("something went wrong");
        });
        
    });

    //func to showw popup
    function showPopup(message) {
        let popup = document.createElement("div");
            popup.style.position = "fixed";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.background = "#fff";
            popup.style.padding = "20px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
            popup.style.borderRadius = "10px";
            popup.style.zIndex = "1000";
            popup.style.textAlign = "center";

            let messageText = document.createElement("p");
            messageText.textContent = message;
            popup.appendChild(messageText);

            let okButton = document.createElement("button");
            okButton.textContent = "OK";
            okButton.style.marginTop = "10px";
            okButton.style.padding = "5px 10px";
            okButton.style.border = "none";
            okButton.style.background = "#007bff";
            okButton.style.color = "#fff";
            okButton.style.cursor = "pointer";
            okButton.style.borderRadius = "5px";

            okButton.addEventListener("click", function () {
                popup.remove();
            });

            popup.appendChild(okButton);
            document.body.appendChild(popup);
    }
});
