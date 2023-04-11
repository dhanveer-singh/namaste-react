import React from "react";
import ReactDOM from "react-dom/client";
/*
Header
    -Logo
    -Nav items
Body
    -Search
    -RestaurantsContainer
    -RestaurantsCard
        - img
        - name of res, star Rating, cuisine, delivery time
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const resList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "3241",
            "name": "Meghana Foods",
            "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
            "city": "1",
            "area": "Ashok Nagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
            "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "North Indian",
                "Chinese",
                "Seafood"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 2.4000000953674316,
            "slugs": {
                "restaurant": "meghana-foods-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
            "locality": "Residency Road",
            "parentId": 635,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "3241",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 2.4000000953674316,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.5",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "75878",
            "name": "CakeZone",
            "uuid": "4c06dba9-a8b1-42a4-abb7-4d17cf1e46d2",
            "city": "1",
            "area": "Rajajinagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "cb746e0398ab4a49eef386a5bb4c0647",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Sweets",
                "Ice Cream"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "slaString": "34 MINS",
            "lastMileTravel": 7.5,
            "slugs": {
                "restaurant": "cakezone-rajajinagar-1-rajajinagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "RAJDRIVA #119,1ST MAIN ROAD, 1ST BLOCK, DR. RAJKUMAR ROAD, RAJAJINAGAR BANGALORE, Rajajinagara , B.B.M.P West, Karnataka-560010",
            "locality": "Dr Rajkumar Road",
            "parentId": 7003,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT150 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹150 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 7100,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 7100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "7100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6468023~p=4~eid=00000187-7178-dd56-2ba0-355d00a70438",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "75878",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "lastMileTravel": 7.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "30531",
            "name": "Hotel Empire",
            "uuid": "b6535450-6f4c-434f-8cae-425317928346",
            "city": "1",
            "area": "Brigade Road",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
            "cuisines": [
                "North Indian",
                "Kebabs",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 2.0999999046325684,
            "slugs": {
                "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
            "locality": "",
            "parentId": 475,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "10% off",
                "shortDescriptionList": [
                    {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "10% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "30531",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 2.0999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "121603",
            "name": "Kannur Food Point",
            "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
            "city": "1",
            "area": "Tavarekere",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
            "cuisines": [
                "Kerala",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 6.699999809265137,
            "slugs": {
                "restaurant": "kannur-food-point-btm",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
            "locality": "SG Palya",
            "parentId": 20974,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 6400,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 6400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "6400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "121603",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 6.699999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "228338",
            "name": "Plan B",
            "uuid": "435834cd-a7d7-4fcd-a39d-55a96aeef884",
            "city": "1",
            "area": "New BEL Road",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "0207f3fb8daed932368fdc42e768c49a",
            "cuisines": [
                "American"
            ],
            "tags": [],
            "costForTwo": 110000,
            "costForTwoString": "₹1100 FOR TWO",
            "deliveryTime": 39,
            "minDeliveryTime": 39,
            "maxDeliveryTime": 39,
            "slaString": "39 MINS",
            "lastMileTravel": 7.800000190734863,
            "slugs": {
                "restaurant": "planb-malleshwaram-malleshwaram",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "No. 62/1, 2nd Floor, 80 Feet Road, Devasandra, Armanenagar, Bangalore - 560054",
            "locality": "New BEL Road",
            "parentId": 2212,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "10% off",
                "shortDescriptionList": [
                    {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "10% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 7100,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 7100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "7100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6459361~p=7~eid=00000187-7178-dd56-2ba0-355e00a70703",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "228338",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "lastMileTravel": 7.800000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "354531",
            "name": "Burger Seigneur",
            "uuid": "09b83964-93a3-45a2-8445-8f9987e01f2d",
            "city": "1",
            "area": "St. Marks Road",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "t8qo8yuimdpduzbozybj",
            "cuisines": [
                "American",
                "Continental",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 120000,
            "costForTwoString": "₹1200 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
                "restaurant": "burger-seigneur-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "NO 1, SOBHA, BURGER SEIGNEUR, GROUND FLOOR, 50 ST MARKS ROAD, BANGALORE 560001, B.B.M.P East (Karnataka) - 560001",
            "locality": "St. Marks Road",
            "parentId": 12095,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6307771~p=10~eid=00000187-7178-dd56-2ba0-355f00a70a02",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "354531",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "lastMileTravel": 1.399999976158142,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.4",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "428",
            "name": "Biryani Pot",
            "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
            "city": "1",
            "area": "Btm Layout",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
            "cuisines": [
                "North Indian",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 7.5,
            "slugs": {
                "restaurant": "biryani-pot-madiwala-junction-btm",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
            "locality": "Maruti Nagar",
            "parentId": 21798,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "20% off",
                "shortDescriptionList": [
                    {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "20% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 7100,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 7100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "7100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "428",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "lastMileTravel": 7.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "534235",
            "name": "Cheesecake & Co.",
            "uuid": "6da20d08-e548-4654-9e27-616761693e3d",
            "city": "1",
            "area": "Koramangala",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "3f2df3913b36bb12d60d0b95b209dbbb",
            "cuisines": [
                "Bakery"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 5.800000190734863,
            "slugs": {
                "restaurant": "cheesecake-and-co-koramangala-koramangala",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "PROPERTY NO. 9/C, 3RD MAIN OPP,  KORAMANGALA POLICE STATION  BANGALORE, , Bangalore South, Bangalore  Urban, Karnataka",
            "locality": "6th Block",
            "parentId": 387417,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6303477~p=13~eid=00000187-7178-dd56-2ba0-356000a70d6f",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "5.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "534235",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 5.800000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.5",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "418389",
            "name": "Auntie Fung's",
            "uuid": "49b76eeb-4daa-420a-9323-120673a39310",
            "city": "1",
            "area": "Indiranagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "rwwc0xufjuiityzgpfme",
            "cuisines": [
                "Chinese",
                "Thai",
                "Asian"
            ],
            "tags": [],
            "costForTwo": 60000,
            "costForTwoString": "₹600 FOR TWO",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "slaString": "36 MINS",
            "lastMileTravel": 6.400000095367432,
            "slugs": {
                "restaurant": "auntie-fung’s-indiranagar-indiranagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "NO.4009, 1ST FLOOR, 100FT ROAD, HAL 2ND STAGE, INDIRANAGAR BANGALORE, INDIA, Sarvagna Nagar , B.B.M.P East, Karnataka-560008",
            "locality": "HAL 2nd Stage",
            "parentId": 1290,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 6400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "6400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6393882~p=16~eid=00000187-7178-dd56-2ba0-356100a71019",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "418389",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "lastMileTravel": 6.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "210945",
            "name": "Royal Restaurant",
            "uuid": "9b33bca4-65e6-4a26-af3e-f47c4476ed4d",
            "city": "1",
            "area": "Shivajinagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
            "cuisines": [
                "Chinese",
                "North Indian",
                "Tandoor"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 2.9000000953674316,
            "slugs": {
                "restaurant": "royal-restaurant-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Broadway Road Police Station, HKP Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India",
            "locality": "Sulthangunta",
            "parentId": 2896,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "35% off",
                "shortDescriptionList": [
                    {
                        "meta": "35% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    },
                    {
                        "meta": "Free Phirni on orders above ₹490",
                        "discountType": "Freebie",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "35% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    },
                    {
                        "meta": "Free Phirni on orders above ₹490",
                        "discountType": "Freebie",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "35% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "35% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    },
                    {
                        "meta": "Free Phirni on orders above ₹490",
                        "discountType": "Freebie",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.9 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "210945",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 2.9000000953674316,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
]

const RestaurantsCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, deliveryTime, costForTwo } = resData.data
    console.log(resData);
    return (
        <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${resData.data.cloudinaryImageId}`} alt="res-logo" className="res-logo" />
            <p>{name}</p>
            <b>{cuisines.join(',')}</b>
            <p>{avgRating} Stars</p>
            <p>{deliveryTime} Minutes</p>
            <p>₹{costForTwo / 100} FOR TWO</p>
        </div>
    )
}

const AppBody = () => {
    return (
        <div className="appBody">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantsCard resData={restaurant} key={restaurant.data.id} />)
                }
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            <AppBody />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
