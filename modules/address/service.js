import addressRepository from './repository';

export async function findAddress(params) {
    
}

export async function findAddresses(params) {
    
}

export async function updateAddress(params) {
    let address = await addressRepository.updateAddress(ctx.request.body.user,ctx.params.id);

    ctx.body = {
      message: 'Sucessfuly updated',
      user: User
    }
}