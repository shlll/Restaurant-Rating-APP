angular.module("RestaurantRating")
    .controller("RestaurantRatingController", ["RestaurantRatingServices", function (rating) {
        this.restaurants = rating.restaurants;
     
        this.increment = function (restaurant) {
            if (restaurant.level <= 4) {
                restaurant.level++;
                }
        }
        this.decrement = function (restaurant) {
        if (restaurant.level >= 1) {
                restaurant.level--;
            }
        }
    }])