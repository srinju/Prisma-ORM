"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//inserting data into the table >>
function insertUsers(email, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password
            },
            select: {
                id: true,
                password: true
            }
        });
        console.log(res);
    });
}
;
function UpdateUsers(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const result = yield prisma.user.update({
            where: { email: username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(result);
    });
}
function deleteUsers(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultt = yield prisma.user.delete({
            where: { id: id }
        });
        console.log('user deleted successfully ', resultt);
    });
}
//deleteUsers(1);
//get users  >> 
function getUsers(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const rresult = yield prisma.user.findFirst({
            where: { id: id }
        });
        console.log("the user is ", rresult);
    });
}
getUsers(2);
