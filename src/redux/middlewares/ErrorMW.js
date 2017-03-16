/**
 * Created by VBA3627 on 15/03/2017.
 */


export const error = (store) => (next) => (action) => {
    try {
        next(action)
    } catch(e) {
        console.log('AAAHHH', e);
    }
};