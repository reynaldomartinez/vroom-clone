import { createSlice, current } from '@reduxjs/toolkit';
import {Vehicles} from '../Cars';


export const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        value: Vehicles,
        filterMakeOnly: [],
        inputChecked: false,
        showFilteredMake: [],
        noCarsAvailableMessage: false

    },
    reducers: {
        addCar: (state, action) => {
            console.log(state + 1)
        },
        deleteCar: (state, action) => {
            console.log(state.data)
        },
        // if type is bmw then only show else if null show all????
        filterCarType: (state, action) => {

            if(action.payload){
              state.filterMakeOnly = state.value.filter((data)=>{
                   return data.make.includes(action.payload.make)
                })
            } else {
                return state.value;
            }
        }
    }
})

export const {addCar, deleteCar, filterCarType} = carsSlice.actions;
export default carsSlice.reducer;