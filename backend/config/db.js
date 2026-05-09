import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { newDb } from "pg-mem";

dotenv.config({ quiet: true });
dotenv.config({
  path: fileURLToPath(new URL("../../databases/.env", import.meta.url)),
  quiet: true,
});

import { Sequelize } from "sequelize";

const useMemoryDb = process.env.DATABASE_URL === "memory";

const sequelize = useMemoryDb
  ? new Sequelize("postgres://postgres:postgres@localhost:5432/growwave", {
      dialect: "postgres",
      dialectModule: newDb().adapters.createPg(),
      logging: false,
    })
  : new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      logging: false,
    });

export default sequelize;
