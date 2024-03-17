-- CreateTable
CREATE TABLE "user_days_elapsed" (
    "id" VARCHAR(255) NOT NULL,
    "start_date" DATE,
    "end_date" DATE,
    "total_days" INTEGER NOT NULL DEFAULT 0,
    "elapsed_days" INTEGER NOT NULL DEFAULT 0,
    "user_id" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_days_elapsed_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_days_elapsed_user_id_key" ON "user_days_elapsed"("user_id");

-- AddForeignKey
ALTER TABLE "user_days_elapsed" ADD CONSTRAINT "user_days_elapsed_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
