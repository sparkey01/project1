document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value; 
    const age = document.getElementById('age').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const travelClass = document.getElementById('class').value;

    // Generate random ticket number
    const ticketNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

    // Generate random PNR Number
    const pnr = Math.floor(Math.random() * 9000000000)+ 10000000000;

    // Display ticket
    const ticket = document.getElementById('ticket');
    const ticketDetails = document.getElementById('ticketDetails');

    ticketDetails.innerHTML =`
        <p><strong>Ticket No:</strong> ${ticketNumber}</p>
        <p><strong>PNR No:</strong> ${pnr}</p>
        <p><strong>Passenger:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Class:</strong> ${travelClass}</p>
        <p style="color: green;"><strong>Status:</strong> Confirmed</p>
    `;
    ticket.style.display ='block';

    // clear form
    this.reset();
});

function downloadTicket(){
    const ticket = document.getElementById('ticket');
    const opt ={
        margin: 2,
        filename: 'railway-ticket.pdf',
        image: { type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 3},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(ticket).save();
}