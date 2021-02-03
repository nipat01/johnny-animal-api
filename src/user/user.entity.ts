import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

enum typeOfUser {
    shelter = "SHELTER",
    genaral = "GENeRAL"
}

enum status {
    checkdata = "CHECKDATA",
    checked = "CHECKED"
}


@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    username: String

    @Column()
    password: String

    @Column({
        type: "enum",
        enum: typeOfUser,
    })
    typeOfUser: String
    

    @Column()
    firstname: String

    @Column()
    lastname: String

    @Column()
    lineId: Number

    @Column()
    tel: Number

    @Column()
    Image: String

    @Column()
    age: String

    @Column()
    gender: String

    @Column()
    province: String

    @Column()
    distict: String

    @Column()
    subdistict: String

    @Column()
    address: String

    @Column()
    description: String

    @Column()
    donation: String

    @Column({
        type: "enum",
        enum: status,
    })
    status: String

    @Column()
    createDate: String

    @Column()
    modifyDate: String
}