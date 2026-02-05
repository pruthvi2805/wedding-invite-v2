export const weddingData = {
    couple: {
        groom: {
            name: "Pruthvi",
            fullName: "Pruthvi Kauticwar",
            parents: {
                father: "Mr. Shiv Kumar",
                mother: "Mrs. Rakhi Kauticwar"
            }
        },
        bride: {
            name: "Akruthi",
            fullName: "Akruthi Ananthula",
            parents: {
                father: "Mr. Shravan Kumar",
                mother: "Mrs. Padmaja Ananthula"
            }
        }
    },

    tagline: "are getting married",

    events: [
        {
            id: "wedding",
            type: "The Wedding Ceremony",
            displayType: "The Wedding",
            datetime: "2026-03-12T10:55:00+05:30", // IST timezone
            date: "Thursday, 12th March 2026",
            time: "10:55 AM",
            venue: {
                name: "Virupakshi Gardens",
                city: "Jagityala",
                state: "Telangana",
                fullAddress: "Virupakshi Gardens, Jagityala, Telangana"
            },
            mapsUrl: "https://maps.app.goo.gl/aW8U2udjqeU96qGs8",
            icon: "church"
        },
        {
            id: "reception",
            type: "The Reception",
            displayType: "The Reception",
            datetime: "2026-03-14T18:00:00+05:30",
            date: "Saturday, 14th March 2026",
            time: "06:00 PM onwards",
            venue: {
                name: "Mangalamurthy Hotels",
                city: "Adilabad",
                state: "Telangana",
                fullAddress: "Mangalamurthy Hotels, Adilabad, Telangana"
            },
            mapsUrl: "https://maps.app.goo.gl/3KjBrSh69nXigE1W7",
            icon: "wine"
        }
    ],

    countdown: {
        targetDate: "2026-03-12T10:55:00+05:30",
        timezone: "Asia/Kolkata"
    },

    messages: {
        invitation: "You're invited",
        closing: "Your blessings and presence are the most precious gifts we could receive.",
        shareText: "Join us in celebrating the wedding of Pruthvi & Akruthi on March 12, 2026"
    },

    meta: {
        title: "Pruthvi & Akruthi | Wedding Invitation",
        description: "Join us in celebrating storytelling wedding of Pruthvi & Akruthi on March 12, 2026",
        url: "https://akruthi.kpruthvi.com"
    }
};
