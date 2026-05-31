import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'ก๋วยเตี๋ยวไก่ตุ๋นรสเด็ด - Thai Street Food Noodles',
  description: 'สัมผัสรสชาติก๋วยเตี๋ยวไก่ตุ๋นริมทางแท้ๆ รสชาติเข้มข้น กลมกล่อม ที่ดำเนินสะดวก ราชบุรี',
  openGraph: {
    "title": "ก๋วยเตี๋ยวไก่ตุ๋นรสเด็ด - Thai Street Food Noodles",
    "description": "สัมผัสรสชาติก๋วยเตี๋ยวไก่ตุ๋นริมทางแท้ๆ รสชาติเข้มข้น กลมกล่อม ที่ดำเนินสะดวก ราชบุรี",
    "url": "https://braisedchickennoodle.com",
    "siteName": "ก๋วยเตี๋ยวไก่ตุ๋นรสเด็ด",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/blurred-photo-supermarket-your-advertising_185193-110539.jpg",
        "alt": "Thai street food noodle stall"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ก๋วยเตี๋ยวไก่ตุ๋นรสเด็ด - Thai Street Food Noodles",
    "description": "สัมผัสรสชาติก๋วยเตี๋ยวไก่ตุ๋นริมทางแท้ๆ รสชาติเข้มข้น กลมกล่อม ที่ดำเนินสะดวก ราชบุรี",
    "images": [
      "http://img.b2bpic.net/free-photo/blurred-photo-supermarket-your-advertising_185193-110539.jpg"
    ]
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
