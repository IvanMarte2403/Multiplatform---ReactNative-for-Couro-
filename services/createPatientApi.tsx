export const createPatient = async (
    baseUrl: string,
    trainerId: string,
    fullname: string,
    birthdate: string,
    height: number,
    weight: number
) => {
    try {
        const response = await fetch(`${baseUrl}/patient/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                trainer_id: trainerId,
                fullname: fullname,
                birthdate: birthdate,
                height: height,
                weight: weight,
            }),
        });

        console.log('Response', response);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating patient:', error);
        throw error; // Re-lanzamos el error para manejarlo en el componente
    }
};