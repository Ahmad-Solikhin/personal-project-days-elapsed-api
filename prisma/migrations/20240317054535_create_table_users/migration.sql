-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "password" VARCHAR(255) NOT NULL,
    "refresh_token" VARCHAR(500),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
