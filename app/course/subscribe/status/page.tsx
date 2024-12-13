import Link from "next/link";
import { Icons } from "@/components/icons";

export default function SubscriptionStatusPage() {
  return (
    <div className="mx-auto max-w-sm mt-12 px-4 lg:px-8 text-center">
      <h2 className="text-green-600 text-2xl font-bold">Already Subscribed</h2>
      <p className="text-gray-700 mt-4">You are already subscribed.</p>
      <Link
        href="/"
        className="flex justify-center items-center group p-2 text-blue-600 mt-4"
      >
        <Icons.arrowLeft className="size-4 inline-block mr-2 text-muted-foreground transform transition-transform group-hover:-translate-x-1 group-hover:text-blue-600" />
        Home
      </Link>
    </div>
  );
}
