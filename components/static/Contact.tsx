import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <section id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-muted-foreground sm:text-xl">
          Got a technical issue? Want to send feedback about a feature? Need
          details about my projects? Let me know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <Label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </Label>
            <Input
              type="email"
              id="email"
              className="text-sm rounded-lg block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </Label>
            <Input
              type="text"
              id="subject"
              className="text-sm rounded-lg block w-full p-2.5"
              placeholder="Your complaint"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your message
            </Label>
            <Textarea
              id="message"
              rows={6}
              className="text-sm rounded-lg block w-full p-2.5"
              placeholder="Leave a comment..."
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
