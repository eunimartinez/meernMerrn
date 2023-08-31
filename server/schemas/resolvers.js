const {User, Book} = require('..models/')

const {signToken} = require('../utils/auth')

const resolvers = {
    Query : {
         me: async (parent, args,context)=> {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id}).select('-__v')
                return userData
            }
         }
    },
    Mutation : {
        login: async (parent, args)=> {
            const user = await User.findOne ({email})
            const token = signToken(user)
            return {token,}
        },
        addUser: async (parent,args) => {
            const user = await user.create(args)
            const token= signToken(user)
            return {token, user};
        }
    }
}