import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export const metadata = {
  title: "Contact Us | Vyllion",
  description: "Get in touch with Vyllion for luxury technology solutions. Contact us for project inquiries, support, or partnership opportunities.",
  alternates: { canonical: "https://vyllion.com/contact" },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white flex items-center justify-center py-24">
      <div className="w-full max-w-2xl mx-auto">
        <Card className="bg-slate-900/60 border border-yellow-400/20 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-3" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Contact Us</h1>
            </div>
            <p className="text-gray-300 mb-6">Ready to elevate your brand? Reach out for project inquiries, support, or partnership opportunities.</p>
            <form className="space-y-6">
              <Input name="name" required placeholder="Your Name" className="bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white" />
              <Input name="email" type="email" required placeholder="Your Email" className="bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white" />
              <Textarea name="message" required placeholder="Your Message" className="bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white min-h-[100px]" />
              <Button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-lg py-3 font-semibold">Send Message</Button>
            </form>
            <div className="mt-8 border-t border-yellow-400/20 pt-4">
              <h2 className="text-lg font-semibold text-yellow-400 mb-2">Contact Information</h2>
              <p className="text-gray-300">Email: <a href="mailto:info@vyllion.com" className="text-yellow-400 hover:underline">info@vyllion.com</a></p>
              <p className="text-gray-300">Phone/WhatsApp: <a href="tel:+251946625060" className="text-yellow-400 hover:underline">+251946625060</a></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 