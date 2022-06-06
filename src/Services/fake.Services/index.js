import { faker } from '@faker-js/faker';

export function AvatarGenerate(){
    return faker.image.avatar();
}

export function NameGenarate(){
    return faker.name.findName();
}

export function EmailGenerate(){
    return faker.internet.email();
}

export function CompanyGenerate(){
    return faker.company.bs();
}

export function PhoneGenerate(){
    return faker.phone.phoneNumber('+## ## #####-####');
}

export function AddresseGenerate(){
    const address = faker.address.streetAddress(true);
    const city = faker.address.cityName();
    const contry = faker.address.county();
    const zipCode = faker.address.zipCode('######-###')

    return `${address}, ${city}, ${contry}, ${zipCode}`;
}

export function NoteGenerate(){
    return faker.lorem.text();
}