/**
 * TODO: refactor this by adding typing and move api to constant
 * */
export function getHotels() {
    return fetch('http://localhost:4000/hotels').then(r => r.json());
}

export function getApartments() {
    return fetch('http://localhost:4000/apartments').then(r => r.json());
}

export function getLoges() {
    return fetch('http://localhost:4000/loges').then(r => r.json());
}
