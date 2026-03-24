document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect data from form
    const name = document.getElementById('fullName').value;
    const phone = document.getElementById('mobile').value;
    const city = document.getElementById('city').value;
    const loanType = document.getElementById('loanType').value;
    const amount = document.getElementById('amount').value;

    // Your WhatsApp Number (Replace with your actual number in international format)
    const myNumber = "919306808365"; // Example format for India

    // Construct the WhatsApp message
    const message = `*New Loan Enquiry*%0A` +
                    `*Name:* ${name}%0A` +
                    `*Mobile:* ${phone}%0A` +
                    `*City:* ${city}%0A` +
                    `*Loan Type:* ${loanType}%0A` +
                    `*Amount:* ₹${amount}`;

    // Open WhatsApp URL
    const waUrl = `https://wa.me/${myNumber}?text=${message}`;
    window.open(waUrl, '_blank');
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});