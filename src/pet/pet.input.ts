export interface PetDto {
    id: Number
    userId?: Number
    johnnyId?: Number
    name: String
    age: Number
    sex: Sex
    specy: String
    color: String
    image: String
    status: PetStatus
    description: String
    // createDate: String
    // modifyDate: String
}

enum Sex {
    male = "MALE",
    femail = "FEMAIL"
}

export enum PetStatus {
    checkdata = "CHECKDATA",
    waitingLove = "WAITING_LOVE",
    beLoved = "BE_LOVED"
}