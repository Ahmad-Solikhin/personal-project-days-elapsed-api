-- CreateTable
CREATE TABLE "history_days_elapsed" (
    "id" VARCHAR(255) NOT NULL,
    "memo" VARCHAR(500),
    "history_date" DATE NOT NULL,
    "user_days_elapsed_id" VARCHAR(255) NOT NULL,

    CONSTRAINT "history_days_elapsed_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "history_days_elapsed" ADD CONSTRAINT "history_days_elapsed_user_days_elapsed_id_fkey" FOREIGN KEY ("user_days_elapsed_id") REFERENCES "user_days_elapsed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
