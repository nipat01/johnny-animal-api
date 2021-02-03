
export interface UserDto {
    id?: Number
    username?: String
    password?: String
    typeOfUser: typeOfUser
    firstname: String
    lastname: String
    lineId: Number
    tel: Number
    Image: String
    age: String
    sex: String
    province: String
    distict: String
    subdistict: String
    address: String
    description: String
    donation: String
    status: status
    createDate?: String
    modifyDate?: String
}

enum typeOfUser {
    shelter = "SHELTER",
    genaral = "GENeRAL"
}

enum status {
    checkdata = "CHECKDATA",
    checked = "CHECKED"
}

