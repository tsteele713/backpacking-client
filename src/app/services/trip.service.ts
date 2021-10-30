import { Injectable } from "@angular/core";
import { Trip } from "../models/trip.model";

@Injectable()
export class TripService {


    constructor() { }

    getFutureTrips(): Trip[][] {

        return [
            [
                {
                seqId: '12345',
                name: 'some name',
                initialTransportationType: 'Flying',
                departureDate: '2022-12-30',
                description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa',
                destinationAirport: 'LAS'

            },
            {
                seqId: '12345',
                name: 'Some other name',
                initialTransportationType: 'Driving',
                departureDate: '2022-01-29',
                description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa'
            },
            {
                seqId: '12345',
                name: 'One last Trip',
                initialTransportationType: 'Driving',
                departureDate: '2022-01-29',
                description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa'
            }
        ],
            [
                {
                seqId: '12345',
                name: 'One last Trip',
                initialTransportationType: 'Driving',
                departureDate: '2022-01-29',
                description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa'
            }
        ]
        ]

    }

    getTripFromSeqId(tripSeqId: string | null): Trip {

        return {
            seqId: '12345',
            name: 'Super Fun Adventure Time!',
            initialTransportationType: 'Flying',
            departureDate: '2022-12-30',
            description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa',
            destinationAirport: 'LAS',
            returnDate: '2021-01-05'
        }

    }

    getPastTrips(): Trip[][] {

        return [
                    [
                        {
                            seqId: '12345',
                            name: 'some name',
                            initialTransportationType: 'Flying',
                            departureDate: '2020-12-30',
                            description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa',
                            destinationAirport: 'LAS',
                            returnDate: '2021-01-05'

                        },
                        {
                            seqId: '12345',
                            name: 'Some other name',
                            initialTransportationType: 'Driving',
                            departureDate: '2020-07-29',
                            description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa',
                            returnDate: '2020-08-15'
                        },
                        {
                            seqId: '12345',
                            name: 'One last Trip',
                            initialTransportationType: 'Driving',
                            departureDate: '2019-05-12',
                            description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa',
                            returnDate: '2019-05-14'
                        }
                    ],
                    [
                        {
                            seqId: '12345',
                            name: 'One last Trip',
                            initialTransportationType: 'Driving',
                            departureDate: '2019-05-12',
                            description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa',
                            returnDate: '2019-05-14'
                        },
                        {
                            seqId: '12345',
                            name: 'One last Trip',
                            initialTransportationType: 'Driving',
                            departureDate: '2019-05-12',
                            description: 'askjhdf lajkshdflaksj hdflakjh dflajkshdflkjashd fljkahsdf ljkahsdfljkha sdflkjhas ldkjfhal ksdh jflksjdhfa',
                            returnDate: '2019-05-14'
                        }
                    ]
                ];
    }

}