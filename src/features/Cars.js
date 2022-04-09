import { createSlice, current } from '@reduxjs/toolkit';
import {Vehicles} from '../Cars';


export const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        value: Vehicles
    },
    reducers: {
        addCar: (state, action) => {
            console.log(state + 1)
        },
        deleteCar: (state, action) => {
            console.log(current(state))
        },
        filterCarType: (state, action) => {
            console.log(state)
        }
    }
})

export const {addCar, deleteCar, filterCarType} = carsSlice.actions;
export default carsSlice.reducer;