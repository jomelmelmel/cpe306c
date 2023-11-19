///FOR "ARGONCILLO_SEMIF_ASSIGNMENT.HTML" USE ONLY

document.addEventListener('DOMContentLoaded', function () {
    //PH REGIONS LIST
    var regions = [
        "NCR – National Capital Region",
        "CAR – Cordillera Administrative Region",
        "REGION I – Ilocos Region",
        "REGION II – Cagayan Valley",
        "REGION III – Central Luzon",
        "REGION IV‑A – CALABARZON Region",
        "REGION IV‑B – MIMAROPA Region",
        "REGION V – Bicol Region",
        "REGION VI – Western Visayas",
        "REGION VII – Central Visayas",
        "REGION VIII – Eastern Visayas",
        "REGION IX – Zamboanga Peninsula",
        "REGION X – Northern Mindanao",
        "REGION XI – Southern Mindanao/Davao Region",
        "REGION XII – SOCCSKSARGEN",
        "REGION XIII – Caraga Administrative Region",
        "BARMM – Bangsamoro Autonomous Region in Muslim Mindanao"
    ];

    var regionDropdown = document.getElementById('region');

    regions.forEach(function (region) {
        var option = document.createElement('option');
        option.value = region;
        option.text = region;
        regionDropdown.add(option);
    });
});

function submitForm() {
    //RECORD PARAMETERS
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var zipcode = document.getElementById("zipcode").value;
    var region = document.getElementById("region").value;
    
    //PRINT TO BROWSER CONSOLE
    console.clear();
    console.log("USER INFORMATION:");
    console.log("   First Name: " + firstName);
    console.log("   Last Name: " + lastName);
    console.log("   Email Address: " + email);
    console.log("   Phone #: " + phone);
    console.log("   Age: " + age + " years old");
    console.log("   Zipcode: " + zipcode);
    console.log("   Region: " + region);
};