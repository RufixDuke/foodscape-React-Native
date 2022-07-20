export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload: product,
    };
};

export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload: product,
    };
};

export const minusPrice = (product) => {
    return {
        type: "MINUS",
        payload: product,
    };
};

export const addPrice = (product) => {
    return {
        type: "ADD",
        payload: product,
    };
};
