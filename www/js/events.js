angular.module('app.events', [])

// get fb graph token
// https://graph.facebook.com/oauth/access_token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&grant_type=client_credentials

// get events
// http://localhost:3000/events?lat=43.0731&lng=-89.4012&distance=500&sort=venue&accessToken=ACCESS_TOKEN

.constant('events', 
{
    "events": [
        {
            "id": "416395108777598",
            "name": "Holiday Guest Appreciation Event",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q84/s720x720/23550090_1289192181185178_6416795213418369142_o.jpg?oh=0bf0f7ca07877fccfe08d2020be9d771&oe=5AD4B566",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q90/c50.0.200.200/p200x200/23472764_1289192181185178_6416795213418369142_n.jpg?oh=0b3e6d8800ae7f7e71235fd76d218580&oe=5ABC96E7",
            "description": "The time between Thanksgiving and New Years is a busy one for most of us. We choose to take this time to reflect and give thanks to all of our wonderful guests that frequent our facility throughout the year. In hopes you will take some time to refresh and rejuvenate yourself during the holidays we would like to extend our December Open House invitation to all of our guests.\n\nIt is the one night of the year where we provide complimentary services, Aveda product savings, refreshments and holiday cheer. It is an evening not to be missed. This year we are offering 20% savings on Aveda product purchases.\n\nOur students will be offering complimentary services such as blow outs, thermal styles, makeup, polish changes and braids. Please RSVP to 608.250.3100 for your complimentary service.",
            "distance": "261",
            "startTime": "2017-12-11T17:00:00-0600",
            "endTime": "2017-12-11T20:00:00-0600",
            "timeFromNow": 97580,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "place": {
                "id": "643086045795798",
                "name": "Aveda Institute Madison",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07262,
                    "longitude": -89.39806,
                    "state": "WI",
                    "street": "353 E Campus Mall",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 5,
                "declined": 0,
                "maybe": 14,
                "noreply": 0
            },
            "venue": {
                "id": "643086045795798",
                "name": "Aveda Institute Madison",
                "about": "Aveda Institute Madison offers programs in Cosmetology, Barbering, Esthiology, Massage, Manicuring, Yoga & Ayurveda. Aveda services also available.",
                "emails": [
                    "info@aimadison.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/22861836_1275136849257378_2012049286245931457_o.jpg?oh=95a3a0f82000621137724b1bd4e8b366&oe=5AC8581A",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/12650829_790737637697304_1360648256802945295_n.jpg?oh=7812b3ed6738c832b4bae9e0c5e76404&oe=5AD1F215",
                "category": "Hair Salon",
                "categoryList": [
                    "Hair Salon",
                    "School"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07262,
                    "longitude": -89.39806,
                    "state": "WI",
                    "street": "353 E Campus Mall",
                    "zip": "53715"
                }
            }
        },
        {
            "id": "159861241434907",
            "name": "Wrapping Party",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-0/p480x480/24879831_1954813361505976_8528227764527397712_o.jpg?oh=6c76343ea4d8034b72d7be063b0962a3&oe=5AC185F2",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c50.0.200.200/p200x200/24991471_1954813361505976_8528227764527397712_n.jpg?oh=2387e6d2f7ec275930b3e4e10ae66811&oe=5ABDAC65",
            "description": "Join us for our Wrapping Party held in Camp Trippalindee! Staff will wrap gifts and we will provide all wrapping materials. We will wrap games for the Game Drive for the Ronald McDonald House, or even personal gifts. All proceeds will go to the Ronald McDonald House.\n\nComplimentary Mulled Cider, Mulled Wine, & some Holiday Snacks Provided by Camp Trippalindee\n\nSuggested Donations:\n$2 for small packages \n$4 for large packages\n\nAll proceeds will go to the Ronald McDonald House.",
            "distance": "524",
            "startTime": "2017-12-23T12:00:00-0600",
            "endTime": "2017-12-23T16:00:00-0600",
            "timeFromNow": 1116380,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_CRAFTS",
            "place": {
                "id": "122202715152924",
                "name": "Camp Trippalindee",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07551,
                    "longitude": -89.39565,
                    "state": "WI",
                    "street": "601 Langdon Street",
                    "zip": "53703"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 2,
                "noreply": 0
            },
            "venue": {
                "id": "1385828021737849",
                "name": "Graduate Madison",
                "about": "Graduate Hotels are a well-curated, thoughtfully crafted collection of hotels that reside in the most dynamic college towns across the country.",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/11703308_1458260071161310_292463965904586887_o.jpg?oh=9b9a8833afe737ccc9cfd7ff48141e27&oe=5ABD4FD8",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c31.0.169.169/997082_1385838681736783_2000847690083712771_n.jpg?oh=c2e312bda9b7b67a91c87581a838b3fc&oe=5A941790",
                "category": "Hotel",
                "categoryList": [
                    "Hotel"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07551,
                    "longitude": -89.39565,
                    "state": "WI",
                    "street": "601 Langdon St",
                    "zip": "53703"
                }
            }
        },
        {
            "id": "138576333528510",
            "name": "Holiday Gathering Industry Happy Hour",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24883664_1954814461505866_9170409775559427055_o.jpg?oh=c202d539b7431291061e860ec1934804&oe=5AC618A3",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c49.0.200.200/p200x200/24852388_1954814461505866_9170409775559427055_n.jpg?oh=ff9a555ddec41cb06b0007f77597a80a&oe=5ACE4B4A",
            "description": "Join Graduate Madison for a Holiday Gathering in partnership with All State Liquor & Wine. Zachery Lozoff & Rian Hill From All State will be tasting guests on a selection Holiday Inspired Spirits\n\nOfferings:\n$4 Holiday Cocktail featuring Cranberry Liquor from Great Lakes Distiller (MKE)\nFree S’mores Station\n$5 Cheeseburgers\n\n*No RSVP required",
            "distance": "524",
            "startTime": "2017-12-17T14:00:00-0600",
            "endTime": "2017-12-17T18:00:00-0600",
            "timeFromNow": 605180,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_DRINK",
            "place": {
                "id": "1385828021737849",
                "name": "Graduate Madison",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07551,
                    "longitude": -89.39565,
                    "state": "WI",
                    "street": "601 Langdon St",
                    "zip": "53703"
                }
            },
            "stats": {
                "attending": 2,
                "declined": 0,
                "maybe": 9,
                "noreply": 0
            },
            "venue": {
                "id": "1385828021737849",
                "name": "Graduate Madison",
                "about": "Graduate Hotels are a well-curated, thoughtfully crafted collection of hotels that reside in the most dynamic college towns across the country.",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/11703308_1458260071161310_292463965904586887_o.jpg?oh=9b9a8833afe737ccc9cfd7ff48141e27&oe=5ABD4FD8",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c31.0.169.169/997082_1385838681736783_2000847690083712771_n.jpg?oh=c2e312bda9b7b67a91c87581a838b3fc&oe=5A941790",
                "category": "Hotel",
                "categoryList": [
                    "Hotel"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07551,
                    "longitude": -89.39565,
                    "state": "WI",
                    "street": "601 Langdon St",
                    "zip": "53703"
                }
            }
        },
        {
            "id": "127688487903083",
            "name": "Carnage | Spring Semester Show Series Kickoff!",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q92/s720x720/23511353_1889569991359303_8513019489724617219_o.jpg?oh=5185b199678af2bc2be5be31f25d52c5&oe=5AD15D1A",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q86/c78.0.200.200/p200x200/23561399_1889569991359303_8513019489724617219_n.jpg?oh=d2ba01b30d4052ef7703dedc02ac5ab1&oe=5AC30B86",
            "description": "Liquid is proud to present our Spring Semester Show Series Kickoff with Papi Gordo himself -- CARNAGE ! \n\nSpecial Guest: Andres Fresko!\nAnd local support from RCKT PWR\n\nThursday, January 25th!\nDoors Open at 9pm!\n18+ To Enter / 21+ To Drink\n\nCarnage\n\nPAPI GORDO!!! EDM DJ and producer. Born in January 3, 1991, in Washington DC and based in Los Angeles\n\nAndres Fresko\nBorn and raised in Miami, Andres Fresko is one of the few artists that can truly say he’s been raised in the booth. One of the Magic City’s most sought after DJs, he honed his skills and developed his sound behind the decks of some of Miami’s most lucrative and legendary nightspots. His career as a producer skyrocketed in 2014 with the release of his hit “Jump Off.” Spurred by a budding relationship with famed producer and DJ Carnage, the track reached #3 overall on Beatport. Soon after, Fresko took to the road alongside Carnage on the latter’s Parental Advisory Tour, where he performed for hundreds of thousands of fans across over 55 cities in the U.S. After coming off tour with Carnage, Fresko kept the momentum going with a remix of Dimitri Vegas & Like Mike’s anthem “The Hum” which received over 2 million views. He also teamed up with Dzekko & Torres to produce “Lose Your Mind,” which put him on the radars of heavyweight acts like Tiesto, David Guetta and more. In 2016, his remix of Borgeous’s “Souls” earned international acclaim, bringing the buzz around his name to a boiling point before he took over Ultra Music Festival in Miami.\n\nRCKT PWR\nIt's not rckt science...\nhttps://soundcloud.com/rckt-pwr\nhttps://twitter.com/RCKTPWR\nhttp://instagram.com/rckt_pwr\n.\n\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\nFor VIP Bottle Service & Reservations please contact:\nVIP@liquidmadison.com !\n\nFor general info please email: info@liquidmadison.com\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\n\nConnect with Liquid:\nwww.liquidmadison.com\nhttps://www.facebook.com/liquidmadison\nhttps://twitter.com/LiquidMadison\nwww.instagram.com/liquidmadison\n\nLiquid\n624 University Avenue\nMadison, WI 53715",
            "distance": "430",
            "startTime": "2018-01-25T21:00:00-0600",
            "endTime": "2018-01-26T02:00:00-0600",
            "timeFromNow": 3999980,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC_EVENT",
            "ticketing": {
                "ticket_uri": "http://ticketf.ly/2jrBL0Z"
            },
            "place": {
                "id": "1476959049287068",
                "name": "Liquid",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.075408452653,
                    "longitude": -89.396953582764,
                    "state": "WI",
                    "street": "624 University Ave",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 22,
                "declined": 0,
                "maybe": 96,
                "noreply": 5
            },
            "venue": {
                "id": "1476959049287068",
                "name": "Liquid",
                "about": "The most beautiful music venue in the top college town in the United States of America. ",
                "emails": [
                    "info@liquidmadison.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q89/s720x720/24883591_1901040113545624_6783919679032605798_o.jpg?oh=62db166450982f01bd46130fb517ca4a&oe=5AD4D5F7",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c50.0.200.200/p200x200/10400325_1571789449804027_9087242180092288577_n.jpg?oh=5109167c308d567d54fdf9499a6d9305&oe=5AD6A625",
                "category": "Live Music Venue",
                "categoryList": [
                    "Live Music Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.075408452653,
                    "longitude": -89.396953582764,
                    "state": "WI",
                    "street": "624 University Ave",
                    "zip": "53715"
                }
            }
        },
        {
            "id": "254642355064973",
            "name": "MIJA",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/23592375_1890051704644465_2879600456713840933_o.jpg?oh=8ace5501aae3bac24e26ed4d4ee9378b&oe=5AD57458",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q82/c78.0.200.200/p200x200/23621585_1890051704644465_2879600456713840933_n.jpg?oh=47219f0bf69eee4cd3cc16a76d0def48&oe=5A89CBAC",
            "description": "MIJA \n\nOpeners TBD!\n\nFriday, February 9th!\nDoors Open at 10pm!\n18+ To Enter / 21+ To Drink\n\nMija\nshredding a tidal wave of whiskey on a surfboard made out of don't care.\n\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\nFor VIP Bottle Service & Reservations please contact:\nVIP@liquidmadison.com !\n\nFor general info please email: info@liquidmadison.com\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\n\nConnect with Liquid:\nwww.liquidmadison.com\nhttps://www.facebook.com/liquidmadison\nhttps://twitter.com/LiquidMadison\nwww.instagram.com/liquidmadison\n\nLiquid\n624 University Avenue\nMadison, WI 53715",
            "distance": "430",
            "startTime": "2018-02-09T22:00:00-0600",
            "endTime": "2018-02-10T02:30:00-0600",
            "timeFromNow": 5299580,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC_EVENT",
            "ticketing": {
                "ticket_uri": "http://ticketf.ly/2AVzcsn"
            },
            "place": {
                "id": "1476959049287068",
                "name": "Liquid",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.075408452653,
                    "longitude": -89.396953582764,
                    "state": "WI",
                    "street": "624 University Ave",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 89,
                "declined": 0,
                "maybe": 695,
                "noreply": 61
            },
            "venue": {
                "id": "1476959049287068",
                "name": "Liquid",
                "about": "The most beautiful music venue in the top college town in the United States of America. ",
                "emails": [
                    "info@liquidmadison.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q89/s720x720/24883591_1901040113545624_6783919679032605798_o.jpg?oh=62db166450982f01bd46130fb517ca4a&oe=5AD4D5F7",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c50.0.200.200/p200x200/10400325_1571789449804027_9087242180092288577_n.jpg?oh=5109167c308d567d54fdf9499a6d9305&oe=5AD6A625",
                "category": "Live Music Venue",
                "categoryList": [
                    "Live Music Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.075408452653,
                    "longitude": -89.396953582764,
                    "state": "WI",
                    "street": "624 University Ave",
                    "zip": "53715"
                }
            }
        },
        {
            "id": "351936861938065",
            "name": "Mr. Carmack LIVE!",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24068513_1895364410779861_6204943718806981731_o.jpg?oh=9c41a3e4861bf0fcb973d5a44a72517e&oe=5AC4314C",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c78.0.200.200/p200x200/24059050_1895364410779861_6204943718806981731_n.jpg?oh=45efd1e51b108a03bebbf398b5fa8a5f&oe=5A92C50A",
            "description": "We're really excited to present: MR CARMACK performing LIVE! \n\nPreSale Tickets are on sale NOW and you will NOT be able to get in to see the show at a better price than this!\n\nHere's the catch. PreSale tickets are VERY limited in quantity and won't last long... So save yourself some $$$ and scoop your tickets up asap!\n\nDoors Open at 10pm\n18+ To Enter/21+ To Drink\n\n___________________________________\n\nMr. Carmack\n\nFrench horn, piano, drums, percussion, trumpet, bass, ukulele, guitar, melodica. Ableton, reason, protools, garageband, audacity, audition, max/msp. House, drum and bass, hip hop, trap, electro, complextro, progressive, backpack, bass, funk, synthpop, jazz, classical. Produce, mix, master, compose, arrange, edit, consult, review, and just be a fan. my life is music, and my work is reflective of my passion. i do not represent anyone, anything, or anyplace but myself. while you reach God, I will reach true understanding and knowledge through experience. neither are attainable, but hey, its the best i got.\n\nOpeners TBA SOON!\n\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\nFor VIP Bottle Service & Reservations please contact:\nVIP@liquidmadison.com !\n\nFor general info please email: info@liquidmadison.com\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\n\nConnect with Liquid:\nwww.liquidmadison.com\nhttps://www.facebook.com/liquidmadison\nhttps://twitter.com/LiquidMadison\nwww.instagram.com/liquidmadison\n\nLiquid\n624 University Avenue\nMadison, WI 53715",
            "distance": "430",
            "startTime": "2018-02-24T22:00:00-0600",
            "endTime": "2018-02-25T02:30:00-0600",
            "timeFromNow": 6595580,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC_EVENT",
            "ticketing": {
                "ticket_uri": "http://ticketf.ly/2k7n6bK"
            },
            "place": {
                "id": "1476959049287068",
                "name": "Liquid",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.075408452653,
                    "longitude": -89.396953582764,
                    "state": "WI",
                    "street": "624 University Ave",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 33,
                "declined": 0,
                "maybe": 143,
                "noreply": 30
            },
            "venue": {
                "id": "1476959049287068",
                "name": "Liquid",
                "about": "The most beautiful music venue in the top college town in the United States of America. ",
                "emails": [
                    "info@liquidmadison.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q89/s720x720/24883591_1901040113545624_6783919679032605798_o.jpg?oh=62db166450982f01bd46130fb517ca4a&oe=5AD4D5F7",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c50.0.200.200/p200x200/10400325_1571789449804027_9087242180092288577_n.jpg?oh=5109167c308d567d54fdf9499a6d9305&oe=5AD6A625",
                "category": "Live Music Venue",
                "categoryList": [
                    "Live Music Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.075408452653,
                    "longitude": -89.396953582764,
                    "state": "WI",
                    "street": "624 University Ave",
                    "zip": "53715"
                }
            }
        },
        {
            "id": "199454330600935",
            "name": "AfroVibe Soiree | Christmas Edition",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24173939_1896902790626023_4526021688240693371_o.jpg?oh=c17ce469645ff150d7cd1d2d3aa5cee4&oe=5ACF0BAA",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q83/c78.0.200.200/p200x200/24232620_1896902790626023_4526021688240693371_n.jpg?oh=374a742f07272d471f33c7a4a3a38add&oe=5A8BC728",
            "description": "AFROVIBE SOIREE | CHRISTMAS EDITION\nDJ Beatz | DJ Lyriks | DJ EasyE\nBar Special: $4 Heineken\nVIP Special: 2 for 1 bottles before midnight\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\nDoors Open at 10pm! \n18+ to Enter\n21+ to Drink\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\nFor VIP Bottle Service & Reservations please contact: vip@liquidmadison.com\nFor General Info please contact: info@liquidmadison.com\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\nConnect with Liquid:\nwww.liquidmadison.com\nwww.www.facebook.com/liquidmadison\nwww.twitter.com/liquidmadison\nwww.instagram.com/liquidmadison\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙",
            "distance": "430",
            "startTime": "2017-12-16T22:00:00-0600",
            "endTime": "2017-12-17T02:30:00-0600",
            "timeFromNow": 547580,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC_EVENT",
            "ticketing": {
                "ticket_uri": "http://ticketf.ly/2ibndyU"
            },
            "place": {
                "id": "1476959049287068",
                "name": "Liquid",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.075408452653,
                    "longitude": -89.396953582764,
                    "state": "WI",
                    "street": "624 University Ave",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 3,
                "declined": 0,
                "maybe": 1,
                "noreply": 0
            },
            "venue": {
                "id": "1476959049287068",
                "name": "Liquid",
                "about": "The most beautiful music venue in the top college town in the United States of America. ",
                "emails": [
                    "info@liquidmadison.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q89/s720x720/24883591_1901040113545624_6783919679032605798_o.jpg?oh=62db166450982f01bd46130fb517ca4a&oe=5AD4D5F7",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c50.0.200.200/p200x200/10400325_1571789449804027_9087242180092288577_n.jpg?oh=5109167c308d567d54fdf9499a6d9305&oe=5AD6A625",
                "category": "Live Music Venue",
                "categoryList": [
                    "Live Music Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.075408452653,
                    "longitude": -89.396953582764,
                    "state": "WI",
                    "street": "624 University Ave",
                    "zip": "53715"
                }
            }
        },
        {
            "id": "1100010590101396",
            "name": "Ugly Holiday Sweater Party",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/24174499_10156166421779683_3704658446430249313_n.jpg?oh=828cac4452e5f91d7d4ec2129e0886f5&oe=5AD17E4B",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/p200x200/24174499_10156166421779683_3704658446430249313_n.jpg?oh=6e8da5e423d9f1ce2a35c1e50a1d6632&oe=5A9240CC",
            "description": "Join us Friday, December 15th at 8pm-close for our annual Ugly Sweater Party!!\n\n**Wear an ugly sweater and get your first hot drink FREE!!**\n\nDRINK SPECIALS:\n$3 RumChata Hot Chocolates\n$3 Fireball Hot Ciders\n$3 Christmas Cookie Shots\n$3 Peppermint Stick Shots\nFeaturing:\n$3 Leinie's Snowdrift Vanilla Porter Pints\n\nPLUS:\nHoliday themed giveways and gifts!\nFireplace backdrop for group photos.\nFestive tunes and good cheer!\n\nAt all Nitty Gritty locations!\n\n*You must be wearing an ugly sweater to get your free drink because obviously we are super classy.",
            "distance": "463",
            "startTime": "2017-12-15T20:00:00-0600",
            "endTime": "2017-12-16T02:00:00-0600",
            "timeFromNow": 453980,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_DRINK",
            "place": {
                "id": "338183329682",
                "name": "Nitty Gritty - Madison",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.071925717891,
                    "longitude": -89.395726675209,
                    "state": "WI",
                    "street": "223 N Frances St",
                    "zip": "53703"
                }
            },
            "stats": {
                "attending": 13,
                "declined": 0,
                "maybe": 69,
                "noreply": 5
            },
            "venue": {
                "id": "338183329682",
                "name": "Nitty Gritty - Madison",
                "about": "The Nitty Gritty, a campus tradition for more than 44 years.  Known for great food, great service and most importantly, BIRTHDAYS!  Make sure to check back for updates and exciting specials!",
                "emails": [
                    "online@thegritty.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/11255549_10153400424634683_4086312535318938698_n.jpg?oh=270e6cfe7e69c09d18f46959680b77a8&oe=5AD06650",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/1390740_10152009720234683_766576133_n.jpg?oh=29dee275e68f969ff52681491ee97d42&oe=5AC903D0",
                "category": "American Restaurant",
                "categoryList": [
                    "American Restaurant",
                    "Bar & Grill",
                    "New American Restaurant"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.071925717891,
                    "longitude": -89.395726675209,
                    "state": "WI",
                    "street": "223 N Frances St",
                    "zip": "53703"
                }
            }
        },
        {
            "id": "165228120887005",
            "name": "Caliente Fridays | Dj Chamo",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24068548_862864317225142_8123129159957481734_o.jpg?oh=4f47bef673c12009e4d45cf601254195&oe=5AD07F42",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q87/c78.0.200.200/p200x200/24232288_862864317225142_8123129159957481734_n.jpg?oh=5b9ebfb6c9b80471e089bcf0ffcfa4d5&oe=5ACDAFA1",
            "description": "CALIENTE FRIDAYS | DJ CHAMO\n\n21+ Ladies Free ALL NIGHT\n21+ Guys $5 Before 1130pm \n18+ $15\n\nBAR SPECIALS:\n$3 Modelo Taps\n$4 House Margaritas\n$5 Premium tequila shots\n\nVIP: 2 for 1 bottles Before Midnight!\n\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\n\nDoors Open at 10pm!\n18+ To Enter / 21+ To Drink\n\nEntrance is through Liquid at 624 University Ave, next to the Double U\n\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\n\nFor VIP Bottle Service & Reservations please contact: vip@rubymadison.com\n\nFor General Info please contact: info@rubymadison.com\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\n\nConnect with Ruby:\n\nWeb: RubyMadison.com\n\nFacebook: RubyShowsMadison\n\nInstagram: RubyShowsMadison\n\nSnapchat: RubyShows\n\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙",
            "distance": "337",
            "startTime": "2017-12-29T22:00:00-0600",
            "endTime": "2017-12-30T02:00:00-0600",
            "timeFromNow": 1670780,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC_EVENT",
            "ticketing": {
                "ticket_uri": "http://www.shareasale.com/r.cfm?u=997767&b=234786&m=27601&afftrack&urllink=https%3A%2F%2Fwww.ticketfly.com%2Fpurchase%2Fevent%2F1602610%3Futm_source%3DfbTfly%26utm_medium%3DampOfficialEvent"
            },
            "place": {
                "id": "456772437834334",
                "name": "Ruby Madison",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.073198396563,
                    "longitude": -89.397055506706,
                    "state": "WI",
                    "street": "624 University Avenue",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 3,
                "noreply": 0
            },
            "venue": {
                "id": "456772437834334",
                "name": "Ruby Madison",
                "about": null,
                "emails": [
                    "info@rubymadison.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/23380351_854230031421904_4239758185261078391_n.jpg?oh=7c760eabae236e48c4ff16df5ccc2bf9&oe=5AC36D3E",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/22528034_841777262667181_6392829014515386042_n.jpg?oh=38e498cbf5640c34e112c0355058c81e&oe=5A8B1396",
                "category": "Live Music Venue",
                "categoryList": [
                    "Live Music Venue",
                    "Bar"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.073198396563,
                    "longitude": -89.397055506706,
                    "state": "WI",
                    "street": "624 University Avenue",
                    "zip": "53715"
                }
            }
        },
        {
            "id": "310621286104823",
            "name": "Caliente Fridays | Dj Chamo",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24068417_862864137225160_92015994396631391_o.jpg?oh=b215937db81729e87d214c55d9d57b57&oe=5A8A40CA",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q87/c78.0.200.200/p200x200/23915676_862864137225160_92015994396631391_n.jpg?oh=f2a47f049d58d823636cf5355e303944&oe=5AC36CEF",
            "description": "CALIENTE FRIDAYS | DJ CHAMO\n\n21+ Ladies Free ALL NIGHT\n21+ Guys $5 Before 1130pm \n18+ $15\n\nBAR SPECIALS:\n$3 Modelo Taps\n$4 House Margaritas\n$5 Premium tequila shots\n\nVIP: 2 for 1 bottles Before Midnight!\n\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\n\nDoors Open at 10pm!\n18+ To Enter / 21+ To Drink\n\nEntrance is through Liquid at 624 University Ave, next to the Double U\n\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\n\nFor VIP Bottle Service & Reservations please contact: vip@rubymadison.com\n\nFor General Info please contact: info@rubymadison.com\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙\n\nConnect with Ruby:\n\nWeb: RubyMadison.com\n\nFacebook: RubyShowsMadison\n\nInstagram: RubyShowsMadison\n\nSnapchat: RubyShows\n\n◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙",
            "distance": "337",
            "startTime": "2017-12-15T22:00:00-0600",
            "endTime": "2017-12-16T02:00:00-0600",
            "timeFromNow": 461180,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC_EVENT",
            "ticketing": {
                "ticket_uri": "http://www.shareasale.com/r.cfm?u=997767&b=234786&m=27601&afftrack&urllink=https%3A%2F%2Fwww.ticketfly.com%2Fpurchase%2Fevent%2F1602608%3Futm_source%3DfbTfly%26utm_medium%3DampOfficialEvent"
            },
            "place": {
                "id": "456772437834334",
                "name": "Ruby Madison",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.073198396563,
                    "longitude": -89.397055506706,
                    "state": "WI",
                    "street": "624 University Avenue",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 2,
                "noreply": 0
            },
            "venue": {
                "id": "456772437834334",
                "name": "Ruby Madison",
                "about": null,
                "emails": [
                    "info@rubymadison.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/23380351_854230031421904_4239758185261078391_n.jpg?oh=7c760eabae236e48c4ff16df5ccc2bf9&oe=5AC36D3E",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/22528034_841777262667181_6392829014515386042_n.jpg?oh=38e498cbf5640c34e112c0355058c81e&oe=5A8B1396",
                "category": "Live Music Venue",
                "categoryList": [
                    "Live Music Venue",
                    "Bar"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.073198396563,
                    "longitude": -89.397055506706,
                    "state": "WI",
                    "street": "624 University Avenue",
                    "zip": "53715"
                }
            }
        },
        {
            "id": "126628008041256",
            "name": "A Night at Hogwarts!",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-0/p480x480/22769801_1432231900223269_2250078771071458310_o.jpg?oh=a416ee5dd083ffde2f6325e840b3fc1f&oe=5A93E5AB",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c50.0.200.200/p200x200/22729235_1432231900223269_2250078771071458310_n.jpg?oh=f5a89a4f3761d462326fe9fddffdc5cb&oe=5A8F8859",
            "description": "Witches, Wizards, and Muggles are cordially invited to celebrate A Night at Hogwarts! \n\nJoin us in costume with your favorite Harry Potter Characters for a feast in the Great Hall and an evening of activities and crafts for all ages! \n\nRSVP by OWL - Email - Phone - by December 12th, 2017 to Ministry Admissions at 608.262.5023 or uclub@uclub.wisc.edu. \n\nChildren - $15 \nAdults - $25\n\nThe sorting hat awaits your arrival from the Hogwarts Express!",
            "distance": "246",
            "startTime": "2017-12-15T17:00:00-0600",
            "endTime": "2017-12-15T21:00:00-0600",
            "timeFromNow": 443180,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_FOOD",
            "ticketing": {
                "ticket_uri": "http://httpsuclubwisceduwp-contentuploads201710a-night-at-ho.ticketleap.com/a-night-at-hogwarts/"
            },
            "place": {
                "id": "112764122170060",
                "name": "The University Club",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.074785891263,
                    "longitude": -89.399231962247,
                    "state": "WI",
                    "street": "803 State St",
                    "zip": "53703"
                }
            },
            "stats": {
                "attending": 19,
                "declined": 0,
                "maybe": 278,
                "noreply": 24
            },
            "venue": {
                "id": "112764122170060",
                "name": "The University Club",
                "about": "Breakfast &  lunch \nMonday - Friday \n7:30am-2:00pm\n\nPrivate Events\nAfternoons & Weekends",
                "emails": [
                    "uclub@uclub.wisc.edu"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/22791527_1432212640225195_3589330873730216869_o.jpg?oh=5b8a7269a120f1333ab122c56d9389e1&oe=5AD4E80F",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/20663680_1360130637433396_5656002914549628724_n.jpg?oh=fb93322f48ca1dc212b202712251439d&oe=5ACF5142",
                "category": "Performance & Event Venue",
                "categoryList": [
                    "Performance & Event Venue",
                    "Restaurant",
                    "Community College"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.074785891263,
                    "longitude": -89.399231962247,
                    "state": "WI",
                    "street": "803 State St",
                    "zip": "53703"
                }
            }
        },
        {
            "id": "1915652008684998",
            "name": "FAFSA Frenzy",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/22861409_512499569105733_6116954757809789210_o.jpg?oh=5453bd4f717e021edc4cf8d28294cb35&oe=5ABCF08D",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c78.0.200.200/p200x200/22852937_512499569105733_6116954757809789210_n.jpg?oh=40d6df39f6f1cbf1ca7c28b01ac18a76&oe=5A927ADD",
            "description": "Join the Office of Student Financial Aid at one of our FAFSA Frenzy events. There will be Financial Aid Advisors available to help you finish your FAFSA and answer any financial aid questions you may have. There will be free free lunch!",
            "distance": "208",
            "startTime": "2017-12-13T12:00:00-0600",
            "endTime": "2017-12-13T14:00:00-0600",
            "timeFromNow": 252380,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "place": {
                "id": "443638959325128",
                "name": "UW-Madison Financial Aid",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0723067,
                    "longitude": -89.3988851,
                    "state": "WI",
                    "street": "333 East Campus Mall #9701",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 0,
                "noreply": 0
            },
            "venue": {
                "id": "443638959325128",
                "name": "UW-Madison Financial Aid",
                "about": "Official Facebook page for the Office of Student Financial Aid at the University of Wisconsin-Madison.\nCommunity standards:  http://www.wisc.edu/social-media-statement.php",
                "emails": [
                    "finaid@finaid.wisc.edu"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/18740566_443683982653959_8160353534966531031_n.jpg?oh=36ae65dda446b541a6e8ba1416fe8c85&oe=5A9471A8",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c12.0.320.320/s200x200/18892891_444252819263742_8709531418742787451_n.png?oh=f6a4e51e47d9dd93b8fbddb658f13c35&oe=5AD213FC",
                "category": "Financial Service",
                "categoryList": [
                    "Financial Service",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0723067,
                    "longitude": -89.3988851,
                    "state": "WI",
                    "street": "333 East Campus Mall #9701",
                    "zip": "53715"
                }
            }
        },
        {
            "id": "1332374263551822",
            "name": "FAFSA Frenzy",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/22792171_512500269105663_6183626770979574791_o.jpg?oh=58e3c36f97e596579f469efba43fb7ff&oe=5AD4B25A",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c78.0.200.200/p200x200/22853422_512500269105663_6183626770979574791_n.jpg?oh=428e9039aef2fecfcd2b3b92e5f583ff&oe=5A9355EF",
            "description": "Join the Office of Student Financial Aid at one of our FAFSA Frenzy events. There will be Financial Aid Advisors available to help you finish your FAFSA and answer any financial aid questions you may have. There  will be free donuts!",
            "distance": "208",
            "startTime": "2017-12-15T09:00:00-0600",
            "endTime": "2017-12-15T11:00:00-0600",
            "timeFromNow": 414380,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "place": {
                "id": "443638959325128",
                "name": "UW-Madison Financial Aid",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0723067,
                    "longitude": -89.3988851,
                    "state": "WI",
                    "street": "333 East Campus Mall #9701",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 0,
                "noreply": 0
            },
            "venue": {
                "id": "443638959325128",
                "name": "UW-Madison Financial Aid",
                "about": "Official Facebook page for the Office of Student Financial Aid at the University of Wisconsin-Madison.\nCommunity standards:  http://www.wisc.edu/social-media-statement.php",
                "emails": [
                    "finaid@finaid.wisc.edu"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/18740566_443683982653959_8160353534966531031_n.jpg?oh=36ae65dda446b541a6e8ba1416fe8c85&oe=5A9471A8",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c12.0.320.320/s200x200/18892891_444252819263742_8709531418742787451_n.png?oh=f6a4e51e47d9dd93b8fbddb658f13c35&oe=5AD213FC",
                "category": "Financial Service",
                "categoryList": [
                    "Financial Service",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0723067,
                    "longitude": -89.3988851,
                    "state": "WI",
                    "street": "333 East Campus Mall #9701",
                    "zip": "53715"
                }
            }
        },
        {
            "id": "1358150527605528",
            "name": "WIDA International Institute - Paris",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/18485449_1577595468925451_3354849144245077581_n.jpg?oh=4f8a98065086c1dff112846831b0be16&oe=5AC8E82C",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c73.0.200.200/p200x200/18485449_1577595468925451_3354849144245077581_n.jpg?oh=6ddd19cbb54b150db4d099b1bf547ac2&oe=5ACBE563",
            "description": "Participants in this institute will engage with components of the WIDA Standards and Assessment system and explore how it can be implemented in their context. During the institute, participants will use the WIDA standards framework to analyze the academic language demands of content standards at their school and create an instructional and assessment plan based on the needs of their students. Participants will also have opportunities to develop context-specific implementation plans for communication and collaboration with staff members",
            "distance": "220",
            "startTime": "2018-01-17T08:00:00+0100",
            "endTime": "2018-01-20T11:00:00+0100",
            "timeFromNow": 3236780,
            "isCancelled": false,
            "isDraft": false,
            "category": "OTHER",
            "ticketing": {
                "ticket_uri": "https://wisc.wceps.org/Conference/ParisInstitute"
            },
            "place": {
                "id": "107106142659949",
                "name": "American School of Paris",
                "location": {
                    "city": "Paris",
                    "country": "France",
                    "latitude": 48.8406,
                    "longitude": 2.1961,
                    "zip": "92210"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 0,
                "noreply": 0
            },
            "venue": {
                "id": "142876619064017",
                "name": "WIDA",
                "about": "WIDA advances academic language development and academic achievement for linguistically diverse students.",
                "emails": [
                    "help@wida.us"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/17038810_1492046014147064_5586535302976069043_o.jpg?oh=4c53cedca7f95b459515eed7e35f1a57&oe=5ABD44A2",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14212098_1296507140367620_5139877771217427261_n.jpg?oh=1c128b655b13a496428db951cceb2813&oe=5AC486FA",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07183,
                    "longitude": -89.40327,
                    "state": "WI",
                    "street": "1025 W Johnson St, # 23",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1745698939062092",
            "name": "WIDA International Symposium - Lima",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/18664450_1590496177635380_7196826955789950691_n.jpg?oh=c8ac041d4a6336d0af9d38dded354cf8&oe=5A8FF7B1",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c50.0.200.200/p200x200/18664450_1590496177635380_7196826955789950691_n.jpg?oh=0732482aace28a9216ae95a9dcdfb4a4&oe=5AD68320",
            "description": "The WIDA Symposium is a unique two-day forum for innovation, dialogue and reciprocal professional learning about the WIDA standards framework. The Symposium blends learning with dialogue, presenting an opportunity for experienced WIDA practitioners to deepen their knowledge and share their experience with other international school teachers.",
            "distance": "220",
            "startTime": "2018-04-07T08:00:00-0500",
            "endTime": "2018-04-08T16:00:00-0500",
            "timeFromNow": 10170380,
            "isCancelled": false,
            "isDraft": false,
            "category": "OTHER",
            "ticketing": {
                "ticket_uri": "https://wisc.wceps.org/Conference/LimaSymposium"
            },
            "place": {
                "id": "103756352996822",
                "name": "Colegio Franklin Delano Roosevelt, The American School of Lima",
                "location": {
                    "city": "Lima",
                    "country": "Peru",
                    "latitude": -12.078,
                    "longitude": -76.972
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 0,
                "noreply": 0
            },
            "venue": {
                "id": "142876619064017",
                "name": "WIDA",
                "about": "WIDA advances academic language development and academic achievement for linguistically diverse students.",
                "emails": [
                    "help@wida.us"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/17038810_1492046014147064_5586535302976069043_o.jpg?oh=4c53cedca7f95b459515eed7e35f1a57&oe=5ABD44A2",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14212098_1296507140367620_5139877771217427261_n.jpg?oh=1c128b655b13a496428db951cceb2813&oe=5AC486FA",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07183,
                    "longitude": -89.40327,
                    "state": "WI",
                    "street": "1025 W Johnson St, # 23",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "478609232530928",
            "name": "WIDA International Symposium - Mumbai",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18699441_1590488860969445_7571811262232491086_o.jpg?oh=9e5762ae9aacb5458b36188784dbf7bc&oe=5A9482BD",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c71.0.200.200/p200x200/18765802_1590488860969445_7571811262232491086_n.jpg?oh=cba09a66aaa2cf818f4289363df15d2f&oe=5AC30259",
            "description": "The WIDA Symposium is a unique two-day forum for innovation, dialogue and reciprocal professional learning about the WIDA standards framework. The Symposium blends learning with dialogue, presenting an opportunity for experienced WIDA practitioners to deepen their knowledge and share their experience with other international school teachers.",
            "distance": "220",
            "startTime": "2018-03-09T08:00:00+0530",
            "endTime": "2018-03-10T16:00:00+0530",
            "timeFromNow": 7626980,
            "isCancelled": false,
            "isDraft": false,
            "category": "OTHER",
            "ticketing": {
                "ticket_uri": "https://wisc.wceps.org/Conference/MumbaiSymposium"
            },
            "place": {
                "id": "105560486144091",
                "name": "American School of Bombay",
                "location": {
                    "city": "Mumbai",
                    "country": "India",
                    "latitude": 19.067777,
                    "longitude": 72.870692,
                    "street": "2-sf, G-Block, Bandra Kurla Complex Road",
                    "zip": "400051"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 0,
                "noreply": 0
            },
            "venue": {
                "id": "142876619064017",
                "name": "WIDA",
                "about": "WIDA advances academic language development and academic achievement for linguistically diverse students.",
                "emails": [
                    "help@wida.us"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/17038810_1492046014147064_5586535302976069043_o.jpg?oh=4c53cedca7f95b459515eed7e35f1a57&oe=5ABD44A2",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14212098_1296507140367620_5139877771217427261_n.jpg?oh=1c128b655b13a496428db951cceb2813&oe=5AC486FA",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07183,
                    "longitude": -89.40327,
                    "state": "WI",
                    "street": "1025 W Johnson St, # 23",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1206684442773544",
            "name": "WIDA International Institute - Kuala Lumpur",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18449478_1577597302258601_2440838304919142407_o.jpg?oh=af29e378f89129af43ccd98bc03999e5&oe=5ACEE007",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c78.0.200.200/p200x200/18425498_1577597302258601_2440838304919142407_n.jpg?oh=e6fc60c1cbbf3ab9f476e2aa4e0f3804&oe=5A92BCB1",
            "description": "Participants in this institute will engage with components of the WIDA Standards and Assessment system and explore how it can be implemented in their context. During the institute, participants will use the WIDA standards framework to analyze the academic language demands of content standards at their school and create an instructional and assessment plan based on the needs of their students. Participants will also have opportunities to develop context-specific implementation plans for communication and collaboration with staff members",
            "distance": "220",
            "startTime": "2018-03-01T08:00:00+0800",
            "endTime": "2018-03-04T16:00:00+0800",
            "timeFromNow": 6926780,
            "isCancelled": false,
            "isDraft": false,
            "category": "OTHER",
            "ticketing": {
                "ticket_uri": "https://wisc.wceps.org/Conference/KualaInstitute"
            },
            "place": {
                "id": "402693706039",
                "name": "Australian International School Malaysia (AISM)",
                "location": {
                    "city": "Seri Kembangan",
                    "country": "Malaysia",
                    "latitude": 3.0209183435185,
                    "longitude": 101.72386306167,
                    "street": "No 22 Jalan Anggerik, The MINES Resort City",
                    "zip": "43300"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 0,
                "noreply": 0
            },
            "venue": {
                "id": "142876619064017",
                "name": "WIDA",
                "about": "WIDA advances academic language development and academic achievement for linguistically diverse students.",
                "emails": [
                    "help@wida.us"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/17038810_1492046014147064_5586535302976069043_o.jpg?oh=4c53cedca7f95b459515eed7e35f1a57&oe=5ABD44A2",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14212098_1296507140367620_5139877771217427261_n.jpg?oh=1c128b655b13a496428db951cceb2813&oe=5AC486FA",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07183,
                    "longitude": -89.40327,
                    "state": "WI",
                    "street": "1025 W Johnson St, # 23",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "191116084785204",
            "name": "WIDA International Institute - Quito",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24131406_1810893848928944_6619016963574667588_n.jpg?oh=a456f6ea4759d88c631962eecd077a34&oe=5AC85415",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c83.0.200.200/p200x200/24131406_1810893848928944_6619016963574667588_n.jpg?oh=83539899ad1ce66417b77c7f45d1fc44&oe=5AD2A9B9",
            "description": "A four-day introduction to the WIDA English Language Development standards framework and assessments, this WIDA Institute will help schools to build capacity for a systemic approach to serving ELLs using the WIDA resources.",
            "distance": "220",
            "startTime": "2018-02-22T08:00:00-0500",
            "endTime": "2018-02-25T16:00:00-0500",
            "timeFromNow": 6368780,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "ticketing": {
                "ticket_uri": "https://wisc.wceps.org/Conference/QuitoInstitute"
            },
            "place": {
                "id": "114279435255086",
                "name": "Academia Cotopaxi",
                "location": {
                    "city": "Quito",
                    "country": "Ecuador",
                    "latitude": -0.15926522869565,
                    "longitude": -78.459954553478
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 0,
                "noreply": 0
            },
            "venue": {
                "id": "142876619064017",
                "name": "WIDA",
                "about": "WIDA advances academic language development and academic achievement for linguistically diverse students.",
                "emails": [
                    "help@wida.us"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/17038810_1492046014147064_5586535302976069043_o.jpg?oh=4c53cedca7f95b459515eed7e35f1a57&oe=5ABD44A2",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14212098_1296507140367620_5139877771217427261_n.jpg?oh=1c128b655b13a496428db951cceb2813&oe=5AC486FA",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07183,
                    "longitude": -89.40327,
                    "state": "WI",
                    "street": "1025 W Johnson St, # 23",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "230796034084796",
            "name": "WIDA International Symposium - Bangkok",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/18670864_1590485960969735_429115740089178159_n.jpg?oh=de08dd829dcf775fd248a3bedb639615&oe=5AD6E2B6",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c51.0.200.200/p200x200/18670864_1590485960969735_429115740089178159_n.jpg?oh=c7bf58e17eee4a59fa7b51d248c6afcb&oe=5AD47CFE",
            "description": "The WIDA Symposium is a unique two-day forum for innovation, dialogue and reciprocal professional learning about the WIDA standards framework. The Symposium blends learning with dialogue, presenting an opportunity for experienced WIDA practitioners to deepen their knowledge and share their experience with other international school teachers.",
            "distance": "220",
            "startTime": "2018-02-10T08:00:00+0700",
            "endTime": "2018-02-11T16:00:00+0700",
            "timeFromNow": 5288780,
            "isCancelled": false,
            "isDraft": false,
            "category": "OTHER",
            "ticketing": {
                "ticket_uri": "https://wisc.wceps.org/Conference/BangkokSymposium"
            },
            "place": {
                "id": "229111952532",
                "name": "NIST International School",
                "location": {
                    "city": "Bangkok",
                    "country": "Thailand",
                    "latitude": 13.747348355077,
                    "longitude": 100.56023554882,
                    "street": "36 Sukhumvit 15",
                    "zip": "10110"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 0,
                "noreply": 0
            },
            "venue": {
                "id": "142876619064017",
                "name": "WIDA",
                "about": "WIDA advances academic language development and academic achievement for linguistically diverse students.",
                "emails": [
                    "help@wida.us"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/17038810_1492046014147064_5586535302976069043_o.jpg?oh=4c53cedca7f95b459515eed7e35f1a57&oe=5ABD44A2",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14212098_1296507140367620_5139877771217427261_n.jpg?oh=1c128b655b13a496428db951cceb2813&oe=5AC486FA",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07183,
                    "longitude": -89.40327,
                    "state": "WI",
                    "street": "1025 W Johnson St, # 23",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "133214950688868",
            "name": "WUD Music Presents: Joan of Arc with Zed Kenzo (MKE)",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-0/p480x480/24879632_10155082246075976_3741420358218971060_o.jpg?oh=6b03a5f87c28ec0b16c40e7271296095&oe=5AD0612E",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q82/c50.0.200.200/p200x200/24909811_10155082246075976_3741420358218971060_n.jpg?oh=84fb92fb2de4c0a7587bafe6d7109cf4&oe=5ACF3923",
            "description": "Joan of Arc:\nJoan of Arc began in 1996 with the clear goal of “creating music for no audience.” And by this we meant that we were constant and voracious consumers and keen observers of many scenes contemporary at the time: hardcore, punk, post-punk, post-rock, riot girl, emo, math rock, no wave, noise, experimental, drone, free jazz, kraut rock, dub, glitch, drum and bass, psych, folk, and twee. All of these scenes had their own codes of membership and conformity. We set out knowing that our failure to be embraced by any prefab audience would be the proof of the singularity of our expression. \nhttps://www.facebook.com/joanfrc/\nhttps://joanofarc.bandcamp.com/\n\nZed Kenzo:\nZed Kenzo is the hip hop project from Milwaukee based musician Zechariah Ruffin. \nhttps://www.facebook.com/ZEDKENZO/\nhttps://zedkenzo.bandcamp.com/releases\n\nThis is a FREE show and a safer space. \nSaturday, February 16th / 9:00PM\nPresented by WUD Music.",
            "distance": "367",
            "startTime": "2018-02-16T21:00:00-0600",
            "endTime": "2018-02-17T00:00:00-0600",
            "timeFromNow": 5900780,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "place": {
                "id": "282222145136829",
                "name": "Der Rathskeller",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076554111653,
                    "longitude": -89.399729003319,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 35,
                "declined": 0,
                "maybe": 87,
                "noreply": 97
            },
            "venue": {
                "id": "156757065975",
                "name": "WUD Music",
                "about": "We Book Bands. Our free concerts are presented in Memorial Union and Union South at UW-Madison.\n\nSchedule: http://www.union.wisc.edu/WUD/music.aspx\n",
                "emails": [
                    "wudmusiccom@gmail.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/16508694_10154229712515976_2287216251790886679_n.jpg?oh=1ce74a72a79fd713b00dea2a81137e96&oe=5ABD40F4",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c20.0.200.200/p200x200/11265418_10152769152975976_1945127930387938170_n.jpg?oh=d10c86e48207692b892fb3f401de8c04&oe=5AD3A2D8",
                "category": "Performance & Event Venue",
                "categoryList": [
                    "Performance & Event Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0759549,
                    "longitude": -89.3989399,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1974684665881792",
            "name": "WUD Music Presents: Tiny Moving Parts w/ Mom Jeans & Oso Oso",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24131968_10155058458160976_2935351831777654062_o.jpg?oh=a4a173cd87ed8b2a1c9557607822eeb2&oe=5ABD1FC3",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c80.0.200.200/p200x200/24058726_10155058458160976_2935351831777654062_n.jpg?oh=5c7a760071f5009a56d8023dab716c14&oe=5A8D307C",
            "description": "WUD Music Presents:\nTINY MOVING PARTS\nw/ Mom Jeans & Oso Oso\nJanuary 26, 2018 at The Sett\nFREE SHOW\n\nTiny Moving Parts\nhttp://tinymovingparts.com/\nhttp://facebook.com/tinymovingparts/ \nhttps://www.twitter.com/tinymovingparts/\nhttps://www.instagram.com/tinymovingparts/\n\nMom Jeans\nhttps://momjeansca.bandcamp.com/\nhttps://www.facebook.com/momjeansca/\n\nOso Oso\nhttps://osoosoband.bandcamp.com/\nhttps://www.facebook.com/osoosoband/",
            "distance": "367",
            "startTime": "2018-01-26T21:00:00-0600",
            "endTime": "2018-01-27T00:00:00-0600",
            "timeFromNow": 4086380,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "place": {
                "id": "161404397252597",
                "name": "The Sett",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07136,
                    "longitude": -89.40788,
                    "state": "WI",
                    "street": "1308 W Dayton Ave.",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 91,
                "declined": 0,
                "maybe": 129,
                "noreply": 60
            },
            "venue": {
                "id": "156757065975",
                "name": "WUD Music",
                "about": "We Book Bands. Our free concerts are presented in Memorial Union and Union South at UW-Madison.\n\nSchedule: http://www.union.wisc.edu/WUD/music.aspx\n",
                "emails": [
                    "wudmusiccom@gmail.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/16508694_10154229712515976_2287216251790886679_n.jpg?oh=1ce74a72a79fd713b00dea2a81137e96&oe=5ABD40F4",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c20.0.200.200/p200x200/11265418_10152769152975976_1945127930387938170_n.jpg?oh=d10c86e48207692b892fb3f401de8c04&oe=5AD3A2D8",
                "category": "Performance & Event Venue",
                "categoryList": [
                    "Performance & Event Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0759549,
                    "longitude": -89.3989399,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "370850430003863",
            "name": "WUD Music Presents: Elysia Crampton",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24173024_10155061508770976_1813632373018431047_o.jpg?oh=923b4fe38b2c7537426e4b9dacf44f78&oe=5AD6192C",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c78.0.200.200/p200x200/24131196_10155061508770976_1813632373018431047_n.jpg?oh=81a8c744822373d17f45dd964e32f754&oe=5A92E80C",
            "description": "WUD Music Presents\n~ELYSIA CRAMPTON~\nFREE SHOW\nFriday 2/2 at 9pm @ Der Rathskeller\n\nArtist info:\n\nElysia Crampton is a transgender Aymara musician and poet. Her work takes heavy detail in bringing light to Aymara survival, queerness and its historic roots in Aymara history, naturalist themes, and utilization of samples and arrangements from varying sources.\n\nHer music has been described as “a surrealist, politically charged mix of jarring samples and influences ranging from cumbia to Southern rap/crunk to classical music” by AllMusic.\n\nElysia’s debut record, American Drift, was released in 2015 to critical acclaim. Her sophomore release, Elysia Crampton presents Demon City, released in 2016, was equally well-recieved by critics, and includes collaborations with fellow artists Chino Amobi, Lexxi, Why Be, & Rabit. \n\nhttps://soundcloud.com/eande\nhttps://www.facebook.com/EPCrampton/",
            "distance": "367",
            "startTime": "2018-02-02T21:00:00-0600",
            "endTime": "2018-02-03T00:00:00-0600",
            "timeFromNow": 4691180,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_MUSIC",
            "place": {
                "id": "156757065975",
                "name": "WUD Music",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0759549,
                    "longitude": -89.3989399,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 21,
                "declined": 0,
                "maybe": 113,
                "noreply": 28
            },
            "venue": {
                "id": "156757065975",
                "name": "WUD Music",
                "about": "We Book Bands. Our free concerts are presented in Memorial Union and Union South at UW-Madison.\n\nSchedule: http://www.union.wisc.edu/WUD/music.aspx\n",
                "emails": [
                    "wudmusiccom@gmail.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/16508694_10154229712515976_2287216251790886679_n.jpg?oh=1ce74a72a79fd713b00dea2a81137e96&oe=5ABD40F4",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c20.0.200.200/p200x200/11265418_10152769152975976_1945127930387938170_n.jpg?oh=d10c86e48207692b892fb3f401de8c04&oe=5AD3A2D8",
                "category": "Performance & Event Venue",
                "categoryList": [
                    "Performance & Event Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0759549,
                    "longitude": -89.3989399,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1939234496339433",
            "name": "WUD Music Presents: Diet Cig w/ Great Grandpa & The Spook School",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/23561421_10155024494140976_4939716648244343948_n.jpg?oh=424adea52b7b939bc99796ca300416fa&oe=5AC89CFC",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c0.18.200.200/p200x200/23561421_10155024494140976_4939716648244343948_n.jpg?oh=5cc1ee8671964edc1d375198ab149502&oe=5AC62DE0",
            "description": "WUD Music Presents\n~DIET CIG~\nw/ Great Grandpa\n& The Spook School\nFriday 2/2 - The Sett - 9PM\nFREE SHOW!\n\nAbout Diet Cig:\nhttps://dietcig.bandcamp.com/\nhttps://www.facebook.com/dietcigmusic/\n\nDiet Cig are here to have fun. They’re here to tear you away from the soul-sucking sanctity of your dumpster-fire life and replace it with pop-blessed punk jams about navigating the impending doom of adulthood when all you want is to have ice cream on your birthday.\n\nAlex Luciano (guitar and vocals) and Noah Bowman (drums) have been playing music together ever since Luciano interrupted the set of Bowman's previous band for a lighter. \n\n‘Swear I’m Good At This’ is the first full-length from the band and accumulates their tenacity for crafting life-affirming, relatable tales with a gutsy heart at their core. Luciano has the ability to write lyrics that are both vulnerable and badass, perfecting a storm of emotive reflection that creates a vision of a sweaty, pumped-up room screaming these lines in unison. Diet Cig make it okay to be the hot mess that you are.\n\nBut there’s also a deeper, more powerful fuck-you among the bangers that see Diet Cig grow into an unstoppable and inspiring force. “I’m not being dramatic, I’ve just fucking had it with the things that you say you think that I should be” spits Luciano on “Link in Bio”; “I am bigger than the outside shell of my body and if you touch it without asking then you’ll be sorry” she yells on “Maid Of The Mist”. It’s the sound of a band doing things on their own terms.\n\nWrapping up ‘Swear I’m Good At This’ on Halloween 2016, exactly two years after they finished recording ‘Over Easy’ on Halloween 2014, Diet Cig’s first, full-length LP validates the experiences of punks who aren’t always accepted first time around; the punks who throw their deuces up at the dominating bro-dudes and ignite the importance of owning everything that you are.",
            "distance": "367",
            "startTime": "2018-02-02T21:00:00-0600",
            "endTime": "2018-02-03T00:00:00-0600",
            "timeFromNow": 4691180,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "place": {
                "id": "161404397252597",
                "name": "The Sett",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07136,
                    "longitude": -89.40788,
                    "state": "WI",
                    "street": "1308 W Dayton Ave.",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 40,
                "declined": 0,
                "maybe": 78,
                "noreply": 160
            },
            "venue": {
                "id": "156757065975",
                "name": "WUD Music",
                "about": "We Book Bands. Our free concerts are presented in Memorial Union and Union South at UW-Madison.\n\nSchedule: http://www.union.wisc.edu/WUD/music.aspx\n",
                "emails": [
                    "wudmusiccom@gmail.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/16508694_10154229712515976_2287216251790886679_n.jpg?oh=1ce74a72a79fd713b00dea2a81137e96&oe=5ABD40F4",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c20.0.200.200/p200x200/11265418_10152769152975976_1945127930387938170_n.jpg?oh=d10c86e48207692b892fb3f401de8c04&oe=5AD3A2D8",
                "category": "Performance & Event Venue",
                "categoryList": [
                    "Performance & Event Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0759549,
                    "longitude": -89.3989399,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "867993963405055",
            "name": "WUD Music Presents: Palm w/ The Spirit of the Beehive",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24059659_10155055948860976_4058999169781268855_o.jpg?oh=39f0c21713c3bc41befc74a51d597ca5&oe=5A8F10B9",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c84.0.200.200/p200x200/24177040_10155055948860976_4058999169781268855_n.jpg?oh=cddb31419faa6d4ed4ebc1117c3cbfbb&oe=5AD44C75",
            "description": "WUD Music Presents:\n****PALM****\nw/ The Spirit of the Beehive\nFriday 2/23 at Der Rath\n9PM / FREE Show\n\nPALM\nhttps://www.facebook.com/palmmlap/\nhttps://palmnewyork.bandcamp.com/\nhttps://www.palmmlap.com/\n\nPalm plays rock music backwards. Eve Alpert and Kasra Kurt’s guitars occupy themselves most often with the pace-keeping work typical of a rhythm section. Meanwhile, Gerasimos Livitsanos’ bass and Hugo Stanley’s drums perform commentary and reportage from their deeply embedded positions at the front. The band is firmly attached to the physicality of rock, but not as much its tone; their instruments tend to sound like any number of things at any given time.\n\nNone of the members of Palm are formally trained on their instruments. The band formed in 2011 at college in Upstate New York, when high school friends Eve and Kasra met Gerasimos and Hugo. In those early days, the band was just beginning to forge its collective musical identity through experiments in recording and performing live.\n\nOn 2017’s Shadow Expert EP, they made use of the steady hand granted by a tireless touring schedule, cutting their songs to efficiencies of pop confection without sacrificing the avant-adventurism at the center. The effort was met with praise from such outlets as Pitchfork, Stereogum, Spin, and Tiny Mix Tapes, who likened the sound variously to Stereolab, Slint, Sonic Youth and Broadcast. With Rock Island (2018), Palm excuses the company of these myriad influences with a sly brush of a hand, ushering the listener into a new domain, thrillingly strange for all its familiarity.",
            "distance": "367",
            "startTime": "2018-02-23T21:00:00-0600",
            "endTime": "2018-02-23T23:59:00-0600",
            "timeFromNow": 6505580,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "place": {
                "id": "282222145136829",
                "name": "Der Rathskeller",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076554111653,
                    "longitude": -89.399729003319,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 62,
                "declined": 0,
                "maybe": 165,
                "noreply": 83
            },
            "venue": {
                "id": "156757065975",
                "name": "WUD Music",
                "about": "We Book Bands. Our free concerts are presented in Memorial Union and Union South at UW-Madison.\n\nSchedule: http://www.union.wisc.edu/WUD/music.aspx\n",
                "emails": [
                    "wudmusiccom@gmail.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/16508694_10154229712515976_2287216251790886679_n.jpg?oh=1ce74a72a79fd713b00dea2a81137e96&oe=5ABD40F4",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c20.0.200.200/p200x200/11265418_10152769152975976_1945127930387938170_n.jpg?oh=d10c86e48207692b892fb3f401de8c04&oe=5AD3A2D8",
                "category": "Performance & Event Venue",
                "categoryList": [
                    "Performance & Event Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0759549,
                    "longitude": -89.3989399,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1950379074977156",
            "name": "WUD Music Presents: Ggoolldd w/ Skyline Sounds and Newvices",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q87/s720x720/24254900_10155063880675976_1242457245445677545_o.jpg?oh=9e1ff998e1a3aa6147d00794cc98834a&oe=5AC66C0E",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q89/c129.0.200.200/p200x200/24174284_10155063880675976_1242457245445677545_n.jpg?oh=98648a99fc2ec772bf0ad959f159d689&oe=5ACB97B3",
            "description": "Join us in The Sett for Milwaukkee locals GGOOLLDD joined with Skyline Sounds and Newvices!\n\nThis is a free event, just show up and have fun!!!\n \n~GGOOLLDD~\nThe day after GGOOLLDD frontwoman Margaret Butler graduated from art school in Baton Rouge she packed a Uhaul and headed west. “I was like, yeah, I’m not going to live here anymore,” she recalls, laughing. Her first stop was Portland, Oregon, where she subsisted mostly on “ramen noodles and pumpkins people stole for me from Home Depot,” she remembers. “You sauté them down and add lots of black pepper and curry powder and soy sauce. It’s actually pretty good!” \n\nButler was riding high on that particular sense of freedom that comes when you’ve decided your life plan is to just say yes to pretty much everything. So you don’t really care that you’re broke and subsisting on stolen jack-o-lanterns, because you’re not in your suburban high school anymore, hiding your disdain for the cheerleaders. You’re in a weird and cool new town, hanging out with musicians and designers and artists. You’re free to mess around. Explore. And just when you’re starting to get a little over living “four people deep,” as Butler puts it, in your tiny apartment, another friend says, hey, come out to Wisconsin for a while. So you do. (Because: say yes!) And a while later, when, boozy in a bar one night, you hear some beats you think you’d like to write lyrics to, even though you’ve never so much as held a microphone in your life, you go for it. (Say. Yes.) And the next thing you know, you’re fronting a dynamic, dirty, synth-pop carnival of a band, hearing your single on the radio, and touring the country. \n\nThat’s Margaret Butler’s story. And that’s the story of her band, a group as inspired by the shimmery decadence of Queen as they are by the primal yowl of Black Sabbath as they are by the madcap joy of Yeah Yeah Yeahs. GGOOLLDD is one of the most resolutely celebratory rock acts to emerge in years.\n\n It’s not hard to understand how someone like Butler, a woman with seemingly limitless natural charisma and an obsession with dressing up in outrageous costumes (Halloween is her favorite holiday) would eventually find her way onstage, but the singer insists that rock stardom was never part of her plan. “I never even considered being a musician, I always wanted to be a clothing designer, or a chef,” she says. “I’ve always created with my hands.” Butler’s father is jeweler, and technically that’s what she was studying to be as well. But she learned all her really important college-years lessons bartending at the Spanish Moon, a legendary venue in Baton Rouge. “It was the only cool place to go and watch music in the city,” she says. “I got to see every amazing band as they were coming up, from TV On the Radio to Of Montreal to Dirty Projectors.” \n\nEven though Butler’s always loved music (she’s an obsessive of the first order) aside from the one time she “got really stoned and watched a John Bonham documentary then went right out and bought a pair of blue 1970s Ludwigs,” she never tried to become a serious musician. “I have great internal rhythm, I’m just too A.D.D. to sit down and actually play,” she says. “I own eight different instruments and I’ve gotten as far as like a week on each of them.” But her culture, her people, her tribe has always been connected to music. The people she met in and around the Spanish Moon were the ones she moved to Portland with, and it was through that world that she wound up, one random early fall afternoon in 2013, recording vocals, in the foyer of her house in Milwaukee, to what would become GGOOLLDD’s breakthrough debut single. “It was the first song we ever wrote and it was called ‘Gold,’” she recalls of the soulfully grimy track, on which bassist Nick Ziemann, guitarist Thomas Gilbert also played. (They added drummer Mark Stewart and synth player Nick Schubert soon after). “We were like, ‘Oh we need a name for the band - I guess it should be the same thing as the song title.” A quick Google search revealed “eight other bands named Gold,” but they were all basically unsearchable because the word is so widely used, “so we just decided to double letter it.” \n\nThinking nothing of it, they threw the song up on Bandcamp, planning to go back to their day jobs, but that’s when the serendipity hurricane began. “Somehow college radio picks it up,” Butler recalls. “And it starts getting really good responses. And then it’s on their list of top-ten-plays list, which is just insane.” So they figured, why not keep this going for a while? “We were like, this is fun! Let’s write like three more songs, do a cover, and throw a party for Halloween where we can all wear gold costumes!” The Halloween party is now the stuff of GGOOLLDD legend. “I was Santigold, but instead of dressing up like the singer, I made an all gold Santa costume,” Butler recalls, laughing. “We played a terrible show to eight-some people crammed into our attic and it was one of the funnest nights ever! After that, people just kept asking us to play.”\n\nButler, who had by this time opened a vintage clothing business with her friends, initially thought of the band mostly as a good excuse to express her most playful sartorial impulses. “We had our next show two weeks later so I made this weird tassled vinyl gold overlay on top of a crushed velvet gold romper,” she remembers, but it wasn’t long before they all realized this band had become more than an excuse to dress up. After that second show, CMJ picked up “Gold,” from the local Milwaukee radio station, 91.7, and from there, other college radio stations around the country began playing the track as well. The same un-mixed, un-mastered version they had made on Garage Band. “After about a year I was like, people like this a lot better and they want to pay me a lot more than they do for vintage clothing, so I think I’m just going to do this instead,” Butler recalls. “It’s been three years and we have ten songs that are out right now, and we’re working on the next album.” \n\nGGOOLLDD isn’t like other bands. They formed on whim, decided to play their first show mostly as an excuse to host a killer party, and they eschew the traditional gotta-get-a-record-deal game in favor of playing a lot of shows and releasing their own material. That sense of whimsy blended with resolute autonomy is all part of the signature GGOOLLDD aesthetic. And it feeds into their sound, especially lately.  “Secrets,” their new single, is a soaring banger that conjures wind-in-your-hair glittery romanticism. Co-produced and mixed by Ben H. Allen (MIA, Animal Collective) it reflects that core tension in GGOOLLDD between winging it and great artistry.  “I’m not going to lie, I’m great at writing a hook,” Butler says, and is quick to point out that her bandmates are “amazing,” musicians. “But if you ask me what I do, I’m going to tell you that I’m a performer before I tell you that I’m a musician.” She pauses and cracks up. “Unless you don’t know me at all,” she continues. “Then I’m going to say I’m a musician, because if I say I’m a performer, you’re going to automatically think that I’m a stripper, which is totally ok too but not my current profession.”\n\n~",
            "distance": "367",
            "startTime": "2018-02-09T21:00:00-0600",
            "endTime": "2018-02-09T23:59:00-0600",
            "timeFromNow": 5295980,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_MUSIC",
            "place": {
                "id": "161404397252597",
                "name": "The Sett",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07136,
                    "longitude": -89.40788,
                    "state": "WI",
                    "street": "1308 W Dayton Ave.",
                    "zip": "53715"
                }
            },
            "stats": {
                "attending": 8,
                "declined": 0,
                "maybe": 108,
                "noreply": 0
            },
            "venue": {
                "id": "156757065975",
                "name": "WUD Music",
                "about": "We Book Bands. Our free concerts are presented in Memorial Union and Union South at UW-Madison.\n\nSchedule: http://www.union.wisc.edu/WUD/music.aspx\n",
                "emails": [
                    "wudmusiccom@gmail.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/16508694_10154229712515976_2287216251790886679_n.jpg?oh=1ce74a72a79fd713b00dea2a81137e96&oe=5ABD40F4",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c20.0.200.200/p200x200/11265418_10152769152975976_1945127930387938170_n.jpg?oh=d10c86e48207692b892fb3f401de8c04&oe=5AD3A2D8",
                "category": "Performance & Event Venue",
                "categoryList": [
                    "Performance & Event Venue"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0759549,
                    "longitude": -89.3989399,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1936715629912093",
            "name": "Badger Game Day at Orange Bowl",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24959021_1840134276028115_5596115159922662222_o.png?oh=d820a7c1b0d6950f6fa83c2d4e6a9674&oe=5AD73291",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c170.0.200.200/p200x200/24312745_1840134276028115_5596115159922662222_n.png?oh=1f630c2cc5796b8f7d9596621ab8b783&oe=5A8E5B4F",
            "description": "Badger fans, show those Hurricanes how to tackle game day the Wisconsin way. Get game ready for Wisconsin’s first-ever appearance in the Orange Bowl at the BADGER HUDDLE® — packed with food, fun, and festivities, it’s the place for Badger fans to play. Score your individual tickets now to the official Wisconsin tailgate.\n\n347 Don Shula Dr., Miami Gardens, FL 33056 \n*Enter through the North Gate*",
            "distance": "506",
            "startTime": "2017-12-30T16:30:00-0500",
            "endTime": "2017-12-30T19:00:00-0500",
            "timeFromNow": 1733780,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_PARTY",
            "ticketing": {
                "ticket_uri": "http://www.uwalumni.com/event/badger-game-day-at-orange-bowl/"
            },
            "place": {
                "id": "543141959207192",
                "name": "New Miami Dolphins Stadium",
                "location": {
                    "city": "Miami Gardens",
                    "country": "United States",
                    "latitude": 25.94087,
                    "longitude": -80.24202,
                    "state": "FL",
                    "street": "347 Don Shula Dr, Miami Gardens, FL 33056",
                    "zip": "33056"
                }
            },
            "stats": {
                "attending": 9,
                "declined": 0,
                "maybe": 8,
                "noreply": 0
            },
            "venue": {
                "id": "438042739570616",
                "name": "Wisconsin Alumni",
                "about": "The Wisconsin Alumni Association is Where Badgers Belong. Because you’re not just any alumni. You’re Wisconsin alumni. http://uwalumni.com.",
                "emails": [
                    "wisalumni@uwalumni.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24313279_1836255409749335_6888987519205457677_o.png?oh=d56665292b80f8c4fcd1504840472f44&oe=5ABF1E7F",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/12565379_1071337969574420_4179169625451099776_n.png?oh=f28ff3fd72661e425a3046535eeccd14&oe=5AC380E5",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "School",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07683,
                    "longitude": -89.39764,
                    "state": "WI",
                    "street": "650 N Lake St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1529416143774434",
            "name": "Ask Adam and Eddy: Online Q&A with the creators of Once Upon a Time",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/24293937_1836318393076370_5178056662280543116_n.jpg?oh=8188a49a91988e3b6cfdebf77140ea37&oe=5ABCB4F0",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c33.0.200.200/p200x200/24293937_1836318393076370_5178056662280543116_n.jpg?oh=0723ed88027adfda871ef6de74cf6d60&oe=5A919605",
            "description": "A day before the curse falls upon the Kohl Center, join the Wisconsin Alumni Association for a live Q&A on our Facebook Page with Adam Horowitz and Edward Kitsis, the creators of ABC’s hit drama, Once Upon a Time, and the UW-Madison 2017 Winter Commencement speakers. *This is an online-only event*\n\nBe ready with your curses and questions at 11:30 a.m. on December 16! Visit our Facebook page to find the Facebook live event.",
            "distance": "506",
            "startTime": "2017-12-16T11:30:00-0600",
            "endTime": "2017-12-16T12:30:00-0600",
            "timeFromNow": 509780,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "place": {
                "id": "438042739570616",
                "name": "Wisconsin Alumni",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07683,
                    "longitude": -89.39764,
                    "state": "WI",
                    "street": "650 N Lake St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 2,
                "declined": 0,
                "maybe": 36,
                "noreply": 2
            },
            "venue": {
                "id": "438042739570616",
                "name": "Wisconsin Alumni",
                "about": "The Wisconsin Alumni Association is Where Badgers Belong. Because you’re not just any alumni. You’re Wisconsin alumni. http://uwalumni.com.",
                "emails": [
                    "wisalumni@uwalumni.com"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24313279_1836255409749335_6888987519205457677_o.png?oh=d56665292b80f8c4fcd1504840472f44&oe=5ABF1E7F",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/12565379_1071337969574420_4179169625451099776_n.png?oh=f28ff3fd72661e425a3046535eeccd14&oe=5AC380E5",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "School",
                    "College & University"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07683,
                    "longitude": -89.39764,
                    "state": "WI",
                    "street": "650 N Lake St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "198391124041851",
            "name": "Tuesday Night Movie Club: Timecrimes",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24799615_1529579490460817_1357831727949270483_o.jpg?oh=6353197765df0ed3f7e2a03a4106230f&oe=5ACD1593",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c91.0.200.200/p200x200/24991419_1529579490460817_1357831727949270483_n.jpg?oh=f985b962940101e7f646c849c1906c55&oe=5ACB76DC",
            "description": "Our monthly look back at Festivals past continues with the next Tuesday Night Movie Club event on Tuesday, January 16 at 7:00 pm in the Union South Marquee (1308 W. Dayton Street, Madison). Travel back in time with us for the sci-fi thriller, TIMECRIMES (WFF 2008), directed by Nacho Vigalondo, in Spanish with English subtitles.\n\nHere's an excerpt from the 2008 Film Guide:\n\n\"Drawing from the best traditions of classic science fiction and crime fiction, TIMECRIMES plays wicked games with the genre and the audience.\"\n\nWe hope to see you in the new year for this free, public event!\n\nTuesday Night Movie Club screenings are co-presented by the UW–Madison Arts Institute, UW-Madison Department of Communication Arts, and WUD Film.",
            "distance": "147",
            "startTime": "2018-01-16T19:00:00-0600",
            "endTime": "2018-01-16T21:00:00-0600",
            "timeFromNow": 3215180,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_FILM",
            "place": {
                "id": "237250729693706",
                "name": "Wisconsin Film Festival",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0733732,
                    "longitude": -89.4029689,
                    "state": "WI",
                    "street": "1050 University Ave",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 1,
                "declined": 0,
                "maybe": 22,
                "noreply": 11
            },
            "venue": {
                "id": "237250729693706",
                "name": "Wisconsin Film Festival",
                "about": "Festival dates: April 5 - 12, 2018",
                "emails": [
                    "info@wifilmfest.org"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/13350499_1018857218199716_7275066406016846249_o.jpg?oh=978dd87d765874a4364f8501557abd1a&oe=5AC9D9B9",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/13330959_1018137878271650_764616666236405725_n.jpg?oh=f02ed9493d2f353aeec1b55fc4235781&oe=5ACC2863",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "Festival"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.0733732,
                    "longitude": -89.4029689,
                    "state": "WI",
                    "street": "1050 University Ave",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "392442767840971",
            "name": "Paula Poundstone at the Pabst Theater",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/23334402_10154819596610426_409779123294508254_o.jpg?oh=b7b2ca26fdfc2c146ed6a996d5113221&oe=5AC6D5A7",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c91.0.200.200/p200x200/23316296_10154819596610426_409779123294508254_n.jpg?oh=e9f9602d30cc9d74a4e6896b0ae36bc5&oe=5AD60B71",
            "description": "Wisconsin Public Radio and WUWM 89.7 FM - Milwaukee Public Radio present\n\nPAULA POUNDSTONE\nSaturday, March 3rd\nDoors 7PM / Show 8PM\nThe Pabst Theater\n\nInsightful, thought-provoking humor from Paula Poundstone – live at The Pabst. Heard weekly on NPR’s ‘Wait Wait Don’t Tell Me’, you won’t want to miss Paula’s distinctive brand of wry, intelligent and witty standup comedy.\n\nPre-sale starts Wed. 11/15 @ Noon  - Code: JOKES\nPublic on sale starts Fri. 11/17 @ Noon",
            "distance": "126",
            "startTime": "2018-03-03T19:00:00-0600",
            "endTime": "2018-03-03T22:00:00-0600",
            "timeFromNow": 7189580,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_COMEDY_PERFORMANCE",
            "ticketing": {
                "ticket_uri": "http://pabsttheater.org/event/paulapoundstone2018/"
            },
            "place": {
                "id": "288048841540562",
                "name": "Pabst / Riverside / Turner Hall",
                "location": {
                    "city": "Milwaukee",
                    "country": "United States",
                    "latitude": 43.0411,
                    "longitude": -87.91042,
                    "state": "WI",
                    "street": "144 E. Wells St.",
                    "zip": "53202"
                }
            },
            "stats": {
                "attending": 3,
                "declined": 0,
                "maybe": 48,
                "noreply": 0
            },
            "venue": {
                "id": "122951382803",
                "name": "Wisconsin Public Radio",
                "about": "A partnership of ECB and University of Wisconsin Extension",
                "emails": [
                    "listener@wpr.org"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/17022231_10154521422737804_6032619225463298519_n.jpg?oh=f2599ec2fcdb81908719ef25b4049cdf&oe=5ACBFA2D",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c29.29.365.365/s200x200/1043856_10151580207112804_1164972841_n.jpg?oh=b87fbad2807a845dd7e438061ccf35d7&oe=5AD0D764",
                "category": "Broadcasting & Media Production Company",
                "categoryList": [
                    "Broadcasting & Media Production Company",
                    "Arts & Entertainment",
                    "Public & Government Service"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07265,
                    "longitude": -89.39977,
                    "state": "WI",
                    "street": "821 University Ave",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1530157487053195",
            "name": "Old Time Radio Drama - Wausau",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q81/s720x720/24172955_10155384267072804_2357648215791490519_o.jpg?oh=c0893c355cfde735f498cc39c977365c&oe=5A8AE20C",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q85/c78.0.200.200/p200x200/24296488_10155384267072804_2357648215791490519_n.jpg?oh=03297669989bac8ba3dddc205b1d34d0&oe=5AC1BA4C",
            "description": "Old Time Radio Drama Host Norman Gilliland, along with the 9XM Players, presents this family-friendly adaptation of Oscar Wilde’s “The Canterville Ghost” on Friday, February 9 at the James F. Veninga Theater in Wausau. Enjoy an evening of comedy, period costumes, sound effects, music and more.",
            "distance": "126",
            "startTime": "2018-02-09T19:00:00-0600",
            "endTime": "2018-02-09T21:30:00-0600",
            "timeFromNow": 5288780,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_THEATER",
            "ticketing": {
                "ticket_uri": "https://www.eventbrite.com/e/wprs-old-time-radio-drama-live-in-wausau-tickets-40150906442?utm_source=eb_email&utm_medium=email&utm_campaign=new_event_email&utm_term=viewmyevent_button"
            },
            "place": {
                "id": "122951382803",
                "name": "Wisconsin Public Radio",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07265,
                    "longitude": -89.39977,
                    "state": "WI",
                    "street": "821 University Ave",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 0,
                "noreply": 0
            },
            "venue": {
                "id": "122951382803",
                "name": "Wisconsin Public Radio",
                "about": "A partnership of ECB and University of Wisconsin Extension",
                "emails": [
                    "listener@wpr.org"
                ],
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/17022231_10154521422737804_6032619225463298519_n.jpg?oh=f2599ec2fcdb81908719ef25b4049cdf&oe=5ACBFA2D",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c29.29.365.365/s200x200/1043856_10151580207112804_1164972841_n.jpg?oh=b87fbad2807a845dd7e438061ccf35d7&oe=5AD0D764",
                "category": "Broadcasting & Media Production Company",
                "categoryList": [
                    "Broadcasting & Media Production Company",
                    "Arts & Entertainment",
                    "Public & Government Service"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07265,
                    "longitude": -89.39977,
                    "state": "WI",
                    "street": "821 University Ave",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1739502229692511",
            "name": "Free Preview Screening - Victoria Season 2 on Masterpiece",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q82/s720x720/24883579_10155260693056538_8867980830297603794_o.jpg?oh=9edac1ce6358f02a3f3f2b68d6abaf77&oe=5AC352AB",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q82/c78.0.200.200/p200x200/24232085_10155260693056538_8867980830297603794_n.jpg?oh=a34e896fffd56943234e777eb87edaea&oe=5AD30205",
            "description": "Join Wisconsin Public Television and UW-Fox Valley for an exclusive preview screening of the first hour of the second season of Victoria on Masterpiece. \n\nAttendance is free and open to everyone. Seating is limited and available on a first-come, first-seated basis. \n\n7 p.m. Wednesday, Jan. 10\nUniversity of Wisconsin-Fox Valley\nLecture Hall Room 1338\n1478 Midway Rd.\nMenasha\nDoors open at 6:30\n\nIn Season 2 of the highly rated Masterpiece series, Jenna Coleman (Doctor Who) returns as the young queen who wants it all — romance, power, an heir and personal freedom. Joining the cast in the new season is legendary actress Dame Diana Rigg (Game of Thrones), who plays the Duchess of Buccleuch, the court’s new Mistress of the Robes. Tom Hughes reprises his role as the queen’s dashing consort, Prince Albert, and Rufus Sewell returns as the smoldering Lord Melbourne. \n\nPlease join us for this free one-hour sneak peek of the premiere episode at UW-Fox Valley. \n\nThe two-hour season premiere airs 8 p.m. Sunday, Jan. 14 on WPT.",
            "distance": "126",
            "startTime": "2018-01-10T19:00:00-0600",
            "endTime": "2018-01-10T20:30:00-0600",
            "timeFromNow": 2696780,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_FILM",
            "place": {
                "id": "7871731537",
                "name": "Wisconsin Public Television",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07265,
                    "longitude": -89.39977,
                    "state": "WI",
                    "street": "821 University Ave",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 8,
                "noreply": 0
            },
            "venue": {
                "id": "7871731537",
                "name": "Wisconsin Public Television",
                "about": "Explore program schedules and watch full programs online at http://wpt.org",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/23632881_10155197922036538_3765569168630450492_o.jpg?oh=6346b9ef1d3d6df01bc5e07c95089557&oe=5AC7C3FB",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/22141304_10155090609376538_2723579615848797359_n.jpg?oh=32e2de1143ae98ab1786500f176bba7e&oe=5AC80967",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "Broadcasting & Media Production Company",
                    "Public Service"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07265,
                    "longitude": -89.39977,
                    "state": "WI",
                    "street": "821 University Ave",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "137074866998068",
            "name": "Free Preview Screening - Victoria Season 2 on Masterpiece",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q82/s720x720/24879745_10155256111186538_1915338286673276564_o.jpg?oh=6a81a65d2fc99923a69a9f46094549ef&oe=5A8C262B",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q82/c78.0.200.200/p200x200/24862201_10155256111186538_1915338286673276564_n.jpg?oh=16b4409d18c89ac1419a6fa313964aee&oe=5AC49640",
            "description": "Join Wisconsin Public Television, Wisconsin Public Radio and the Eau Claire Children's Theatre for an exclusive preview screening of the first hour of the second season of Victoria on Masterpiece. \n\nAttendance is free and open to everyone. Seating is limited and available on a first-come, first-seated basis. \n\n7 p.m. Thursday, Jan. 4\nThe Oxford at the Eau Claire Children's Theatre\n1814 North Oxford Ave., Eau Claire\nDoors open at 6\nRefreshments will be available to purchase to benefit Eau Claire Children's Theatre programs.\n\nIn Season 2 of the highly rated Masterpiece series, Jenna Coleman (Doctor Who) returns as the young queen who wants it all — romance, power, an heir and personal freedom. Joining the cast in the new season is legendary actress Dame Diana Rigg (Game of Thrones), who plays the Duchess of Buccleuch, the court’s new Mistress of the Robes. Tom Hughes reprises his role as the queen’s dashing consort, Prince Albert, and Rufus Sewell returns as the smoldering Lord Melbourne. \n\nPlease join us for this free one-hour sneak peek of the premiere episode in Eau Claire. WPT, WPR and the Eau Claire Children's Theater will also hold a drawing on-site with a chance to win prizes from each organization.\n\nThe two-hour season premiere airs 8 p.m. Sunday, Jan. 14 on WPT.",
            "distance": "126",
            "startTime": "2018-01-04T19:00:00-0600",
            "endTime": "2018-01-04T20:30:00-0600",
            "timeFromNow": 2178380,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_FILM",
            "place": {
                "id": "122499284427313",
                "name": "Eau Claire Children's Theatre",
                "location": {
                    "city": "Eau Claire",
                    "country": "United States",
                    "latitude": 44.81782,
                    "longitude": -91.50995,
                    "state": "WI",
                    "street": "1814 N Oxford Ave",
                    "zip": "54703-5171"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 12,
                "noreply": 0
            },
            "venue": {
                "id": "7871731537",
                "name": "Wisconsin Public Television",
                "about": "Explore program schedules and watch full programs online at http://wpt.org",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/23632881_10155197922036538_3765569168630450492_o.jpg?oh=6346b9ef1d3d6df01bc5e07c95089557&oe=5AC7C3FB",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/22141304_10155090609376538_2723579615848797359_n.jpg?oh=32e2de1143ae98ab1786500f176bba7e&oe=5AC80967",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "Broadcasting & Media Production Company",
                    "Public Service"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07265,
                    "longitude": -89.39977,
                    "state": "WI",
                    "street": "821 University Ave",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1368039866657510",
            "name": "Celebrating Nancy Zieman Open House",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24232131_10155249967431538_8060109141374621611_n.jpg?oh=f3c8c22363fda8f5af6babb44ede0dfd&oe=5AC52940",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c100.0.200.200/p200x200/24232131_10155249967431538_8060109141374621611_n.jpg?oh=a7fa50b97b153fb8427b327fcdf50404&oe=5A8E55D9",
            "description": "Wisconsin Public Television and Nancy Zieman Productions invite you to join us in the Wisconsin Public Television studios – the location of the Sewing With Nancy set – for a free open house: Celebrating Nancy Zieman. \n\nRSPVs are requested via the Eventbrite link below, but not required. \n\nNancy Zieman, longtime host of Sewing With Nancy and co-founder of Quilt Expo, passed away on Nov. 14, 2017. An educator, author, pattern maker, television producer, entrepreneur and innovator, Nancy inspired millions of sewing and quilting enthusiasts throughout her career. She hosted Sewing With Nancy, the longest-running sewing series on television, since 1982.\n\nDuring this event in honor of Nancy's life and legacy, you'll have the opportunity to view the Sewing With Nancy set, get a behind-the-scenes look at the production of Sewing With Nancy, view a tribute video and visit with the production staff who worked with Nancy over the years. You will also be invited to share your memories of Nancy – and how she inspired you – in a feedback booth.\n\nThis free celebration in honor of Nancy is an open-house format: Please feel free to arrive and leave at any time. Coffee and light fare will be served.\n\nThe Wisconsin Public Television studios are located on the second floor of Vilas Hall (821 University Ave.). Enter down the stairs next to the loading dock entrance on the Park Street side of the building. Staff will be on hand to point you in the right direction. Please allow extra time for traveling and parking.\n\nWe recommend you park in one of the following areas (see map below):\n\n•\tLake Street Ramp (415 N. Lake St.): Hourly parking: $1.30/hour (Take the Park St. exit, turn right on Dayton St., turn left on Lake St.)\n\n•\tFluno Center/UW Lot 83 (601 University Ave): $12 for the day, or $1 each half hour for the first two hours and $1 per hour after the first two hours (Take the Park St. exit, turn right on Dayton St., turn left on Frances St.)\n\n•\tGrainger Hall/UW Lot 7 (975 University Ave): $12 for the day, or $1 every half hour for the first two hours and $1 per hour after the first two hours (Take the Park St. exit, turn left on Dayton St., turn right on Brooks St.)\n\n•\tUW Lot 46 (301 N. Lake St.): $1 each half hour for the first two hours and $1 per hour after the first two hours (Take the Park St. exit, turn right on Johnson St., turn left on Lake St.\n\nFor additional parking information, please call 608-263-6666 or visit transportation.wisc.edu. \n\nIf you have any questions or need disability accommodations, please let us know. We look forward to welcoming you to the event.",
            "distance": "126",
            "startTime": "2017-12-16T09:00:00-0600",
            "endTime": "2017-12-16T12:00:00-0600",
            "timeFromNow": 500780,
            "isCancelled": false,
            "isDraft": false,
            "category": null,
            "ticketing": {
                "ticket_uri": "https://www.eventbrite.com/e/celebrating-nancy-zieman-open-house-tickets-40881917917?aff=efbeventtix"
            },
            "place": {
                "id": "7871731537",
                "name": "Wisconsin Public Television",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07265,
                    "longitude": -89.39977,
                    "state": "WI",
                    "street": "821 University Ave",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 9,
                "declined": 0,
                "maybe": 34,
                "noreply": 0
            },
            "venue": {
                "id": "7871731537",
                "name": "Wisconsin Public Television",
                "about": "Explore program schedules and watch full programs online at http://wpt.org",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/23632881_10155197922036538_3765569168630450492_o.jpg?oh=6346b9ef1d3d6df01bc5e07c95089557&oe=5AC7C3FB",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/22141304_10155090609376538_2723579615848797359_n.jpg?oh=32e2de1143ae98ab1786500f176bba7e&oe=5AC80967",
                "category": "Nonprofit Organization",
                "categoryList": [
                    "Nonprofit Organization",
                    "Broadcasting & Media Production Company",
                    "Public Service"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.07265,
                    "longitude": -89.39977,
                    "state": "WI",
                    "street": "821 University Ave",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "201983830346060",
            "name": "La Boheme (University Opera)",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24784955_10156200862614252_1216102506741249332_o.jpg?oh=8334a1fb9682d0aa0fdabf7c9db2ac7a&oe=5A922F18",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c69.0.200.200/p200x200/24294327_10156200862614252_1216102506741249332_n.jpg?oh=9e64d7f99b153caf1a761bb1345aaaf3&oe=5ACC93AD",
            "description": "University Opera will present a special production in the Memorial Union’s Shannon Hall of Puccini’s timeless masterpiece, La Bohème.  Arguably the world’s most beloved opera, La Bohème  blends riveting theatre and achingly beautiful music.",
            "distance": "386",
            "startTime": "2018-02-23T19:30:00-0600",
            "endTime": "2018-02-25T21:30:00-0600",
            "timeFromNow": 6500180,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_THEATER",
            "ticketing": {
                "ticket_uri": "https://uwim-internet.choicecrm.net/templates/UWIM/?prod=UWCA"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 6,
                "declined": 0,
                "maybe": 265,
                "noreply": 222
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "432538697138799",
            "name": "Laurie Anderson",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/q86/s720x720/18121558_10155299856804252_5033877822320417651_o.jpg?oh=e1c2f7cde640c1cd32c8f1072e91ad92&oe=5A8EC326",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c64.0.200.200/p200x200/18118927_10155299856804252_5033877822320417651_n.jpg?oh=0e2afa634ca8645b67aba2b9c07b354a&oe=5AC53B3A",
            "description": "Tickets go on sale August 24, 2017.\n\nLaurie Anderson is one of America’s most renowned creative pioneers. Known primarily for her multimedia presentations, she is also a visual artist, composer, poet, photographer, filmmaker, electronics whiz, vocalist and instrumentalist.\n\nAnderson’s recording career launched in 1980 with her first album, O Superman, rising to number two on the British pop charts, and has since toured the United States and internationally with shows ranging from simple spoken word to elaborate multimedia spectacles. Her visual work has been presented in major museums throughout the US and Europe. \n\nIn 2002, Anderson was appointed the first artist-in-residence of NASA, an experience which culminated in her 2004 touring solo performance \"The End of the Moon.\" The Museum of Modern Art acquired her “Self-Playing Violin” which was featured in the “Making Music” exhibition in 2008. The next year she was featured in the PBS special “Art 21” at the Guggenheim Museum. As a composer, Anderson has contributed music to films, dance pieces by Bill T. Jones, Trisha Brown, Molissa Fenley and a score for Robert LePage’s Far Side of the Moon. She also has created pieces for NPR and the BBC.",
            "distance": "386",
            "startTime": "2018-02-09T19:30:00-0600",
            "endTime": "2018-02-09T21:00:00-0600",
            "timeFromNow": 5290580,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/laurie-anderson/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 99,
                "declined": 0,
                "maybe": 517,
                "noreply": 26
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "278260849287990",
            "name": "Becca Stevens",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18121716_10155299863584252_7542411486412505225_o.jpg?oh=1eb983563f800a5e64c15f617de76b89&oe=5AC4DE5D",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c64.0.200.200/p200x200/18193970_10155299863584252_7542411486412505225_n.jpg?oh=2791306086c7c97bfef86a43e5476b2c&oe=5ABE95AA",
            "description": "Tickets go on sale August 24, 2017.\n\nWith unmatched style and intricate melodies, Becca Stevens is making waves in the international music scene. Drawing comparisons to Björk and St. Vincent, Stevens combines pop, rock, funk, and R&B to create new and thought provoking rhythms and lyrics.\n\nWith four albums as lead vocalist and fifteen as a guest, she has collaborated with artists such as Esperanza Spalding, José James, Dayna Stephens, and, most recently, Snarky Puppy. Stevens has been listed as one of Kurt Elling's favorite jazz vocalists, dubbed \"New York's best kept secret\" by The New York Times, and called \"a great musical mind\" by PopMatters.com. Her complex and dreamy music has received consistent praise. Loved by critics and audiences alike, Stevens' take on pop and jazz is a thrilling interpretation of modern musical composition.",
            "distance": "386",
            "startTime": "2018-02-14T20:00:00-0600",
            "endTime": "2018-02-14T21:00:00-0600",
            "timeFromNow": 5724380,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/becca-stevens-valentines-day-show/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 4,
                "declined": 0,
                "maybe": 41,
                "noreply": 1
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1845822565740860",
            "name": "The King's Singers",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18121892_10155299912839252_6441377354346851572_o.jpg?oh=854e8237680c2b02dadea83b36db0143&oe=5A91D12D",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c50.0.200.200/p200x200/18118743_10155299912839252_6441377354346851572_n.jpg?oh=b0ca244ecf56da3227a19ae729a5404d&oe=5ACCD1BB",
            "description": "Save 25% by purchasing a Concert Series subscription by June 1, 2017.\n\nThe King's Singers are widely acclaimed for their charm and diverse repertoire which includes over 200 commissioned works from the world's leading composers. Additionally, The King's Singers have commissioned arrangements from a breadth of musical genres: jazz standards to pop chart hits, medieval motets to Renaissance madrigals, even encouraging young composers to write new scores.\n\nThe King's Singers were founded in 1968 at King's College in Cambridge, England and are about to celebrate their 50th anniversary. They continually wow audiences across the globe in over 125 concerts a year. The group has won two Grammy awards and have entered the Gramophone Hall of Fame for their vocal artistry and excellence. \n\n“Their vocal production was effortless, stylistically varied and beautifully blended.” - Patrick Rucker, The Washington Post",
            "distance": "386",
            "startTime": "2018-04-14T19:30:00-0500",
            "endTime": "2018-04-14T21:00:00-0500",
            "timeFromNow": 10816580,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/the-kings-singers/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 12,
                "declined": 0,
                "maybe": 82,
                "noreply": 0
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1544533962285496",
            "name": "Dublin Irish Dance",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18193062_10155299846434252_6328015516462476747_o.jpg?oh=f97b8988c547f9254842ef1d7a690ff5&oe=5ABED3B3",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c64.0.200.200/p200x200/18119050_10155299846434252_6328015516462476747_n.jpg?oh=8f18a4098f7cb54b4796554b3c959542&oe=5A91EE49",
            "description": "Tickets go on sale August 24, 2017.\n\nDublin Irish Dance presents \"Stepping Out.\" Choreographed by Dublin-born Anthony Fallon, an all-star cast traces the immigrant journey from pre-famine Ireland through the Great Hunger and crossing the Atlantic Ocean to arrive at Ellis Island. Fallon believes tradition cannot survive without change and Irish music and dance are captivating examples. \"Stepping Out\" celebrates the evolution of Celtic culture and and redefines Irish dance.",
            "distance": "386",
            "startTime": "2018-02-02T20:00:00-0600",
            "endTime": "2018-02-02T21:00:00-0600",
            "timeFromNow": 4687580,
            "isCancelled": false,
            "isDraft": false,
            "category": "THEATER_DANCE",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/dublin-irish-dance/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 1,
                "declined": 0,
                "maybe": 26,
                "noreply": 0
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1541172252624720",
            "name": "Alasdair Fraser and Natalie Haas",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18192995_10155299850034252_7777312775816153390_o.jpg?oh=27d907e7bcd0640ff4ac0714531184d9&oe=5ACD17A1",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c54.0.200.200/p200x200/18119258_10155299850034252_7777312775816153390_n.jpg?oh=ad84c64655706758a37dc76518284058&oe=5AC7144D",
            "description": "Tickets go on sale August 24, 2017.\n\nThe duo of Alasdair Fraser and Natalie Haas blends Scottish tradition with cutting-edge string explorations. Their full-spectrum repertoire ranges from intimate chamber music to energetic dance; their lively and unexpected performances are celebrated internationally, with The Scotsman calling them \"A positive joy.\"\n\nDubbed \"the Michael Jordan of Scottish fiddling\" by the San Francisco Examiner, Alasdair Fraser has curated a recording and performance career of over thirty years. He has been honored with many accolades, such as a place in the Scottish Traditional Music Hall of Fame. His projects include a feature on the Titanic soundtrack and countless performances sponsored by the British and California Arts Councils.\n\nCalifornian Natalie Haas is one of the most popular cellists performing today. A graduate of the Julliard School of Music, she has collaborated with such fiddlers as Mark O'Connor, Natalie MacMaster, and Celtic supergroup Solas. Her and Fraser's unlikely partnership debut recording won the Scots Trad Music's \"Album of the Year\" award.",
            "distance": "386",
            "startTime": "2018-02-08T19:30:00-0600",
            "endTime": "2018-02-08T21:00:00-0600",
            "timeFromNow": 5204180,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/alasdair-fraser-and-natalie-haas-2/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 2,
                "declined": 0,
                "maybe": 22,
                "noreply": 1
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1441285145989118",
            "name": "Manitowoc Minute’s Charlie Berens: Keep 'er Movin",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/23467202_10156118882464252_2420277056458941583_o.jpg?oh=b952a786a6d1052e0cb07bbb8d09fa02&oe=5AC1B844",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c78.0.200.200/p200x200/23472364_10156118882464252_2420277056458941583_n.jpg?oh=51e3ab8e4d53a8e3a22391c0c02638de&oe=5A8BBA9B",
            "description": "TICKETS ON SALE FROM NOVEMBER 17, 2017\n\nHey der guy! Charlie here from da Manitowoc Minute. You’ve seen me on your Facebook page, now see me in real life. I’ll be on stage for a night of stand up comedy, news, music and a couple two three other surprises. So go ahead guy, buy a ticket real quick once and keep ‘er movin.\n\nCharlie Berens is a comedian, Emmy winning journalist and host of the Manitowoc Minute. As a UW-Madison junior, Charlie started reporting for MTV’s Choose or Lose. Since then he’s worked with Fox, CBS Sports Network, and Funny or Die to name a few. Charlie was born and raised along with his 11 other brothers and sisters right here in Wisconsin.",
            "distance": "386",
            "startTime": "2018-01-26T20:00:00-0600",
            "endTime": "2018-01-26T23:00:00-0600",
            "timeFromNow": 4082780,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_COMEDY_PERFORMANCE",
            "ticketing": {
                "ticket_uri": "http://go.wisc.edu/q44fed"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 93,
                "declined": 0,
                "maybe": 293,
                "noreply": 32
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1499856653463269",
            "name": "FST Theatre with Wendy Jones Hill",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/24173053_10156189575294252_8258360125276197711_o.jpg?oh=a3b52c75f3d68af5f14030c00e30978f&oe=5A941248",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q82/c64.0.200.200/p200x200/24232100_10156189575294252_8258360125276197711_n.jpg?oh=82c010c8b66583a06279ef5e3cb0409b&oe=5AC447F2",
            "description": "Madison native, Wendy Jones Hill, visits the Play Circle to recreate an array of her most famous and acclaimed performances. Along with Taras Nahirniak on piano, Les Thimmig on woodwinds, and special guest vocalist, Jace Nichols, the group will be performing pieces from Stephen Sondheim, Rodgers and Hammerstein, and Cole Porter",
            "distance": "386",
            "startTime": "2018-02-24T19:30:00-0600",
            "endTime": "2018-02-24T22:30:00-0600",
            "timeFromNow": 6586580,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_MUSIC",
            "ticketing": {
                "ticket_uri": "https://uwim-internet.choicecrm.net/templates/UWIM/index.php?&event_ids=3887%2C0"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 0,
                "declined": 0,
                "maybe": 2,
                "noreply": 0
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1281128712003548",
            "name": "Eighth Blackbird",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18192528_10155299867199252_5886464168667923216_o.jpg?oh=2fe4d48f1566736ff40e9ba10992ddcb&oe=5AC49059",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c47.0.200.200/p200x200/18194088_10155299867199252_5886464168667923216_n.jpg?oh=6d825558aa8e743c567bba72495e304e&oe=5AC2FF28",
            "description": "Save 25% by purchasing a Concert Series subscription by June 1, 2017.\n\nEighth Blackbird's mission is to move music forward through innovative performance, advocate for new music by living composers, and create a legacy of guiding an emerging generation of musicians. Launched in 1996, this Chicago-based group has earned its status as “a brand-name…defined by adventure, vibrancy and quality….known for performing from memory, employing choreography and collaborations with theater artists, lighting designers and even puppetry artists” (Detroit Free Press).\n\nThe ensemble won the 1998 Concert Artists Guild Competition and over the course of two decades has commissioned and premiered the work of David T. Little, Steven Mackey, Missy Mazzoli, and Pulitzer Prize-winning composer Steve Reich. Their 20th anniversary in 2016 included a fourth Grammy Award for Best Small/Ensemble/Chamber Music Performance and the prestigious MacArthur Award for Creative and Effective Institutions, followed by Chamber Music America’s inaugural Visionary Award, and Musical America’s Ensemble of the Year in 2017. \n\nEighth Blackbird served as Music Director of the 2009 Ojai Music Festival, has held residencies at the Curtis Institute of Music and at the University of Chicago, and it holds an ongoing Ensemble-in-Residence position at the University of Richmond. The 2015-16 season featured a pioneering residency at Chicago’s Museum of Contemporary Art: a living installation with open rehearsals, performances, guest artists, and public talks. Eighth Blackbird launches its most ambitious educational venture yet in June 2017: The Blackbird Creative Lab, an annual tuition-free two-week intensive for emerging artists at the Besant Hill School in Ojai, California.\n\n“…one of the smartest, most dynamic contemporary classical ensembles on the planet.” — Chicago Tribune",
            "distance": "386",
            "startTime": "2018-03-03T19:30:00-0600",
            "endTime": "2018-03-03T21:00:00-0600",
            "timeFromNow": 7191380,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/eighth-blackbird/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 11,
                "declined": 0,
                "maybe": 65,
                "noreply": 3
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "412761869109201",
            "name": "Travel Adventure Film: How to Travel the World for Free",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18193206_10155299871309252_6983654148145447948_o.jpg?oh=75dfeb542925ec6b38b6a97cea8a9d5f&oe=5ABD8A0F",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c69.0.200.200/p200x200/18194172_10155299871309252_6983654148145447948_n.jpg?oh=90e45bb55c5302f5ca37a121676eab74&oe=5A8E0EAE",
            "description": "Tickets go on sale August 24, 2017.\n\nThe Travel Adventure Film Series returns to Shannon Hall.",
            "distance": "386",
            "startTime": "2018-03-05T19:30:00-0600",
            "endTime": "2018-03-05T21:00:00-0600",
            "timeFromNow": 7364180,
            "isCancelled": false,
            "isDraft": false,
            "category": "ART_FILM",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/travel-adventure-film-how-to-travel-the-world-for-free/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 1,
                "declined": 0,
                "maybe": 22,
                "noreply": 1
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "730681783778970",
            "name": "Cécile McLorin Salvant",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/18199417_10155299878574252_1491466962154516158_n.jpg?oh=c2b35569c2f6d383e6beb103590a923d&oe=5AD58B1D",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c46.0.200.200/p200x200/18199417_10155299878574252_1491466962154516158_n.jpg?oh=fb307f8d1003593179a5744937c3c260&oe=5A8F231B",
            "description": "Tickets go on sale August 24, 2017.\n\nBorn and raised in Miami, Florida to a French mother and Haitian father, Grammy-winning jazz vocalist Cécile McLorin Salvant is taking the jazz world by storm. She began taking classical piano lessons at age 5 and started singing in the Miami Choral Society at age 8. In 2007, Cécile moved to Aix-en-Provence, France, to study law as well as classical and baroque voice at the Darius Milhaud Conservatory. It was there that she started learning about jazz. She recorded her first album, Cécile, with Jean-François Bonnel's Paris Quintet. A year later, she won the Thelonious Monk competition in Washington D.C. Popular in Europe and the United States, she has performed in numerous clubs, concert halls, and festivals. \n\nIn 2014, her second album, WomanChild, was nominated for a Grammy and 2015’s For One To Love won the Grammy Award for Best Jazz Vocal Album. Over the years, Salvant has developed a curiosity for the history of American music, and the connections between jazz, vaudeville, blues, and folk music. She carefully chooses her repertoire, oftentimes unearthing rarely recorded, forgotten songs, with strong stories.",
            "distance": "386",
            "startTime": "2018-03-08T20:00:00-0600",
            "endTime": "2018-03-08T21:00:00-0600",
            "timeFromNow": 7625180,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/cecile-mclorin-salvant/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 10,
                "declined": 0,
                "maybe": 51,
                "noreply": 0
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1072076942922567",
            "name": "Marcia Légère Student Play Festival",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18121459_10155299874744252_5030401390630545349_o.jpg?oh=9102af775708aaa081c29aec7f08328b&oe=5AD684C3",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c50.0.200.200/p200x200/18198432_10155299874744252_5030401390630545349_n.jpg?oh=be0d4f1afea2bcfd3bbe4b3ddd10826d&oe=5A8C9E4A",
            "description": "The Wisconsin Union Theater is proud to present the 27th annual Marcia Légère Student Play Festival.\n\nStudent talent and the art of live theatrical performance are celebrated during this one-act play festival. Thanks to Marcia Légère, once a UW-Madison student playwright and later a successful theater professional, students involved in all aspects of the dramatic arts present their talents. Légère submitted her work to the Wisconsin Playwrights Contest and ultimately won the contest, resulting in her work being performed at the Wisconsin Union Theater in 1945. Thanks to a generous contribution more than 20 years ago for this free festival, Légère's support of student work and passion for performance carries on. \n\nThe Marcia Légère Student Play Festival is free and open to the public.",
            "distance": "386",
            "startTime": "2018-03-11T19:30:00-0500",
            "endTime": "2018-03-11T21:00:00-0500",
            "timeFromNow": 7878980,
            "isCancelled": false,
            "isDraft": false,
            "category": "THEATER_DANCE",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/marcia-legere-student-play-festival-2/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 1,
                "declined": 0,
                "maybe": 5,
                "noreply": 0
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1829185974074551",
            "name": "Jessica Lang Dance",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18192740_10155299883029252_69298716209869061_o.jpg?oh=db8caca45bd2e4ad6e590b55515be85b&oe=5A8B3A96",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c77.0.200.200/p200x200/18057708_10155299883029252_69298716209869061_n.jpg?oh=f847b0dfc7f7dcd5ca543964cafa43b5&oe=5ABFC2D2",
            "description": "Tickets go on sale August 24, 2017.\n\nSince the company's inception, marked by a Joyce Theater Artist Residency in 2011, Jessica Lang Dance (JLD) energizes audiences by immersing them in the beauty of movement and music. JLD's performances have been named among the best dance events of the year by major publications in Dallas, Chicago, Kansas City and Boston. JLD has wowed audiences at world-renowned venues and festivals including Jacob's Pillow Dance Festival, Brooklyn Academy of Music's Next Wave Festival, New York City Center's Fall for Dance Festival, and the John F. Kennedy Center for the Performing Arts. \n\nChoreographer and artistic director Jessica Lang has created more than 95 works with companies worldwide since 1999 including the American Ballet Theatre, Pacific Northwest Ballet, Birmingham Royal Ballet (2013 Manchester Theatre Award nominee), the National Ballet of Japan and Joffrey Ballet. She was the 2014 Bessie Award recipient, a 2015 New York City Center Fellow and a 2016 Fellow at NYU Center for Ballet and the Arts. She has choreographed a San Francisco Opera production of Aida and is the Emerging Movement Artist in Residence for Dance Films Association for 2017.\n\nJessica Lang “has a knack for conceiving a complete universe in each dance — distinctive in its look and mood, sound and atmosphere… Lang's visual sense is remarkable, and it has come to characterize her aesthetic.” - The Los Angeles Times",
            "distance": "386",
            "startTime": "2018-03-17T20:00:00-0500",
            "endTime": "2018-03-17T21:00:00-0500",
            "timeFromNow": 8399180,
            "isCancelled": false,
            "isDraft": false,
            "category": "THEATER_DANCE",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/jessica-lang-dance/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 2,
                "declined": 0,
                "maybe": 37,
                "noreply": 0
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "694764120725264",
            "name": "Ukulele Orchestra of Great Britain",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18121886_10155299887844252_3350569112852165331_o.jpg?oh=914ce026487aebe2a3dd9e17450969c9&oe=5A8DC152",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c64.0.200.200/p200x200/18118718_10155299887844252_3350569112852165331_n.jpg?oh=95fedf78efa4249b60159c06a0968733&oe=5A89DC1E",
            "description": "Tickets go on sale August 24, 2017.\n\nDue to popular demand following their excellent performance in April 2015, The Ukulele Orchestra of Great Britain returns to Shannon Hall!\n\nThe ensemble brings a special bit of fun to the stage, getting the audience to laugh and sway. Its members perform everything, from classical to disco, contemporary bluegrass and country to Lady Gaga, bringing their own quirky flair to each show. Their music has been featured in films, on stage and on commercials. The ensemble has played with the likes of Madness, David Arnold, The Ministry of Sound, Yusuf Islam (Cat Stevens) and The Kaiser Chiefs.\n\nThe Ukulele Orchestra of Great Britain was formed in 1985 and has been performing ever since their first gig, which turned out to be an instant sell-out. By 1988 they had released an LP, appeared on BBC TV, played at WOMAD and recorded a BBC Radio 1 session. The current ensemble has been playing together for over 20 years, and has become something of a national institution. The Orchestra has given thousands of sold-out concerts across the world, performing sell-out shows at the Sydney Opera House, The Royal Albert Hall and Carnegie Hall.\n\n“It all amounted to superbly tuneful fun. Performing on ukuleles ranging in size from a conventional soprano instrument to a tubby electric-bass model, the seven orchestra members on hand mixed instrumental panache and affable singing with no small amount of inimitably British drollery.” - The New York Times",
            "distance": "386",
            "startTime": "2018-04-08T20:00:00-0500",
            "endTime": "2018-04-08T21:00:00-0500",
            "timeFromNow": 10299980,
            "isCancelled": false,
            "isDraft": false,
            "category": "MUSIC",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/ukulele-orchestra-of-great-britain/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 4,
                "declined": 0,
                "maybe": 48,
                "noreply": 8
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "1939248252977495",
            "name": "Travel Adventure Film: China: Beyond the Great Wall",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18156700_10155299893749252_269393564904232731_o.jpg?oh=a3026ea2308a02197ca1e622cb0896b6&oe=5AD32588",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c69.0.200.200/p200x200/18119597_10155299893749252_269393564904232731_n.jpg?oh=0df51de775a7805670bacbf7419b2dd6&oe=5AC116DD",
            "description": "Tickets go on sale August 24, 2017.\n\nFor three months, adventure filmmaker and author Karin Muller traveled alone throughout China - living with Tibetan nomadic yak herders, Mongolian wrestlers, and Buddhist warrior monks. Through the eyes of businessmen and farmers, domestic workers and line-dancing matriarchs, Karin documented China’s extraordinary social, economic, and political transformation - and some of unintended consequences: China’s massive urban migration, ghost cities, and fake iPhone markets. Muller was invited behind the scenes of a traveling opera troop, professional cricket fights, and Shanghai’s dating market. She even stumbled upon China’s real-life Harry Potter.\n\nChina: Beyond the Great Wall explores the many faces of this vast and complicated land - and reveals the kindness and humanity of a people too often defined only by statistics and stereotypes.\n\nJoin us for the world premier of this film!",
            "distance": "386",
            "startTime": "2018-04-09T19:30:00-0500",
            "endTime": "2018-04-09T21:00:00-0500",
            "timeFromNow": 10384580,
            "isCancelled": false,
            "isDraft": false,
            "category": "ART_FILM",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/travel-adventure-film-china-by-karin-muller/"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 1,
                "declined": 0,
                "maybe": 11,
                "noreply": 0
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        },
        {
            "id": "760174347487306",
            "name": "Le Vent Du Nord",
            "type": "public",
            "coverPicture": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/20645306_10155717097439252_6572368937689329851_o.jpg?oh=61301605f51e9ec8779f154c68ae0e10&oe=5ACBBFD7",
            "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-0/c69.0.200.200/p200x200/20664773_10155717097439252_6572368937689329851_n.jpg?oh=472032619a0d7e0c9bf577df75e098e3&oe=5ACE1AEF",
            "description": "FREE on the Terrace.\n\nAmbassadors of French Canadian music, Le Vent du Nord has blazed a musical path of its own.  The band delivers catchy songs and tunes, some taken from Québec's traditional folk repertoire while others are original compositions. With a rich and varied instrumentation, well-polished musical arrangements and wonderful vocals which connect their Québecois roots to the wider world, Le Vent du Nord captures the energy and joy of a Saturday night kitchen party.\n\nThe band has received glowing critical acclaim, matched by a collection of awards and recognitions. It has been nominated for six Canadian Folk Music Awards, won a Canadian Grammy, and took home \"Artist of the Year\" at the North American Folk Alliance Gala. In 2012 they were inducted into the Order of the Porcupine Hall of Fame on popular Toronto radio show Back to the Sugar Camp!\n\nVivacious performers, Le Vent du Nord is sure to please all live music fans.",
            "distance": "386",
            "startTime": "2018-05-05T20:00:00-0500",
            "endTime": "2018-05-05T22:00:00-0500",
            "timeFromNow": 12632780,
            "isCancelled": false,
            "isDraft": false,
            "category": "EVENT_MUSIC",
            "ticketing": {
                "ticket_uri": "https://union.wisc.edu/events-and-activities/event-calendar/event/le-vent-du-nord/?stage=Stage"
            },
            "place": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            },
            "stats": {
                "attending": 5,
                "declined": 0,
                "maybe": 18,
                "noreply": 0
            },
            "venue": {
                "id": "12873559251",
                "name": "Wisconsin Union Theater",
                "about": "Enjoy a behind-the-scenes look at our current, upcoming, (and even past!) productions. Enter to win prizes and get breaking news. Like us to join the conversation!",
                "emails": null,
                "coverPicture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/24796398_10156215144469252_6623084432247015972_n.jpg?oh=75237b49b431f253c3200a81f908f16d&oe=5A8AC321",
                "profilePicture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15203278_10154770837484252_4762251007444450787_n.jpg?oh=88e1ab2c3434d72453e3b4ca1003cf18&oe=5ACFBF53",
                "category": "Campus Building",
                "categoryList": [
                    "Campus Building",
                    "Performance & Event Venue",
                    "Performance Art"
                ],
                "location": {
                    "city": "Madison",
                    "country": "United States",
                    "latitude": 43.076511347887,
                    "longitude": -89.400299948432,
                    "state": "WI",
                    "street": "800 Langdon St",
                    "zip": "53706"
                }
            }
        }
    ],
        "metadata": {
        "venues": 66,
            "venuesWithEvents": 14,
                "events": 49
    }
});