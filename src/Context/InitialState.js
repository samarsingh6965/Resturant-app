import { fetchUser } from "../utils/fetchLocalStoragrData";


const userInfo = fetchUser()

export const initialState = {
     user : userInfo,
}