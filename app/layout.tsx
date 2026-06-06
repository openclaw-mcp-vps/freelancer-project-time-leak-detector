import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Time Leak Detector — Find Where Billable Hours Disappear",
  description: "Analyzes your time tracking data to identify scope creep and recover lost billable hours. Built for freelancers, consultants, and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b39450b7-777d-4835-a0c0-499972296a0c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
