import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Slack Meeting Blocker — Block Calendar During Focus Time",
  description: "Automatically blocks your calendar when your Slack status shows focus time. Connect Slack and Google Calendar to protect deep work sessions."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="035f2ea0-d3d3-4611-b46b-4e8514cc9da4"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
