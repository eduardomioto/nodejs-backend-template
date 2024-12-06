-- CreateTable
CREATE TABLE "Entity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- DropColumn
ALTER TABLE "Entity" DROP COLUMN "status";

-- AddColumn
ALTER TABLE "Entity" ADD COLUMN "description" TEXT;
