export const formatPhone = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');

    // Extrai partes do número
    const countryCode = cleaned.slice(0, 2); // primeiros 2 dígitos (código do país)
    const areaCode = cleaned.slice(2, 4); // próximos 2 dígitos (DDD)
    const firstPart = cleaned.slice(4, 9); // próximos 5 dígitos
    const secondPart = cleaned.slice(9, 13); // últimos 4 dígitos

    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
};