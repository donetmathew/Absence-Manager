export interface absencesType {
    userId: number,
    admitterId: number | null,
    admitterNote: string,
    confirmedAt: string | null,
    createdAt: string,
    crewId: number,
    endDate: string,
    id: number,
    memberNote: string,
    rejectedAt: string | null,
    startDate: string,
    type: string,
    status:string,
    profile?:string,
    name? :string
}

export interface absencesFilter{
    label:string,
    value:string
}

export interface TableHeaders{
    header:string,
    fieldId:string
}



export interface membersType{
    crewId: number,
    id: number,
    image: string,
    name: string,
    userId: number
}