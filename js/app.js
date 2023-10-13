showBtn.people.addEventListener('click', () => {
    getAndShowData('people', 1);
});
showBtn.vehicles.addEventListener('click', () => {
    getAndShowData('vehicles', 1);
});
showBtn.planets.addEventListener('click', () => {
    getAndShowData('planets', 1);
});

nextBtn['people'].addEventListener('click', () => handleNextClick('people'));
nextBtn['vehicles'].addEventListener('click', () => handleNextClick('vehicles'));
nextBtn['planets'].addEventListener('click', () => handleNextClick('planets'));

prevBtn['people'].addEventListener('click', () => handlePreviousClick('people'));
prevBtn['vehicles'].addEventListener('click', () => handlePreviousClick('vehicles'));
prevBtn['planets'].addEventListener('click', () => handlePreviousClick('planets'));

