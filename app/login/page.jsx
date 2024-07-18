"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export default function login() {
  return (
    <Card className="w-6/12 mt-32">
      <h1>Connect to acces the todo list</h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
