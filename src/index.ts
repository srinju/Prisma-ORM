

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient() ;

//inserting data into the table >>

async function insertUsers(email : string , firstName : string , lastName : string , password : string) {
    const res = await prisma.user.create({
        data : {
            email,
            firstName,
            lastName,
            password
        },
        select : {
            id : true,
            password : true
        }
    });
    console.log(res);
}

//insertUsers("daskoushik333@gmail.com" , "Koushik" , "Das" , "1233434");

//updating the data in the table users where that is this and this is we need to change or we can change

interface updateParams {
    firstName : string,
    lastName : string
};

async function UpdateUsers(username : string,{
    firstName,
    lastName
} : updateParams) {
    const result = await prisma.user.update({
        where : {email : username},
        data : {
            firstName,
            lastName
        }
    });
    console.log(result);
}

/*
UpdateUsers("dassrinjoy333@gmail.com" , {
    firstName : "Srinjoy1104",
    lastName : "hehehe"
});
*/

//deleting users > --- remember one thing you can only delete users or any data if we give the data on where which was set to true while inserting the data insid the table 

interface deleteParams {
    firstName : string,
    lastName  : string
}

async function deleteUsers(id : number) {
    const resultt = await prisma.user.delete({
        where : { id : id}
    });
    console.log('user deleted successfully ' , resultt);
}

//deleteUsers(1);

//get users  >> 

async function getUsers(id : number) {
    const rresult = await prisma.user.findFirst({
        where : {id : id}
    });
    console.log("the user is " , rresult);
}

//getUsers(2);

//create todo >>

async function createTodo(userId : number , title : string , description : string) {
    const response = await prisma.todo.create({
        data : {
            userId,
            title,
            description
        }
    });
    console.log(response);
}   

//get todo given an user id >>

async function getTodo(userId : number) {
    const response = await prisma.todo.findMany({
        where : {
            userId : userId
        }
    });
    console.log(response);
}

//createTodo(2,'go to gym' , 'go to gym from 7 am to 9 am');
//getTodo(2);

//get todos and user details with user id as the input >>

async function getUserAndTodoDetails(userId : number) {
    const response = await prisma.todo.findMany({
        where : {
            userId : userId
        },
        select : {
            id : true,
            title : true,
            description : true,
            user : true //we can get all the user details too by diing this command 
        }
    });
    console.log(response);
}

getUserAndTodoDetails(2);

