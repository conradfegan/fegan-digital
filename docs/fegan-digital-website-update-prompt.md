# Fegan Digital website update

You are updating fegandigital.com, a Next.js, TypeScript and Tailwind site deployed on Vercel. This is one large update covering copy, structure, a new Work page and a visual polish pass.

## Why this matters

On 14 October 2026 I am attending the International AI Summit in Dublin. Potential clients and contacts will look the site up afterwards, mostly on their phones, and will give it a few seconds. The site currently makes promises but shows no evidence of delivered work, and the homepage is too long. After this update it should be shorter, show real client work, and look excellent on mobile and desktop.

## How to work

1. Start by reading the whole codebase: every page, shared components, metadata, the Open Graph image generator, the sitemap and the Tailwind config. Understand the existing design system before changing anything.
2. Work on a new branch. Do not merge or deploy to production. I will review the Vercel preview first.
3. Use the copy in this document exactly as written. Do not invent clients, statistics, testimonials, logos, screenshots or results. If something you need is missing, leave it out and list it in your summary.
4. Keep British English spelling and the existing "we" voice.
5. When finished, run the build and linter, complete the checks at the end of this document, and give me a short summary of what changed, file by file, plus anything you were unsure about.

## Site-wide rules

### Remove every em dash
There must be no em dashes anywhere on the site. That covers page copy, headings, metadata titles and descriptions, Open Graph and Twitter tags, image alt text, the generated Open Graph image, the privacy page and structured data.

Do not swap them for en dashes or spaced hyphens. Rewrite each sentence so it reads naturally with a comma, a full stop, a colon or brackets. Search the source for the literal character (U+2014), the HTML entity `&mdash;` and the escape `\u2014`, and fix every match.

### My name
Change "Conrad Fegan" to "Conrad Arthurs-Fegan" everywhere it appears: body copy, photo captions, alt text, metadata and structured data. The company name stays "Fegan Digital".

### Who we serve
Replace "small businesses", "SMEs" and similar with "businesses and organisations" in body copy and metadata descriptions. One of our clients is a public body, so the wording must not exclude organisations that are not companies.

### Things that stay exactly as they are
- The tagline "Modern systems for growing businesses".
- The brand: purple #6633FF, the wordmarks and my photo.
- The existing AI wording in page titles and service names. Do not add any statements about how the site or our systems are built.
- The contact form. Do not add a call scheduler.
- No phone number anywhere on the site.

### LinkedIn
Add a link to my LinkedIn profile, opening in a new tab with `rel="noopener noreferrer"`:

https://www.linkedin.com/in/conrad-arthurs-fegan-b6928b398

Place it in the footer, in the "In brief" list on the About page, in the contact details on the Contact page, and beside "More about us" in the homepage About block. Use a clean LinkedIn icon with an accessible label.

### Navigation
Add "Work" to the main navigation, before "Services". Order: Work, Services, About, Contact, then the "Book a free discovery call" button. Add "Work" to the footer Company list and add `/work` to the sitemap.

## Homepage

Rebuild the homepage in this order. It should end up roughly half its current length. Remove anything from the current homepage that is not listed here, after making sure the detail still exists on the Services page (see the Services section below).

### 1. Hero

Eyebrow: Based in Newry, serving Ireland and the UK

Heading: We modernise how your business runs.

Supporting text: Fegan Digital replaces paper, email and copy-paste admin with systems that do the work for you: automations, internal tools, websites and apps. Fixed price, agreed in writing before anything is built.

Buttons: "Book a free discovery call" (primary, links to /contact) and "See our work" (secondary, links to /work).

Side card, replacing "Common admin bottlenecks":

Card heading: Admin we take off your plate
- Bookings and invoicing
- Staff leave and expenses
- Customer enquiries and follow-ups
- Reports and documents

Card footnote (unchanged): Mapped during discovery. Built only where there is a clear business case.

### 2. Trust strip

Four items only:
- Founder-led
- Fixed prices
- Written plan before any build
- Fully insured

### 3. Work

Section label: Work
Heading: Real systems, in daily use.

Two cards side by side on desktop, stacked on mobile.

**Card 1**
Client: Health Matters (Occupational Health) Ltd
Project: Booking and invoicing system
Text: A booking and invoicing system built in Excel, the tool the team already used every day. Now in daily use by the admin team.
Quote: "The booking check is much cleaner, the data feels far less overwhelming, and you've somehow managed to achieve the rare feat of making a spreadsheet more user-friendly without breaking everyone's spirit in the process."
Attribution: Elaine McCrory, Operations Coordinator
Link: "Read the case study" to /work#health-matters

**Card 2**
Badge: Currently building
Client: East Border Region Ltd
Project: Leave, time in lieu and mileage system
Text: Replacing paper and email admin with one system for requests and approvals, for a cross-border partnership serving six local authorities.
Link: "See the project" to /work#east-border-region

### 4. The problem

Section label: The problem
Heading: Admin is costing you more than you realise.
Text: Most organisations lose hours every week to work that does not need a person doing it. These are the four places we see it most.

Four cards, matching the hero list:

- **Bookings and invoicing.** Details typed in by hand for every job, and prices looked up or remembered. Slow, and easy to get wrong.
- **Staff leave and expenses.** Requests on paper or buried in email, approvals chased in person, and totals worked out by hand at month end.
- **Customer enquiries and follow-ups.** Enquiries arrive through different channels and some go unanswered. Follow-ups depend on someone remembering.
- **Reports and documents.** The same report or document built from scratch each time, when the information already exists.

### 5. What we do

Section label: What we do
Heading: Take on more work without taking on more admin.
Text: We build automations and internal tools around how your organisation works. We also build websites and apps, with the same clear process and fixed pricing.

Four compact links to the matching anchors on the Services page:
- AI Automation and Workflow
- Web Development
- Web and Mobile Apps
- Custom Software and Integrations

One button: "See all services" to /services.

### 6. Process

Section label: Process
Heading: How we work.

Four steps, one line each:

1. **Free 30-minute discovery call.** A call by video or phone to understand your business and see whether we are a fit.
2. **Half-day visit.** We sit with the people doing the work and see how things run. Remote or hybrid for clients further afield.
3. **Written findings within 7 days.** Specific recommendations with fixed prices. Nothing is locked in until you say yes.
4. **Fixed-price build and support.** We build what was agreed at the price quoted, with optional ongoing support.

Pull quote beneath the steps: "Nothing is built until you have seen the plan, the price and the timeline in writing, and said yes to all three."

### 7. About

Photo of me with the caption "Conrad Arthurs-Fegan, Founder".

Heading: Founder-led, from start to finish.
Text: Fegan Digital is founded and run by Conrad Arthurs-Fegan, based in Newry. When you work with us, you work directly with Conrad from first call to final delivery.

Links: "More about us" to /about, plus the LinkedIn link.

### 8. Closing call to action

Heading: Ready to stop losing time to manual admin?
Text: Start with a free 30-minute call. No commitment and no sales pitch.
Button: "Book a free discovery call" to /contact.

## New page: /work

Create a Work page with its own metadata.

Title tag: Our Work | Fegan Digital
Meta description: Systems Fegan Digital has built for businesses and organisations, including a booking and invoicing system for Health Matters and a leave and mileage system for East Border Region.

Page label: Work
Page heading: Systems we have built.
Intro: Every project starts with a written plan and a fixed price. Here is what that looks like in practice.

### Case study (id="health-matters")

**Health Matters (Occupational Health) Ltd**
Booking and invoicing system

**The problem**
Every service Health Matters delivered was logged in one Excel sheet that sat between the admin team and accounts. Company names, invoice emails and credit terms were typed in by hand each time, and the agreed price for each client had to be remembered or looked up. In the words of owner Shaun Doran, the sheet was "busting at the seams", and the admin team was carrying the strain.

**What we built**
A booking and invoicing system built in Excel, the tool the team already used every day. Staff pick the company and the service, and the system fills in the invoicing details and price automatically, flagging anything missing before it reaches accounts.

**How we built it**
- No macros, so there are no security warnings and nothing fragile to maintain.
- We never took their historical bookings, because they held private medical information.
- The data is structured throughout, so the system is ready to connect to future automation.

**The result**
The system is in daily use by the admin team.

Quote 1: "The booking check is much cleaner, the data feels far less overwhelming, and you've somehow managed to achieve the rare feat of making a spreadsheet more user-friendly without breaking everyone's spirit in the process."
Attribution: Elaine McCrory, Operations Coordinator, Health Matters

Quote 2: "Conrad took the time to understand how we work before he built anything. The new system has taken real pressure off the admin team, and I'd recommend him to any business."
Attribution: Shaun Doran, Owner, Health Matters

Reproduce both quotes, and the phrase "busting at the seams", exactly as written. Do not correct or reword them.

Do not add anything about Health Matters beyond this text: no prices, no client or service numbers, no client names, no dates or timeline, and no mention of future phases.

### Current project (id="east-border-region")

Badge: Currently building

**East Border Region Ltd**
Leave, time in lieu and mileage system

East Border Region is a cross-border partnership serving six local authorities. Its team managed annual leave, time in lieu and mileage claims on paper and by email. We are replacing that with one system for requests and approvals, with mileage coded to the right EU-funded project. It runs on the Microsoft 365 the organisation already has and will be handed over with full documentation.

Do not claim any results for this project. It is not finished.

### Page ending

Heading: Have something similar in mind?
Text: Start with a free 30-minute call. No commitment and no sales pitch.
Button: "Book a free discovery call" to /contact.

## Services page

Keep the page structure and all four services. Then:

- Make sure the full "What can be automated" list and the "What you get" list live here, since they are being removed from the homepage. Do not duplicate them if they are already present.
- Add this line near the top of the automation section: "We start with the tools you already have, and only recommend something new when it earns its place."
- Apply the site-wide rules.

## About page

- Apply the site-wide rules, including my name in the heading area, caption and "In brief" list.
- Add LinkedIn to the "In brief" list.
- Change "most SMEs" to "most businesses and organisations".
- Tighten any paragraph that repeats a point already made on the page. Do not change the meaning.

## Contact page

- Add LinkedIn to the contact details.
- Keep the form and its fields as they are.
- Apply the site-wide rules.

## Privacy page

Apply the site-wide rules only. Do not change the meaning of any policy text.

## Metadata

Update titles, descriptions, Open Graph and Twitter tags on every page to follow the site-wide rules. The homepage description becomes:

"Practical AI automation and digital systems for businesses and organisations that want to stop wasting time on admin. Based in Newry, serving Ireland and the UK."

Check the generated Open Graph image and its alt text for em dashes and the old wording, and fix them. Use "Fegan Digital: AI Automation and Digital Systems" for the alt text.

## Design: this needs to look great

Treat this as a quality pass on the whole site, with the new sections held to the highest standard. Refine the existing visual identity. Do not redesign it from scratch.

- **Mobile first.** Most summit visitors will open the site on a phone. Check every page at 375px, 768px and 1440px wide. No horizontal scrolling, no cramped text, no oversized headings wrapping badly, and tap targets of at least 44px.
- **The hero.** The new heading is short, so give it presence: generous size, tight line height and clear space around it. The two buttons should have an obvious primary and secondary.
- **The Work section and page.** These are the most important new elements. Give the case study clear visual hierarchy, quotes that look like real testimonials (distinct treatment, clear attribution), and a tidy "Currently building" badge using the brand purple. The two homepage cards should be equal height and feel like a matched pair.
- **Rhythm and consistency.** Use one spacing scale and one type scale across all pages. Section padding, card styles, corner radii, borders and button styles should match everywhere.
- **Polish.** Add considered hover and focus states on every link, button and card. Any motion should be subtle and must respect `prefers-reduced-motion`.
- **Accessibility.** Text contrast must meet WCAG AA, including purple on dark and white on purple. Use one h1 per page, a logical heading order, visible keyboard focus and alt text on every image.
- **Performance.** Use `next/image` with correct sizes, avoid layout shift and do not add heavy dependencies.
- **No filler.** Do not add stock photos, decorative illustrations, fake screenshots or client logos.

If you have a browser or screenshot tool available, take screenshots of every page at the three widths and review them yourself before finishing. Fix anything that looks off.

## Final checks

Confirm each of these in your summary:

1. A search of the source for U+2014, `&mdash;` and `\u2014` returns no matches in site content.
2. A search for "Conrad Fegan" returns no matches.
3. A search for "small business" and "SME" returns no matches in site copy or metadata.
4. No phone number and no scheduler have been added.
5. The tagline "Modern systems for growing businesses" is unchanged.
6. Both quotes on the Work page match this document word for word.
7. Every internal link works, including /work, /work#health-matters and /work#east-border-region.
8. The build and linter pass with no errors.
9. Every page has been checked at 375px, 768px and 1440px.
