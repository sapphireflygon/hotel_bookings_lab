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
    }
])