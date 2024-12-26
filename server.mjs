import express, { response } from 'express';
import user from `./main`;
const app = express();
const newUser = user;
app.use(express.json());
const users = {}

if (users.includes(newUser)) {
    console.log(`bunday user mavjud`)
    return;
} else {
    users.push(newUser)
}

app.get(`/users/:id`, (req, res) => {
    const { id } = req.params;
    if (users[id]) {
        res.send(users[id])
    } else {
        res.status(404).json({ message: `user topilmadi` })
    }
});

app.get(`/users`, (req, res) => {
    res.send(users)
})

app.post(`/users`, (req, res) => {
    const body = req.body;
    users.push(body);
    res.send(`user qo'shildi`)
})

app.put(`/users/:id`, (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const userIndex = users.findIndex((user) => user.id === +id)
    const user = users.filter((user) => user.id === +id)
    users.splice(userIndex, 1, { ...user, ...body })
    res.send(`user o'zgartirildi`)
})

app.delete(`/users/:id`, (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === +id)
    users.splice(userIndex, 1)
    res.send(`user o'chirildi`)
})

app.listen(3000, () => {
    console.log(`server ishga tushdi`)
})