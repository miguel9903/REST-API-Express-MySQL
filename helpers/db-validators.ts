import User from '../models/user';

export const existUserId = async (id: string) => {
    const existUser = await User.findByPk(id);
    if(!existUser) {
        throw new Error('user does not exist');
    }
}

export const existUserEmail = async (email: string) => {
    const existEmail = await User.findOne({ 
        where: {
            email: email
        }
    });
    if(existEmail) {
        throw new Error(`The email ${ email } is already registered`);
    }
}
