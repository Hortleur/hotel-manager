import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

async function main() {
    const admin = await prisma.user.upsert({
        where: { email: 'admin@test.fr' },
        update: {},
        create: {
            email: 'admin@test.fr',
            password: bcrypt.hashSync('testadminpassword', 10),
            roleId: 1,
            name: 'Admin'
        }
    })

    const user = await prisma.user.upsert({
        where: { email: 'user@test.fr' },
        update: {},
        create: {
            email: 'user@test.fr',
            password: bcrypt.hashSync('testuserpassword', 10),
            roleId: 2,
            name: 'User'
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })