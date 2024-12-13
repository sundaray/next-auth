import * as React from "react";
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";

export function SubscribeTemplate({ url }: { url: string }) {
  return (
    <Html>
      <Tailwind>
        <Text className="text-base font-medium text-gray-900">Hey,</Text>
        <Text className="text-base font-medium text-gray-900">
          Click the link below to subscribe:
        </Text>
        <Button
          href={url}
          className="rounded bg-blue-600 px-4 py-2 text-base font-medium text-white"
        >
          Subscribe
        </Button>
        <Text className="text-sm font-medium text-gray-500">
          If you did not try to subscribe, you can safely ignore this email.
        </Text>
      </Tailwind>
    </Html>
  );
}