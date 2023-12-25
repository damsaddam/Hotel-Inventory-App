export class Room {
    totalRooms: number;
    bookedRooms: number;

    constructor(totalRooms: number, bookedRooms: number) {
        this.totalRooms = totalRooms;
        this.bookedRooms = bookedRooms;
    }
}

export class RoomList {
    roomNumber?: string;
    roomType: string;
    amenities: string;
    image?: string;
    price: number;
    checkinTime: any;
    checkoutTime: any;
    rating: string;

    constructor(roomNumber: string, roomType: string, amenities: string, image: string, price: number, checkinTime: any, checkoutTime: any, rating: string) {
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.amenities = amenities;
        this.image = image;
        this.price = price;
        this.checkinTime = checkinTime;
        this.checkoutTime = checkoutTime;
        this.rating = rating;
    }
}