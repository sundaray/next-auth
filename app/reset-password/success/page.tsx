import Link from "next/link";
import { Icons } from "@/components/icons";

export default function ResetPasswordSuccessPage() {
  return (
    <div className="mx-auto max-w-sm mt-12 px-4 lg:px-8 text-center">
      <h2 className="text-green-600 text-2xl font-bold">Password Reset</h2>
      <p className="text-gray-700 my-4">
        Your password has been reset successfully.
      </p>
      <Link
        href="/signin"
        className="flex justify-center items-center group p-2 text-blue-600"
      >
        <Icons.arrowLeft className="size-4 inline-block mr-2 text-muted-foreground transform transition-transform group-hover:-translate-x-1 group-hover:text-blue-600" />
        Sign in
      </Link>
    </div>
  );
}
