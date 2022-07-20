import { fetchSneakersStart, fetchSneakersSuccess, fetchSneakersFailure } from "./sneakerSlice";

// const fetchAllsneakers = () => {
//     fetch("http://localhost:3000/sneakers")
//             .then(res => res.json())
//             .then(res => {
//                 return res;
//             }
//             )
//             .catch(err => console.log(err));
// }

// export const fetchSneakers = () => async (dispatch) => {
//     dispatch(fetchSneakersStart());
//     try {
//         const sneakers = await fetchAllsneakers();
//         dispatch(fetchSneakersSuccess(sneakers));
//     } catch (error) {
//         dispatch(fetchSneakersFailure(error));
//     }
// }