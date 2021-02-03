import { PetStatus } from "../pet/pet.input"

export interface history {
    id?: Number
    petId: Number
    johnyId: Number
    shelterId: String
    supportId: String
    description: String
    status: PetStatus
    createDate: String
    modifyDate: String
}