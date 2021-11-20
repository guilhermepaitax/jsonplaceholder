-- AlterTable
ALTER TABLE "Album" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Album_id_seq";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Comment_id_seq";

-- AlterTable
ALTER TABLE "Photo" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Photo_id_seq";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Post_id_seq";

-- AlterTable
ALTER TABLE "ToDo" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "ToDo_id_seq";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "User_id_seq";