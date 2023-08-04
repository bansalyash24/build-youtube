import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
    name:'search',
    initialState:{},
    reducers:{
        cacheResult:(state,action)=>{
            return {...state,...action.payload}
        }
    }
})

export const findPrime = num => {
    let i, primes = [2, 3], n = 5;
    const isPrime = n => {
       let i = 1, p = primes[i],
       limit = Math.ceil(Math.sqrt(n));
       while (p <= limit) {
          if (n % p === 0) {
             return false;
          }
          i += 1;
          p = primes[i];
       }
       return true;
    }
    for (i = 2; i <= num; i += 1) {
       while (!isPrime(n)) {
          n += 2;
       }
       primes.push(n);
       n += 2;
    };
    return primes[num - 1];
 }
export const {cacheResult}=searchSlice.actions
export default searchSlice.reducer