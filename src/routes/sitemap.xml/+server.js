export async function GET() {
	return new Response(
		`
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

        <url>
            <loc>https://www.liande.me/</loc>
            <lastmod>2026-06-28T16:00:56+00:00</lastmod>

            <xhtml:link rel="alternate" hreflang="en" href="https://www.liande.me/" />
            <xhtml:link rel="alternate" hreflang="de" href="https://www.liande.me/de" />
            <xhtml:link rel="alternate" hreflang="x-default" href="https://www.liande.me/" />
        </url>

        <url>
            <loc>https://www.liande.me/de</loc>
            <lastmod>2026-06-28T16:00:56+00:00</lastmod>

            <xhtml:link rel="alternate" hreflang="en" href="https://www.liande.me/" />
            <xhtml:link rel="alternate" hreflang="de" href="https://www.liande.me/de" />
            <xhtml:link rel="alternate" hreflang="x-default" href="https://www.liande.me/" />
        </url>

        </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
