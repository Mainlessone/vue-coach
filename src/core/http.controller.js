export const DATABASE_URL = 'https://coachx-a68c3-default-rtdb.europe-west1.firebasedatabase.app';

export const handleHttpError = (response) => {
  if(!response.ok) {
    const error = new Error(responseData.message || 'Failed to fetch');
    throw error;
  }
}