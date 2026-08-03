# Abraham Insurance Website

A complete, responsive insurance website built with Next.js, TypeScript, React, and Tailwind CSS. It includes personal and business insurance pages, wildfire and California FAIR Plan education, a referral-partner page, eight educational articles, legal disclosures, local SEO, and a quote form that sends email through Resend.

## 1. Download and extract

1. Download `abraham-insurance-website-nextjs.zip`.
2. Right-click the ZIP and choose **Extract All**.
3. Open the extracted folder. You should immediately see `package.json`, `app`, `components`, `content`, `lib`, `public`, and this `README.md`.
4. Do not upload the ZIP itself to GitHub. Upload the extracted contents.

## 2. Run locally

Install Node.js 22 or newer, open a terminal in the project folder, and run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. The form will show a configuration message until the environment variables below are added.

## 3. Create a GitHub repository

1. Sign in to GitHub and select **New repository**.
2. Name it `abraham-insurance-website` and create it without adding a README or `.gitignore`.
3. Select **uploading an existing file**.
4. Drag all extracted project contents into the upload area together. The folders must remain folders.
5. Confirm that `package.json` appears at the repository root, not inside another wrapper folder.
6. Commit the files.

For larger projects, GitHub Desktop is easier: choose **Add an Existing Repository from your Hard Drive**, select the extracted folder, then publish it.

## 4. Connect Resend

1. Create an account at [Resend](https://resend.com/).
2. Add and verify a domain you control. Follow Resend’s DNS instructions exactly.
3. Create an API key.
4. Choose an inbox for quote notifications.
5. Set `QUOTE_FROM_EMAIL` to an address on the verified sending domain.

Copy `.env.example` to `.env.local` for local testing and replace the examples:

```text
RESEND_API_KEY=re_your_api_key
QUOTE_NOTIFICATION_EMAIL=Abraham.aduran@farmersagency.com
QUOTE_FROM_EMAIL=Insurance Website <quotes@yourdomain.com>
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
```

Never commit `.env.local` or an API key to GitHub.

## 5. Deploy through Vercel

1. Sign in to Vercel and select **Add New → Project**.
2. Import the GitHub repository.
3. Leave the framework preset as **Next.js**.
4. Leave **Root Directory** blank because `package.json` is already at the repository root.
5. Add the four variables from `.env.example` under **Environment Variables**.
6. Select **Deploy**.
7. If variables are added after the first deployment, open **Deployments**, select the latest deployment menu, and choose **Redeploy**.

## 6. Connect a custom domain

In the Vercel project, open **Settings → Domains**, add the domain, and follow the DNS instructions. After the domain works, update `NEXT_PUBLIC_SITE_URL` to the final `https://` address and redeploy.

## 7. Update content

- Contact details, hours, license, office locations, and website URL: `lib/site-config.ts`
- Homepage: `app/page.tsx`
- Service pages: their folders inside `app/`
- Educational articles: `content/articles.ts`
- Colors and visual styling: `app/globals.css`
- Placeholder social image: `public/og-placeholder.svg`

Replace placeholder imagery only with photos or graphics you own or are authorized to use. No carrier logo is included.

## 8. Test the quote form safely

1. Confirm all four environment variables are present.
2. Submit a test using your own contact information.
3. Confirm the success message appears.
4. Confirm the notification reaches `QUOTE_NOTIFICATION_EMAIL`.
5. Confirm Reply sends to the visitor’s submitted email.
6. Delete the test email when complete.

The general form intentionally does not collect Social Security numbers, driver’s license numbers, payment information, or other highly sensitive information. A submission does not bind or alter insurance coverage.

## 9. Validation commands

```bash
npm run lint
npm run build
```

Both commands should complete before deploying changes.

## Troubleshooting

### Vercel cannot find package.json

The repository was uploaded with an extra wrapper folder or the wrong Root Directory was selected. Move `package.json`, `app`, and `components` to the repository root, or set Vercel’s Root Directory to the folder containing `package.json`.

### Module not found

Confirm the full folder structure was uploaded, including `components`, `content`, and `lib`. Run `npm install` again and verify filename capitalization matches imports.

### Incorrect root directory

In Vercel, open **Settings → Build and Deployment → Root Directory**. Keep it blank when `package.json` is at the repository root.

### Missing environment variables

Add `RESEND_API_KEY`, `QUOTE_NOTIFICATION_EMAIL`, `QUOTE_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL` in Vercel, then redeploy. Names are case-sensitive.

### Email form not sending

Confirm the Resend API key is active, the sending domain is verified, `QUOTE_FROM_EMAIL` uses that domain, and the notification address is correct. Review the Vercel Function logs for the `/api/quote` route.

### Build or TypeScript failure

Use Node.js 22 or newer, run `npm install`, then run `npm run lint` and `npm run build`. Do not upload `node_modules` or `.next`; Vercel creates them.

## Important disclosure

Insurance products are subject to eligibility, underwriting, terms, conditions, limitations, and exclusions. Coverage and pricing vary by carrier and applicant. Website content is educational and does not modify any policy. Actual policy language controls. Form submission does not bind or alter coverage, and coverage is not effective until confirmed by an authorized representative and all binding requirements are completed.
