import {Blog, User} from './connectors';

const resolvers = {
    Query: {
        user(_, args) {
            return User.find({where: args});
        },
        allUsers: () => {
            return User.all();
        },
        blog(_, args) {
            return Blog.find({where: args});
        },
        allBlogs: () => {
            return Blog.all();
        }
    },
    Mutation: {
        createUser: (_, data) => {
            const ret = User.create({
                firstName: data.firstName,
                lastName: data.lastName,
            });
            return ret
        },
        deleteUser: (_, args) => {
            User.destroy({where: args});
            return {id: args.id}
        },
        updateUser: (_, args) => {
            User.update({firstName: args.firstName, lastName: args.lastName}, {where: {id: args.id}});
            return {id: args.id, firstName: args.firstName, lastName: args.lastName}
        },
        createBlog: (_, data) => {
            const ret = Blog.create({
                content: data.content,
                title: data.title,
                user_id: data.user_id,
            });
            return ret
        },
        deleteBlog: (_, args) => {
            Blog.destroy({where: args});
            return {id: args.id}
        },
        updateBlog: (_, args) => {
            Blog.update({content: args.content, title: args.title}, {where: {id: args.id}});
            return {id: args.id, content: args.content, title: args.title}
        }
    }
};

export default resolvers;