import { v4 as uuidv4 } from "uuid";

let users = [];


export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const createUser = (req, res) => {

    const user = req.body;

    // adding Uuid
    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.FirstName} added to the database!`)
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const FoundUser = users.find((user) => user.id === id);
    res.send(FoundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted from the database!`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { FirstName, LastName, Age } = req.body;
    const user = users.find((user) => user.id === id);
    if (FirstName) user.FirstName = FirstName;
    if (LastName) user.LastName = LastName;
    if (Age) user.Age = Age;

    res.send(`user ${id} has been updated`)

}
