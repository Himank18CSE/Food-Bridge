import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        Welcome {session?.user?.name}
      </h1>

      <p className="mt-4 text-xl">
        Role: {(session?.user as any)?.role}
      </p>
    </div>
  );
}