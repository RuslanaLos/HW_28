const pageOfLink = {
    people: 1,
    vehicles: 1,
    planets: 1,
}
const nextBtn = {
    people: document.getElementById('peopleNext'),
    vehicles: document.getElementById('vehiclesNext'),
    planets: document.getElementById('planetsNext'),
}
const prevBtn = {
    people: document.getElementById('peoplePrev'),
    vehicles: document.getElementById('vehiclesPrev'),
    planets: document.getElementById('planetsPrev'),
}

const showBtn = {
    people: document.getElementById('peopleBtn'),
    vehicles: document.getElementById('vehiclesBtn'),
    planets: document.getElementById('planetsBtn'),
}
const itemsFeatures = {
    people: ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'],
    vehicles: ['model', 'manufacturer', 'cost_in_credits', 'length', 'max_atmosphering_speed', 'crew', 'passengers', 'cargo_capacity', 'consumables', 'vehicle_class'],
    planets: ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population']
}


