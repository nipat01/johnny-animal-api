import { ObjectIdColumn, ObjectID, Column, Entity, } from "typeorm";
enum Sex {
    male = "MALE",
    femail = "FEMAIL"
}

export enum PetStatus {
    checkdata = "CHECKDATA",
    waitingLove = "WAITING_LOVE",
    beLoved = "BE_LOVED"
}

@Entity()
export class Pet {
    @ObjectIdColumn()
    id: ObjectID
    @Column() userId?: Number
    @Column() johnnyId?: Number
    @Column() name: String
    @Column() age: Number
    @Column({
        type: "enum",
        enum: Sex,
    }) gender: String
    @Column() specy: String
    @Column() color: String
    @Column() image: String
    @Column({
        type: "enum",
        enum: PetStatus,
    }) status: String
    @Column() description: String
    @Column() createDate: String
    @Column() modifyDate: String
}

