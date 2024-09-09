export interface ICollaborator {
    //DATOS PERSONALES
    firstName: string;
    secondName?: string;
    lastName: string;
    typeDocumentId: 'NIT' | 'Cedula de Ciudadania' | 'Cedula de Extranjeria' | 'Pasaporte';
    idDocument: string;
    placeOfIssue?: string;
    documentIssueDate?: Date;
    departmentOfBirth: 'Bogota D.C.' | 'Amazonas' | 'Antioquia' | 'Arauca' | 'Atlantico' | 'Bolivar' | 'Boyaca' | 'Caldas' | 'Caqueta' | 'Casanare' | 'Cauca' | 'Cesar' | 'Choco' | 'Cordoba' | 'Cundinamarca' | 'Guainia' | 'Guaviare' | 'Huila' | 'La Guajira' | 'Magdalena' | 'Meta' | 'Nariño' | 'Norte de Santander' | 'Putumayo' | 'Quindio' | 'Risaralda' | 'San Andres y Providencia' | 'Santander' | 'Sucre' | 'Tolima' | 'Valle del Cauca' | 'Vaupes' | 'Vichada';
    placeOfBirth: string;
    birthDay: Date;
    age: number;
    gender: 'Male' | 'Female' | 'Unspecified';
    mobilePhone: string;
    personalEmails: [
        {
            email: string;
        }
    ][];
    //DATOS PERSONALES - GRUPO SANGUINEO
    bloodGroup?: 'A' | 'B' | 'AB' | 'O';
    bloodType?: '-' | '+';
    //DATOS PERSONALES - ESTADO MARITAL E HIJOS
    maritalStatus?: 'Single' | 'Married' | 'Free union';
    children?: {
        childName: string;
        childBirthDate: Date,
    }[];
    //DATOS PERSONALES - MEDIOS DE TRANSPORTE
    residenceMunicipality: string;
    residenceAddress: string;
    housingType?: 'Apartamento' | 'Casa' | 'Otro';
    housingCharacteristics?: 'Arrendada' | 'Propia' | 'Familiar' | 'Otro';
    locationZone?: 'Rural' | 'Urbana' | 'Suburbana';
    transportation?: 'Bicicleta' | 'Carro' | 'Moto' | 'Urbano' | 'Otro';
    motorcyclePlate?: string;
    carPlate?: string;
    //DATOS PERSONALES - DATOS DE CONTACTO
    emergencyContactName?: string;
    relationship?: 'Madre/Padre' | 'Esposa/Esposo' | 'Hija/Hijo' | 'Otro';
    emergencyContactPhone?: string;
    
    //DATOS EMPRESARIALES
    active: 'Si' | 'No';
    contractType: 'Termino Fijo' | 'Termino Indefinido' | 'Aprendiz' | 'Pasantias';
    contractNumber?: number;
    entryDate: Date;
    retirementDate?: Date;
    retirementReason?: string;
    currentPosition: 'Desarrollador Web';
    englishPositionEquivalent: 'Web Developer';
    corporateEmail: string;
    department: 'Tecnologia';
    immediateSupervisor: 'Nataly Nunez';
    onVacation: 'Si' | 'No';
    currentSalary?: string;
    eps?: 'Nueva EPS' | 'Sura' | 'Salud Total';
    afp?: 'Colfondos' | 'Porvenir' | 'Protección' | 'Skandia';
    severance?: 'Porvenir';
    arl?: 'Sura' | 'Positiva' | 'Colpatria' | 'Colmena' | 'Bolívar' | 'Liberty' | 'La Equidad';
    riskLevel?: '1' | '2' | '3';
    academicProfile?: 'Bachiller' | 'Tecnico Profesional' | 'Tecnologo profesional' | 'Profesional' | 'Especializacion' | 'Maestrias' | 'Doctorados';
    bank?: 'Banco Agrario de Colombia' | 'Banco Caja Social' | 'Banco de Bogotá' | 'Banco Finandina' | 'Banco JP Morgan Colombia' | 'Banco Popular' | 'Banco Unión' | 'Lulo Bank' | 'Ualá' | 'Banco AV Villas' | 'Banco Cooperativo Coopcentral' | 'Banco de Occidente' | 'Banco GNB Sudameris' | 'Banco Mundo Mujer' | 'Banco Santander' | 'Bancolombia' | 'Citibank Colombia' | 'Bancamía' | 'Banco BBVA Colombia' | 'Banco Davivienda' | 'Banco Falabella' | 'Banco Itau' | 'Banco Pichincha' | 'Banco Pichincha' | 'Bancoomeva' | 'Scotiabank Colpatria';
    accountType?: 'Cuenta de ahorro' | 'Cuenta Corriente';
    accountNumber?: string;
    observations?: string[];

    //AUTENTICACION
    password: string;
    passwordResetCode?: string;
    passwordResetCodeDate?: Date;
    loginAttempts?: number;
    isBlocked?: boolean;
    unlockCode?: string;
    expiresAt?: Date;
}