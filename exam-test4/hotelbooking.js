const hotelBookings = new Map();

function addBooking(id, guestName, roomType, checkInDate, checkOutDate) {
    if (hotelBookings.has(id)) {
        console.log("Id already exists, no more booking in this room.");
    } else {
        hotelBookings.set(id, {
            guestName: guestName,
            roomType: roomType,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate
        });
        console.log(`Booking successfully.`);
    }
}

addBooking(201, "Rahul", "Double", "11/11/2020", "11/12/2020");
addBooking(202, "Manu", "Single", "11/11/2020", "11/12/2020");
addBooking(203, "Anandu", "Single", "11/11/2020", "11/12/2020");

console.log("-----------------------------------------------------------------------------------------------------")

function deleteBooking(id) {
    if (hotelBookings.has(id)) {
        hotelBookings.delete(id);
        console.log("Id Deleted");
    } else {
        console.log("No id Found");
    }
}

deleteBooking(202);
console.log("After Deleting", hotelBookings);

console.log("-----------------------------------------------------------------------------------------------------")

addBooking(204, "Sujin", "Single", "11/11/2020", "11/12/2020");

function displayBookings() {
    console.log("All Recorded Bookings");
    for (let [id, details] of hotelBookings) {
        console.log(`ID: ${id}`);
        console.log(`Guest Name: ${details.guestName}`);
        console.log(`Room Type: ${details.roomType}`); 
        console.log(`Check-In: ${details.checkInDate}`); 
        console.log(`Check-Out: ${details.checkOutDate}`);
    }
}
displayBookings();

console.log("------------------------------------------------------------------------------------------------------")

const updateId = 201; 
const newId = 301; 

if (hotelBookings.has(updateId)) {
    const bookingDetails = hotelBookings.get(updateId); 
    hotelBookings.delete(updateId); 
    hotelBookings.set(newId, bookingDetails); 
    console.log("Update Booking Done");
} else {
    console.log("No booking found with ID:", updateId);
}

console.log("After Updating:", hotelBookings);

console.log("--------------------------------------------------------------------------------------------")


function Report() {

    const roomTypeCounts = new Map();
    for (const booking of hotelBookings.values()) {
        const roomType = booking.roomType;
        if (!roomTypeCounts.has(roomType)) {
            roomTypeCounts.set(roomType, 1);
        } else {
            roomTypeCounts.set(roomType, roomTypeCounts.get(roomType) + 1);
        }
    }
    console.log("Booked Rooms:");
    roomTypeCounts.forEach((count, roomType) => {
        console.log(`${roomType}: ${count} booking(s)`);
    });
}
Report();
