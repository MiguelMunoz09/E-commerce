
import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
			<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
      <link rel='manifest' href="/manifest.json"/>
      <meta charSet='utf-8'/>
      </Head> 
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
