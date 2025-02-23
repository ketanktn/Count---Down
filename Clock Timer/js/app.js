const endDate = "23 February 2050 03:55 PM";

document.getElementById("end-date").innerText = endDate;

const input = document.querySelectorAll("input");



function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    
    if (diff < 0) {
        //clearInterval(interval);  // Stop the countdown
        message.innerText = "𝐂𝐨𝐮𝐧𝐭𝐝𝐨𝐰𝐧 𝐄𝐧𝐝𝐞𝐝!"; // Show message below countdown
        return; // Exit function
    }
    
    input[0].value = Math.floor(diff/60/60/24); //convert into days
    input[1].value = Math.floor((diff/60/60)%24); // convert into hours
    input[2].value = Math.floor((diff/60)%60); // convert into minutes
    input[3].value = Math.floor(diff%60); // convert into seconds
    

}

clock(); // initial call

// update every second
setInterval(
    () => {
        clock()
    },
    1000
)

