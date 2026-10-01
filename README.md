# Geetharaj Tyres & Lubricants — React Website

Premium, component-based React website for Geetharaj Tyres & Lubricants, Hiriadka.

## Stack

- React 18
- Create React App
- React Router
- CSS
- Responsive design
- IntersectionObserver scroll reveals

## Run locally

```bash
npm install
npm start
```

Production build:

```bash
npm run build
```

## Project structure

```text
src/
  components/
    AnnouncementBar.jsx
    Navbar.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Products.jsx
    Brands.jsx
    Gallery.jsx
    MapSection.jsx
    Contact.jsx
    Footer.jsx
    FloatingWhatsApp.jsx
    BackToTop.jsx
    ScrollProgress.jsx
    Reveal.jsx
    Modal.jsx
    SectionHeading.jsx
  pages/
    Home.jsx
    AboutPage.jsx
    ServicesPage.jsx
    ProductsPage.jsx
    BrandsPage.jsx
    GalleryPage.jsx
    DirectionsPage.jsx
    ContactPage.jsx
  data.js
  App.js
  App.css
  index.css
public/
  gallery/
```

## Where to edit business details

Edit `src/data.js`.

This contains:

- business name
- phone numbers
- WhatsApp number
- address
- Google Maps URL
- navigation
- hero slides
- services
- products
- brands
- gallery image paths

## Where to replace images

Put the real shop photographs inside:

`public/gallery/`

Keep the filenames used in `src/data.js`, or change the paths in `data.js`.

Important images include:

- `owner.jpg`
- `hero-1.jpg`
- `hero-2.jpg`
- `hero-3.jpg`
- service images
- product images
- brand images
- `shop.jpg`

The current files are intentionally simple placeholders so the owner can replace them with real photographs.

## Add a new service

Add another object to the `services` array in `src/data.js`.

Example:

```js
{
  id: "new-service",
  title: "New Service",
  description: "Short description.",
  image: "/gallery/new-service.jpg"
}
```

No change to `Services.jsx` is required.

## Add a new product

Add an object to `products` in `src/data.js`.

## Add a new brand

Add an object to `brands` in `src/data.js`.

The existing `Brands.jsx` component automatically renders the new brand.

## Google Maps

Update `BIZ.mapsUrl` in `src/data.js` with the exact Google Maps directions URL supplied by the shop owner.

The embedded map currently uses Hiriadka as a general location and should be replaced with an exact place embed if the owner provides it.

## WhatsApp

Update:

```js
whatsapp: "919972868103"
```

Use the international WhatsApp number without `+` or spaces.

## Design

The UI intentionally uses a restrained automotive palette:

- graphite
- charcoal
- off-white
- subtle gold accent

The real shop/product photographs should be the main visual focus.

## Responsive behavior

Designed for:

- desktop
- laptop
- tablet
- mobile

The CSS includes responsive breakpoints and reduced-motion support.

## Important content rule

Do not add fake:

- reviews
- awards
- years of experience
- customer counts
- prices
- owner personal information
- opening hours

unless the business owner provides them.


## Directions page

The navigation now includes a dedicated **Directions** page.

Layout:
- Left: shop address, phone numbers and action buttons
- Right: large Google Maps view
- Mobile: automatically stacks address above the map

Update `BIZ.mapsUrl` in `src/data.js` when the shop owner provides the exact Google Maps place/directions URL.
