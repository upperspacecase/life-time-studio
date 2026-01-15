# Claude Instructions for Life Time Studio SaaS Boilerplate

## Project Overview

You are working on **Life Time Studio**, a comprehensive Next.js SaaS boilerplate designed to help developers quickly launch their SaaS applications. This project includes authentication, payments, database management, email functionality, and a modern UI framework.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Authentication**: NextAuth.js v5 (beta)
- **Database**: MongoDB with Mongoose ODM
- **Payments**: Stripe (Checkout, Customer Portal, Webhooks)
- **Email**: Resend
- **UI**: Tailwind CSS + DaisyUI
- **State Management**: React hooks

## Project Structure

```
life-time-studio/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/         # NextAuth endpoints
│   │   ├── stripe/       # Stripe checkout & portal
│   │   └── webhook/      # Webhook handlers
│   ├── blog/             # Blog pages
│   ├── dashboard/        # Protected user dashboard
│   ├── privacy-policy/   # Legal pages
│   └── tos/              # Terms of service
├── components/            # React components
├── libs/                  # Utility libraries
│   ├── api.js            # API client with axios
│   ├── auth.js           # NextAuth configuration
│   ├── mongoose.js       # MongoDB connection
│   ├── resend.js         # Email sending
│   ├── seo.js            # SEO utilities
│   └── stripe.js         # Stripe utilities
├── models/               # Mongoose models
└── config.js             # Central configuration
```

## Key Configuration

The `config.js` file is the central configuration hub. Important settings include:
- `appName`: Application name used throughout the app
- `domainName`: Primary domain for SEO and emails
- `stripe.plans`: Pricing plans configuration
- `resend`: Email configuration
- `auth`: Authentication settings

## Authentication Flow

1. Users can sign in via magic links or OAuth (Google)
2. Sessions are managed by NextAuth.js v5
3. Protected routes check session in `layout.js`
4. User data is stored in MongoDB

## Payment Flow

1. Users click checkout button → API creates Stripe session
2. Stripe redirects to success/cancel URLs
3. Webhook receives payment confirmation
4. User's `hasAccess` field is updated in database

## Code Conventions

### Components
- Use `"use client"` directive for client components
- Import config from `@/config`
- Use DaisyUI classes for styling

### API Routes
- Always return proper status codes
- Use try-catch for error handling
- Validate input before processing

### Database
- Always call `connectMongo()` before operations
- Use Mongoose schema validation
- Include timestamps in schemas

## Example Patterns

### Creating a new API route:
```javascript
import { NextResponse } from "next/server";
import { auth } from "@/libs/auth";
import connectMongo from "@/libs/mongoose";

export async function POST(req) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectMongo();
    const body = await req.json();

    // Your logic here

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

### Creating a new page:
```javascript
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Example Page - ${config.appName}`,
  canonicalUrlRelative: "/example",
});

export default function ExamplePage() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold">{config.appName}</h1>
    </main>
  );
}
```

## Environment Variables

Required environment variables (in `.env.local`):
- `NEXTAUTH_SECRET`: Random secret for NextAuth
- `NEXTAUTH_URL`: Base URL (http://localhost:3000 for dev)
- `MONGODB_URI`: MongoDB connection string
- `STRIPE_PUBLIC_KEY`: Stripe publishable key
- `STRIPE_SECRET_KEY`: Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook signing secret
- `RESEND_API_KEY`: Resend API key
- `GOOGLE_ID` (optional): Google OAuth client ID
- `GOOGLE_SECRET` (optional): Google OAuth client secret

## Common Tasks

### Adding a new protected page:
1. Create page in `app/dashboard/[pagename]/page.js`
2. The page is automatically protected by `app/dashboard/layout.js`

### Adding a new pricing plan:
1. Create plan in Stripe Dashboard
2. Add priceId to `config.js` in `stripe.plans` array
3. Handle in webhook if needed

### Sending an email:
```javascript
import { sendEmail } from "@/libs/resend";

await sendEmail({
  to: "user@example.com",
  subject: "Welcome!",
  html: "<p>Welcome to our app!</p>",
});
```

## Best Practices

1. Always use the central `config.js` for app-wide settings
2. Keep API routes thin - move logic to lib functions
3. Use proper TypeScript types if migrating to TS
4. Follow the existing code style and patterns
5. Use DaisyUI theme classes for consistent styling