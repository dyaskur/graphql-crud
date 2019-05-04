import { User } from './connectors';

const resolvers = {
    Query: {
        user(_, args) {
            return User.find({ where: args });
        },
        allUsers: () => {
            return User.all();
        }
    },
    Mutation: {
        createUser: (_, data) => {
            const ret = User.create({
                firstName: data.firstName,
                lastName: data.lastName,
            })
            return ret
        },
        deleteUser: (_,args)=> {
            User.destroy({ where: args });
            return { id : args.id}
        },
        updateUser: (_,args)=> {
            User.update({  firstName: args.firstName,lastName: args.lastName },{ where: { id: args.id } });
            return { id: args.id, firstName: args.firstName,lastName: args.lastName}
        }
    }
};

export default resolvers;