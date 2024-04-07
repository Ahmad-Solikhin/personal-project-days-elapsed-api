-- AlterTable
ALTER TABLE "users" ADD COLUMN     "activate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "email_token" VARCHAR(255);
