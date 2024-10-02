

const table = document.getElementById("table");

      for (let x = 0; x <= 5; x++) {
        const row = table.insertRow(x);
        for (let y = 0; y <= 5; y++) {
          const data = row.insertCell(y);
          if (y < x) {
            data.innerHTML = " ";
          } else {
            data.innerHTML = x;
          }
        }
      }

      document
        .getElementById("orderForm")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent form from submitting immediately

          let isValid = true;

          const name = document.getElementById("name").value.trim();
          const address = document.getElementById("address").value.trim();
          const city = document.getElementById("city").value.trim();
          const state = document.getElementById("state").value.trim();
          const zip = document.getElementById("zip").value.trim();
          const phone = document.getElementById("phone").value.trim();

          // Simple validation
          if (
            name === "" ||
            address === "" ||
            city === "" ||
            state === "" ||
            zip === "" ||
            phone === ""
          ) {
            alert("Please fill out all required fields.");
            isValid = false;
          }

          // Additional validations (e.g., phone format)
          const phonePattern = /^[0-9]{11}$/; // Assumes 10-digit phone numbers
          if (!phonePattern.test(phone)) {
            alert("Please enter a valid 11-digit phone number.");
            isValid = false;
          }

          const zipPattern = /^[0-9]{5}$/; // Assumes 5-digit zip codes
          if (!zipPattern.test(zip)) {
            alert("Please enter a valid 5-digit zip code.");
            isValid = false;
          }

          if (isValid) {
            alert("Order submitted successfully!");
            // Optionally, submit the form using event.target.submit();
          }
        });