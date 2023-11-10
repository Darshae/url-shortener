const clearBtn = document.querySelector("#clearBtn")
const shortenIt = document.querySelector("#shortenIt")

const longURL = document.querySelector("#longURL")
const shortURL = document.querySelector("#shortURL")

clearBtn.addEventListener('click', () =>{
    longURL.value = "";
    shortURL.value = "";
})

shortenIt.addEventListener('click',  shortenURL)

async function shortenURL(){
    try{
        toBeShortened = longURL.value
        
        if(!isValidURL(toBeShortened)){
            alert("Please enter a valid url.")
            return
        }

        const apiURL = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(toBeShortened)

        const response = await fetch(apiURL);

        if(!response.ok){
            alert("Sorry, we failed to shorten your URL :(")
            throw new Error('Failed to shorted your URL :(')
        }
        
        const shortenedURL = await response.text()
        console.log("Shortened URL:", shortenedURL)
        shortURL.value = shortenedURL

    }catch (err){
        console.log("Error:", err);
        alert("Error:", err)
    }
}

function isValidURL(url){
    try {
        new URL(url);
        return true;
    } catch (err) {
        return false;
    }
}
