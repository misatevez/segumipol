

export const fieldConfigs = {
    nombre: {
        id: 'nombre',
        label: 'Nombre',
        type: 'text',
        placeholder: 'Nombre',
        required: true,
    },
    apellido: {
        id: 'apellido',
        label: 'Apellido',
        type: 'text',
        placeholder: 'Apellido',
        required: true,
    },
    email: {
        id: 'email',
        label: 'Correo Electrónico',
        type: 'email',
        placeholder: 'Correo electrónico',
        required: true,
    },
    password: {
        id: 'password',
        label: 'Contraseña',
        type: 'password',
        placeholder: 'Contraseña',
        required: true,
    }
};

export const especialidades = [
    { value: 'Civil', label: 'Civil' },
    { value: 'Laboral', label: 'Laboral' },
    { value: 'Penal', label: 'Penal' },
    { value: 'Constitucional', label: 'Constitucional' },
    { value: 'Administrativo', label: 'Administrativo' }
];
