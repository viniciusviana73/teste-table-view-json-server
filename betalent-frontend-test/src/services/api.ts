import { Employee } from '../types/Employee';

const API_URL = 'http://localhost:3000';

export const getEmployees = async (): Promise<Employee[]> => {
    const response = await fetch(`${API_URL}/employees`);
    if (!response.ok) throw new Error('Erro ao buscar funcionários');
    return response.json();
};