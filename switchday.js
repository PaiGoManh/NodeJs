

function getDayMessage(day) {
    switch(day.toLowerCase()) {
        case 'monday':
            console.log("It's Monday, the start of the week!");
            break;
        case 'tuesday':
            console.log("It's Tuesday, let's keep going!");
            break;
        case 'wednesday':
            console.log("It's Wednesday, we're halfway there!");
            break;
        case 'thursday':
            console.log("It's Thursday, almost the weekend!");
            break;
        case 'friday':
            console.log("It's Friday, the weekend is near!");
            break;
        case 'saturday':
            console.log("It's Saturday, enjoy your day off!");
            break;
        case 'sunday':
            console.log("It's Sunday, time to relax!");
            break;
        default:
            console.log("That's not a valid day!");
            break;
    }
}

const day = 'dry'; 
getDayMessage(day);
