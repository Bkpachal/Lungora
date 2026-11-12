LUNGORA GUIDE - UPLOAD-READY STATIC SITE
Domain: https://en-lungora.vercel.app/

DEPLOY ON VERCEL
1. Upload the CONTENTS of lungora-website/ (index.html at project root). Framework preset: Other. No build command.
2. Open https://en-lungora.vercel.app/ and click every button once.

INDEXING
- Google: your verification meta tag is already in index.html. In Search Console add the property, then Sitemaps > submit: sitemap.xml
- Bing: Webmaster Tools > add site (or import from Search Console). If Bing gives a meta tag, paste it in <head> of index.html. Submit https://en-lungora.vercel.app/sitemap.xml
- robots.txt already points to the sitemap. Do not block /assets/.

IMAGES
Used from your uploads (cropped + converted to WebP): 1-bottle, 2-bottles, 3-bottles, 6-bottles.
Not supplied (so replaced with original SVG icons or omitted): ingredient photos, lady photo, van, guarantee badge, label zoom, certifications, user photos, cards.
To add more real images: put them in assets/images/ and update the <img> tags in index.html.

AFFILIATE LINK (exact, no parameters added): https://mwebkivo.com/13436/5574/2/
Used in all purchase CTAs with rel="sponsored noopener noreferrer".

TODO: add a public contact email in pages/contact.html (none supplied).
