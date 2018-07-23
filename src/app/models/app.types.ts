export interface PatientModel  {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    patientCreationTimestamp: string;
}

export interface UWDataModel  {
    id: number;
    radiusMean: number;
    textureMean: number;
    perimeterMean: number;
    areaMean: number;
    smoothnessMean: number;
    compactnessMean: number;
    concavityMean: number;
    concavePointsMean: number;
    symmetryMean: number;
    fractalDimensionMean: number;
    radiusSe: number;
    textureSe: number;
    perimeterSe: number;
    areaSe: number;
    smoothnessSe: number;
    compactnessSe: number;
    concavitySe: number;
    concavePointsSe: number;
    symmetrySe: number;
    fractalDimensionSe: number;
    radiusWorst: number;
    textureWorst: number;
    perimeterWorst: number;
    areaWorst: number;
    smoothnessWorst: number;
    compactnessWorst: number;
    concavityWorst: number;
    concavePointsWorst: number;
    symmetryWorst: number;
    fractalDimensionWorst: number;
}

export interface PatientHistoryModel  {
    id: number;
    patient: PatientModel;
    data: UWDataModel;
    measurementTimestamp: string;
    predictedDiagnosis: string;
    comments: string;
}
