export const fetchTrainerPatients = async (baseUrl: string, trainerId: string) => {
    try {
        const response = await fetch(`${baseUrl}/patient/trainer?trainer_id=${trainerId}`);
        console.log('Response', response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching trainer patients:', error);
        throw error; // Re-lanzamos el error para manejarlo en el componente
    }
};