angular.module("RestaurantRating")
    .service("RestaurantRatingServices", function () {
        this.restaurants = [{
            name: "Restaurant 1",
            description: "This is the Korean restaurant",
            imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/09/7a/6b/d7/doorae-korean-restaurant.jpg",
            level: 3,
        }, {
            name: "Restaurant 2",
            description: "This is the Chinese restaurant",
            imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/07/06/10/f7/ming-palace-chinese-restaurant.jpg",
            level: 3,
        }, {
            name: "Restaurant 3",
            description: "This is the Indian restaurant",
            imageUrl: "https://tce-live2.s3.amazonaws.com/media/media/42bfb23f-38e3-4198-9336-5aa22b75093e.jpg",
            level: 3,
        }, {
            name: "Restaurant 4",
            description: "This is the American restaurant",
            imageUrl: "https://s3-media3.fl.yelpcdn.com/bphoto/FvVtMYUhBDGFmm5t-Qxjag/ls.jpg",
            level: 3,
        }, {
            name: "Restaurant 5",
            description: "This is the Canadian restaurant",
            imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/03/1c/a3/a7/canadian-honker-restaurant.jpg",
            level: 3,
        }]

    })