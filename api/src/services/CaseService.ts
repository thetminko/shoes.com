import { Transaction } from 'sequelize';
import { Case, Test, User } from '../entities';
import { getSequelize } from '../sequelize';

class CaseService {

  async create(val: string): Promise<void> {
    const transaction: Transaction = await getSequelize().transaction();
    const user = await User.findOne({ where: { id: 1 } });

    const cse = Case.build({
      name: `Test-${val}`,
      userId: user.id
    });

    await cse.save({ transaction: transaction });

    setTimeout(async () => {
      await transaction.commit();
    }, 10000);
  }

  async update(): Promise<void> {
    const transaction: Transaction = await getSequelize().transaction();
    // const user = await User.findOne({ where: { id: 1 } });
    const cse = await Case.findOne({ where: { id: 8 }, transaction, lock: transaction.LOCK.UPDATE });
    cse.name = `${new Date().getTime()}`;
    cse.userId = 1;

    await cse.save({ transaction: transaction });

    setTimeout(async () => {
      await transaction.commit();
    }, 10000);
  }

  async updateTest(): Promise<void> {
    const transaction: Transaction = await getSequelize().transaction();

    const test = await Test.findOne({ where: { id: 1 }, transaction });
    test.name = `${new Date().getTime()}`;

    await test.save({ transaction: transaction });
    await transaction.commit();

  }

}

export const caseService = new CaseService();
