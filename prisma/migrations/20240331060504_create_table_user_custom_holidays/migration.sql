-- CreateTable
CREATE TABLE "user_custom_holidays" (
    "id" SERIAL NOT NULL,
    "holiday_date" DATE NOT NULL,
    "describe" VARCHAR(255) NOT NULL,
    "include_weekend" BOOLEAN NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_custom_holidays_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_custom_holidays" ADD CONSTRAINT "user_custom_holidays_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
