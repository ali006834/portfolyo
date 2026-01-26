import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log('=== API Contact Route Called ===');

  try {
    const body = await request.json();
    console.log('Request body:', body);

    const { name, email, subject, message } = body;

    // Form validasyonu
    if (!name || !email || !subject || !message) {
      console.log('Validation failed: missing fields');
      return NextResponse.json(
        { error: 'Tüm alanları doldurunuz.' },
        { status: 400 }
      );
    }

    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: invalid email format');
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    console.log('Validation passed, checking API key...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    // Resend ile email gönder
    console.log('Sending email via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend test email'i
      to: 'alinacituysuz43@gmail.com', // Sizin e-posta adresiniz
      subject: `Portfolio İletişim: ${subject}`,
      html: `
        <h2>Yeni İletişim Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'E-posta gönderilemedi.', details: error },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.', details: String(error) },
      { status: 500 }
    );
  }
}
