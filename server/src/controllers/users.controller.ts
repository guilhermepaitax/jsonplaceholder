import { PrismaClient, User, Company, Address, Geo } from "@prisma/client";
import { v4 } from "uuid";

import AppError from "../errors/AppError";
import UserService from "../services/usersService";

class UserController {
  constructor(private prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(): Promise<void> {
    try {
      const userService = new UserService();

      const requestUsers = await userService.getUsers();

      const newCompanies: Company[] = [];
      const newAddresses: Address[] = [];
      const newGeoLocations: Geo[] = [];
      const newUsers: User[] = [];

      requestUsers.forEach(({ company, address, ...user }) => {
        const { geo, ...addressUser } = address;
        const companyId = v4();
        const addressId = v4();
        const geoId = v4();

        newCompanies.push({ id: companyId, ...company });
        newGeoLocations.push({ id: geoId, ...geo });
        newAddresses.push({ id: addressId, geoId, ...addressUser });
        newUsers.push({ companyId, addressId, ...user });
      });

      await this.prisma.company.createMany({
        data: newCompanies,
      });
      console.log("✅ - Companies created.");

      await this.prisma.geo.createMany({
        data: newGeoLocations,
      });

      await this.prisma.address.createMany({
        data: newAddresses,
      });
      console.log("✅ - Addresses created.");

      await this.prisma.user.createMany({
        data: newUsers,
      });
      console.log("✅ - Users created.");
    } catch (error) {
      console.log(error);
      throw new AppError("Error on sava users data.");
    }
  }
}

export default UserController;
