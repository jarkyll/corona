import {MigrationInterface, QueryRunner} from "typeorm";

export class testmeout1585603160556 implements MigrationInterface {
    name = 'testmeout1585603160556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "entities" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_8640855ae82083455cbb806173d" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "entities"`, undefined);
    }

}
