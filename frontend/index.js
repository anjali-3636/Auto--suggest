// Toggle Image
function toggle() {
    const img = document.getElementById("img");

    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

// Get Random User
function getRandomUser() {
    fetch("https://randomuser.me/api/")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            const user = data.results[0];

            // Name
            document.getElementById("card-name").innerText =
                user.name.first + " " + user.name.last;

            // Gender
            document.getElementById("card-gender").innerText =
                user.gender;

            // Role (Location)
           // document.getElementById("card-role").innerText =
            //    user.location.city + ", " + user.location.country;

            // Image
            document.getElementById("img").src =
                user.picture.large;
        })
        .catch(function(error) {
            console.log("Error:", error);
        });
}