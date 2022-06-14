use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Owen Wilson",
        email: "ohwow@gmail.com",
        status: true
    },
    {
        name: "Tilda Swinton",
        email: "tswin@gmail.com",
        status: false
    },
    {
        name: "Bill Murray",
        email: "nycdad@gmail.com",
        status: true
    },
    {
        name: "Ralph Fiennes",
        email: "voldemort@hotmail.com",
        status: false
    },
    {
        name: "Edward Norton",
        email: "will-graham@email.com",
        status: true
    },
    {
        name: "Wes Anderson",
        email: "director@writer.com",
        status: true
    },
    {
        name: "Alexandre Desplat",
        email: "musique@score.com",
        status: true
    }

])