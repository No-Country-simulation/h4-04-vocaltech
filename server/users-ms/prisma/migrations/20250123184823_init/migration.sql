-- AlterTable
ALTER TABLE "User" ADD COLUMN     "leadId" TEXT,
ADD COLUMN     "organizationId" TEXT,
ALTER COLUMN "role" SET DEFAULT 'USER';

-- CreateIndex
CREATE INDEX "User_leadId_idx" ON "User"("leadId");
