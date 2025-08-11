import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Message sent!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Me</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send a Message</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleSubmit}>Send</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
