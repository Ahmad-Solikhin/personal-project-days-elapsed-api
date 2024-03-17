-- CreateTable
CREATE TABLE "holidays" (
    "id" SERIAL NOT NULL,
    "holiday_date" DATE NOT NULL,
    "describe" VARCHAR(255) NOT NULL,

    CONSTRAINT "holidays_pkey" PRIMARY KEY ("id")
);
