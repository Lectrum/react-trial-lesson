export const api = new class Api {
    MAIN_URI = 'https://lab.lectrum.io';

    getCountries = async (
        filter = '',
        caseInsensitive = false,
        size = '50',
    ) => {
        const response = await fetch(
            `${
                this.MAIN_URI
            }/geo/api/countries?filter=${filter}&size=${size}&case-insensitive=${caseInsensitive}`,
            { method: 'GET' },
        );

        const { data: countries } = await response.json();

        return countries;
    };

    getMovies = async (filter = 'upcoming') => {
        const response = await fetch(
            `${this.MAIN_URI}/afisha/api/movies?filter=${filter}`,
            {
                method: 'GET',
            },
        );
        const result = await response.json();

        return result;
    };
}();
