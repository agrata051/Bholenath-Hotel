import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import { sendContactForm } from '@/data/contact';
import Navigation from './Navigation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await sendContactForm(formData);
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Info Block */}
            <div className="text-gray-800">
              <h3 className="text-2xl font-bold mb-6">WE ARE HERE FOR YOU</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                At Bholenath Hotel, we take care of business. We are here to help you...
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gold-600" />
                  <span>Gaushala Chowk Rd-9, Kathmandu 44600</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-600" />
                  <span>Phone: 01-4572799, 98493204676</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-600" />
                  <span>Email: hotelbholenathktm@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={4}
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {submitted && <p className="text-green-600">Your message has been sent!</p>}
                <Button
                  disabled={loading}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;

