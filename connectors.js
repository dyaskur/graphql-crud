import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('blog', null, null, {
    dialect: 'sqlite',
    storage: './blog.sqlite',
});

const UserModel = db.define('user', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
});

casual.seed(123);
db.sync({ force: true }).then(() => {
    _.times(10, () => {
        return UserModel.create({
            firstName: casual.first_name,
            lastName: casual.last_name,
        })
    });
});

const User = db.models.user;


export { User };