import { useEffect, useState } from 'react';
import { Employee } from '../../types/Employee';
import { TableRowProps } from '../../types/TableRowProps';
import { getEmployees } from '../../services/api';
import { formatPhone } from '../../utils/formatPhone';

// Ícone de expandir
const ExpandIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-[#0500FF]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Ícone de recolher
const CollapseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-[#0500FF]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

// Ícone de pesquisa (lupa)
const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#DFDFDF]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
);

const TableRow = ({ employee, index, expanded, onToggleExpand }: TableRowProps) => {
    return (
        <>
            <tr className="bg-white hover:bg-gray-50 border-b border-[#DFDFDF]">
                <td className="px-4 py-3">
                    <img
                        src={employee.image}
                        alt={employee.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </td>
                <td className="px-4 py-3">{employee.name}</td>
                <td className="px-4 py-3 hidden md:table-cell">{employee.job}</td>
                <td className="px-4 py-3 hidden md:table-cell">
                    {new Date(employee.admission_date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                    {formatPhone(employee.phone)}
                </td>
                <td className="px-4 py-3 md:hidden">
                    <button
                        onClick={() => onToggleExpand(index)}
                        className="p-1 hover:bg-gray-100 rounded"
                    >
                        {expanded ? <CollapseIcon /> : <ExpandIcon />}
                    </button>
                </td>
            </tr>
            {expanded && (
                <tr className="md:hidden bg-gray-50">
                    <td colSpan={6} className="px-4 py-2">
                        <div className="space-y-1">
                            <div className="flex justify-between">
                                <strong className='font-semibold'>Cargo</strong>
                                <span>{employee.job}</span>
                            </div>
                            <div className="flex justify-between">
                                <strong className='font-semibold'>Admissão</strong>
                                <span>{new Date(employee.admission_date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <strong className='font-semibold'>Telefone</strong>
                                <span>{formatPhone(employee.phone)}</span>
                            </div>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

const Table = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Erro ao carregar funcionários:', error);
                setError('Não foi possível carregar a lista de funcionários. Tente novamente mais tarde.');
            }
        };

        loadEmployees();
    }, []);

    const filteredEmployees = employees.filter(
        (employee) =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.phone.includes(searchTerm)
    );

    const handleToggleExpand = (index: number) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div className="p-4 bg-[#F0F0F0]">
            
            {/* Caso erro na chamada da api*/}
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            <div className="flex flex-col md:flex-row items-center md:justify-between mb-4">
                <h2 className="text-xl font-semibold w-full md:w-auto text-left text-[#1C1C1C]">
                    Funcionários
                </h2>

                <div className="relative w-full md:w-64 mt-4 md:mt-0 md:ml-auto">
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className="w-full pl-4 pr-10 py-2 bg-[#FFFFFF] border border-[#DFDFDF] rounded-lg placeholder-[#9E9E9E] text-[#333]"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <SearchIcon />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-[#0500FF] text-white uppercase">
                        <tr>
                            <th className="font-medium px-4 py-3 text-left rounded-tl-lg">Foto</th>
                            <th className="font-medium px-4 py-3 text-left">Nome</th>
                            <th className="font-medium px-4 py-3 text-left hidden md:table-cell">Cargo</th>
                            <th className="font-medium px-4 py-3 text-left hidden md:table-cell">Admissão</th>
                            <th className="font-medium px-4 py-3 text-left hidden md:table-cell md:rounded-tr-lg">Telefone</th>
                            <th className="font-medium px-4 py-3 text-3xl text-left md:hidden rounded-tr-lg">•</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredEmployees.map((employee, index) => (
                            <TableRow
                                key={employee.id}
                                employee={employee}
                                index={index}
                                expanded={expandedRow === index}
                                onToggleExpand={handleToggleExpand}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;