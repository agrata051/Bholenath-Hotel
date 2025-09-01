// data/contact.js

export async function sendContactForm(data) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}
