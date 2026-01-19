import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";


export default function ContactSection() {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    await base44.entities.ContactMessage.create({
      name,
      email,
      message,
    });

    if (await base44.auth.isAuthenticated()) {
      const me = await base44.auth.me();
      await base44.integrations.Core.SendEmail({
        to: me.email,
        subject: `New contact message from ${name}`,
        body: `You have a new contact message.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
    }

    setSent(true);
    setLoading(false);
    formEl?.reset();
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input name="name" placeholder="Your name" required />
          </div>
          <div>
            <Input type="email" name="email" placeholder="Your email" required />
          </div>
          <div>
            <Textarea name="message" placeholder="Your message" rows={5} required />
          </div>
          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
          {sent && (
            <p className="text-green-700 text-center text-sm">Thanks! Your message has been sent.</p>
          )}
        </form>
      </div>
    </section>
  );
}