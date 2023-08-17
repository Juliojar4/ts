type VerifyUserFn = ( user: User, sentValue: User) => boolean;
type User = { username: string, password: string };

const verifyUser: VerifyUserFn = ( user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    )
};

const bdUser = { username:'julio', password: '12345' };
const sentUser = { username:'julio', password: '12345' };

const loggedIn = verifyUser(bdUser, sentUser); // Não preciso espeficar o type, pois ele cumpre os requisitos do type User, ambos possuem os mesmo campos
console.log(loggedIn);
