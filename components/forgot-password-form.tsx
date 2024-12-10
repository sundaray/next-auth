"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import { requestPasswordReset } from "@/app/password-reset-actions";
import { forgotPasswordSchema } from "@/app/schema";

export function ForgotPasswordForm() {
  const [lastResult, action, isPending] = useActionState(
    requestPasswordReset,
    undefined
  );

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: forgotPasswordSchema });
    },
  });

  return (
    <div className="px-6 py-16 lg:px-8 mx-auto max-w-sm">
      <h2 className="text-center text-2xl font-bold tracking-tight text-primary">
        Forgot password?
      </h2>
      <form
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        className="mt-6 space-y-6"
        noValidate
      >
        {form.errors && (
          <div className="text-sm text-red-600 text-center">{form.errors}</div>
        )}

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name={fields.email.name}
            defaultValue={fields.email.initialValue}
            className="mt-2"
          />
          {fields.email.errors && (
            <div className="text-sm text-red-600 mt-1">
              {fields.email.errors}
            </div>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Sending..." : "Send password reset link"}
        </Button>
      </form>
    </div>
  );
}