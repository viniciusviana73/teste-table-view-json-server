import { Employee } from './Employee';

export interface TableRowProps {
    employee: Employee;
    index: number;
    expanded: boolean;
    onToggleExpand: (index: number) => void;
}